<template>
  <div class="table-container">
    <table class="table is-striped">
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
        <tr v-for="(bucket, index) in buckets" :key="index">
          <td></td>
          <template v-for="col in bucket" :key="col.name">
            <td>{{ col.name }}</td>
            <td>{{ col.value }}</td>
          </template>
        </tr>
        <tr>
          <td>{{ splitter }}</td>
          <template v-for="col in bucket" :key="col.name">
            <td>{{ col.name }}</td>
            <td>{{ col.value }}</td>
          </template>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th></th>
          <th v-for="index in numberOfMember" :key="index" colspan="2" :class="classOfRepartitionBlance(index - 1)">
            {{ sumOfRepartition[ index - 1 ] }} / {{ repartition[ index - 1 ] }}
            ( {{ sumOfRepartition[ index - 1 ] - repartition[ index - 1 ] }})
          </th>
        </tr>
      </tfoot>
    </table>
  </div>
</template>


<script>
export default {
  name: 'PointSplitter',
  data: function() {
    return {
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
  methods: {
    repartitionBalance: function(index) {
      if (this.sumOfRepartition[ index ] < this.repartition[ index ]) {
        return -1
      }
      else if (this.sumOfRepartition[ index ] > this.repartition[ index ]) {
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
  },
  computed: {
    sumOfRepartition: function() {
        let sums = [new Array(this.numberOfMember)].fill(0);

      if (this.repartition[ this.numberOfMember - 1 ] <= 0) {
        return sums;
      }

      this.buckets.reduce(function(acc, bucket) {
        for (let i = 0; i < this.numberOfMember; i++) {
            acc[ i ] += bucket[ i ] ? bucket[ i ].value : 0;
        }

        return acc;
      }, sums)

      return sums;
    },
  },
}
</script>

