<template>
  <div class="table-container">
    <h3 class="title is-3">Répartitions</h3>
    <h5 class="subtitle is-5">Répartition des gains entre les gagnants</h5>

    <table class="table is-stripped is-fullwidth">
      <thead>
        <tr>
          <th></th>
          <th v-for="index in numberOfMember" :key="index" colspan="2">
            {{ winners[ index - 1 ] }} ({{ repartition[ index - 1 ] }})
          </th>
        </tr>
        <tr>
          <th></th>
          <template v-for="index in numberOfMember" :key="index">
            <th>Nom</th>
            <th>PF</th>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bucket, line) in bucketValues" :key="line">
          <td></td>
          <template v-for="(col, column) in bucket" :key="column">
            <td>
              <template v-if="col.value > 0">
                <button class="button" aria-label="move to left" v-if="column != 0 && line != 0" @click="moveToLeft(column, line, col)">
                  <span class="icon is-large">
                    <span class="mdi mdi-arrow-left-thick" aria-hidden="true"></span>
                  </span>
                </button>
                {{ col.name }}
              </template>
            </td>
            <td>
              <template v-if="col.value > 0">
                {{ col.value }}
                <button class="button is-pulled-right" aria-label="move to right" v-if="column != (numberOfMember - 1) && line != 0" @click="moveToRight(column, line, col)">
                  <span class="icon is-large">
                    <span class="mdi mdi-arrow-right-thick" aria-hidden="true"></span>
                  </span>
                </button>
              </template>
            </td>
          </template>
        </tr>
        <tr>
          <td :class="{'is-danger': sumOfSPlittedValues > splitterValue, 'is-success': sumOfSPlittedValues == splitterValue}">
            {{ splitter }} (reste {{ splitterValue - sumOfSPlittedValues }} sur {{ splitterValue }})
          </td>
          <template v-for="index in numberOfMember" :key="index">
            <td colspan="2">
              <input type="number" min="0" :max="splitterValue - sumOfSPlittedValues + splitValues[ index - 1]" v-model.number="splitValues[ index - 1]" />
            </td>
          </template>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th v-for="index in numberOfMember" :key="index" colspan="2" :class="classOfRepartitionBlance(index - 1)">
            {{ sumOfRepartition[ index - 1 ] + splitValues[ index - 1 ] }} / {{ repartition[ index - 1 ] }}
            ({{ sumOfRepartition[ index - 1 ] + splitValues[ index - 1 ] - repartition[ index - 1 ] }})
          </th>
        </tr>
      </tfoot>
    </table>

    <div class="field">
      <div class="control">
        <button class="button is-info" @click="validatePoints">
            <span class="icon">
                <i class="mid mid-mark-check"></i>
            </span>
            Valider la répartition
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Participant from '../Datas/Participant';

export default {
  name: 'PointSplitter',
  data: function() {
    return {
      splitValues: new Array(this.numberOfMember).fill(0),
      bucketValues: this.buckets,
    }
  },
  props: {
    numberOfMember: Number,
    winners: Array,
    repartition: Array,
    buckets: Array,
    splitter: String,
    splitterValue: Number,
  },
  emmits: ['validated'],
  methods: {
    repartitionBalance: function(index) {
      if ((this.sumOfRepartition[ index ] + this.splitValues[ index ]) < this.repartition[ index ]) {
        return -1
      }
      else if ((this.sumOfRepartition[ index ] + this.splitValues[ index ]) > this.repartition[ index ]) {
        return 1;
      }
      return 0;
    },
    classOfRepartitionBlance: function(index) {
      switch(this.repartitionBalance(index)) {
        case -1:
          return 'is-warning';
        case 0:
          return 'is-success';
        case 1:
          return 'is-danger';
      }
    },
    moveToRight: function(column, line, item) {
      // ignore out of range
      if (column + 1 >= this.numberOfMember) {
        return;
      }

      this.moveToDirection(column, line, item, 1)
    },
    moveToLeft: function(column, line, item) {
      // ignore out of range
      if (column -1 < 0) {
        return;
      }

      this.moveToDirection(column, line, item, -1)
    },
    moveToDirection: function(column, line, item, direction) {
      // 1. remove element and fill with and empty hole
      // remove existing element and replace it with an empty one to avoid emptyness and keep everything coherent
      this.bucketValues[ line ].splice(column, 1, new Participant("", 0))

      // remove hole if exist
      if (this.bucketValues[ line + 1 ] && this.bucketValues[ line + 1 ][ column ].value != 0) {
        const totalLines = this.bucketValues.length;
        for (let i = line; i < totalLines && this.bucketValues[ i + 1 ]; i++) {
          this.bucketValues[ i ][ column ] = this.bucketValues[ i + 1 ][ column ];
        }

        this.bucketValues[ totalLines - 1 ][ column ] = new Participant("", 0);
      }

      // 2. set value at new place
      // search for first empty value in the new column
      let newLine = this.bucketValues.findIndex((element) => element[ column + direction ].value === 0)

      // create the new line if not found
      if (newLine == -1) {
        newLine = this.bucketValues.length;
        this.bucketValues.push((new Array(this.numberOfMember)).fill(new Participant("", 0)));
      }

      // and replace
      this.bucketValues[ newLine ][ column + direction ] = item;
    },
    validatePoints: function() {
      this.$emit('validated', {
          buckets: this.bucketValues,
          splitter: [{
            values: this.splitValues,
            splitter: this.splitter,
          }],
      });
    },
  },
  computed: {
    sumOfRepartition: function() {
        let sums = new Array(this.numberOfMember).fill(0);

      if (this.repartition[ this.numberOfMember - 1 ] <= 0) {
        return sums;
      }

      const numberOfMember = this.numberOfMember;
      this.bucketValues.reduce(function(acc, bucket) {
        for (let i = 0; i < numberOfMember; i++) {
            acc[ i ] += bucket[ i ] ? bucket[ i ].value : 0;
        }

        return acc;
      }, sums)

      return sums;
    },
    sumOfSPlittedValues: function() {
      return this.splitValues.reduce((acc, val) => acc + val, 0)
    }
  },
}
</script>
