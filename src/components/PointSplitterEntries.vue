<template>
<div>
  <div class="field">
    <label class="label">
      Valeurs a répartir :
    </label>
    <div class="control">
      <textarea class="textarea" v-model="values"></textarea>
    </div>
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-info" @click="splitValues">Extraire</button>
    </div>
  </div>
  <div id="extract" v-if="hasItems()">
    Valeurs extraites :<br />
    <table class="table is-stripped is-fullwidth">
      <tr>
        <th>Nom</th>
        <th>Point</th>
        <th>Gagnant<br />(1<sup>er</sup>, 2<sup>ième</sup>, 3<sup>ième</sup>)</th>
        <th>Répartiteur</th>
      </tr>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.value }}</td>
        <td>
            <div class="control is-medium">
          <input type="radio" name="winners[0]" :value="item.name" v-model="winners[0]" :disabled="winners[1] == item.name || winners[2] == item.name || splitter == item.name" />
            </div>
          <input type="radio" name="winners[1]" :value="item.name" v-model="winners[1]" :disabled="winners[0] == item.name || winners[2] == item.name || splitter == item.name" />
          <input type="radio" name="winners[2]" :value="item.name" v-model="winners[2]" :disabled="winners[0] == item.name || winners[1] == item.name || splitter == item.name" />
        </td>
        <td>
          <input type="radio" name="splitter" :value="item.name" v-model="splitter" :disabled="winners[0] == item.name || winners[1] == item.name || winners[2] == item.name" />
        </td>
      </tr>
    </table>
    total: {{ totalToSplit }}


    <br />
    <button @click="splitIntoBuckets">Répartir</button>
  </div>

  <div id="buckets" v-if="repartition[ numberOfMember - 1 ] > 0" class="table-container">
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
          <th>Nom</th>
          <th>PF</th>
          <th>Nom</th>
          <th>PF</th>
          <th>Nom</th>
          <th>PF</th>
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
    total: {{ totalToSplit }}
  </div>
</div>
</template>

<script>
export default {
  name: 'PointSplitterEntries',
  data: function() {
    return {
      values: "Quietus 100\nHonorius   40\nD.Willy 40\nLilliann 100\nCirius 40\nJijy 80\n\nLaure 50\nElemental 100\nKarelcote 40\n",
      items: {},
      splitter: "",
      winners: ["", "", ""],
      repartition: [0, 0, 0],
      buckets: [[], [], []],
      splitterValue: 0,
      numberOfMember: 3,
    }
  },
  methods: {
    splitValues: function()
    {
      // no data => do nothing
        if (this.values.trim().length <= 0) {
          return;
        }

        this.items = {};

      // split line into element and then get values
        let elements = this.values.trim().split("\n")
        const regex = new RegExp("^(.+)\\s+([0-9]+)$");

        let items = [];
        for (let element of elements) {
          // skip empty line
          if (element.trim().length <= 0) {
            continue;
          }

          let line = regex.exec(element.trim())
          // console.debug(line[1] + '-' + line[2]);
          if (line[1] && line[2]) {
            items.push({
              name: line[1].trim(),
              value: parseInt(line[2])
            })
          }
        }

        // sort elements
        items = items.sort((a, b) => b.value - a.value)

        // transform back to a collection
        this.items = Object.fromEntries(
          items.map((value) => [value.name, value])
        )

        this.jumpTo('extract')
    },
    splitIntoBuckets: function() {
      let total = this.totalToSplit;

      // init winners
      let resolved = [];
      for (let index = 0; index < this.numberOfMember; index++) {
        let winIndex = index == 0 ? (this.numberOfMember - 1) : (index - 1);
        resolved.push([ this.items[ this.winners[ winIndex ] ] ])
      }
      
      let availableValues = { ...this.items };

      delete (availableValues[this.winners[0]]);
      delete (availableValues[this.winners[1]]);
      delete (availableValues[this.winners[2]]);

      // second, remove the splitter
      this.splitterValue = availableValues[this.splitter];
      
      delete (availableValues[this.splitter]);

      // then finalise the basic distribution
      let availableValuesAry = Object.entries(availableValues);
      
      
      // TODO, more a round-robin, with random and sum of col to skip the col ;)
      /*
       on trie la liste d'articles par ordre décroissant de taille, puis on range chaque article dans l'ordre. Dans first-fit, on range l'article courant dans la première boîte qui peut le contenir. Dans best-fit, on range l'article dans la boîte la mieux remplie qui puisse le contenir. Ces algorithmes ne sont pas optimaux, mais ils permettent d'obtenir de très bons résultats en pratique.
       https://fr.wikipedia.org/wiki/Probl%C3%A8me_de_bin_packing
      */

      [3, 2, 1].forEach(function (rep, index)
      {
        while (rep > 0)
        {
          let firstElement = availableValuesAry.shift();
          if (firstElement) {
            resolved[ index ].push(firstElement[1]);
          }
          rep--;
        }  
      });
      
      let cpt = 0;
      let i = null;
      while ((i = availableValuesAry.shift()) != undefined)
      {
        resolved[ cpt % 3 ].push(i[1]);
        cpt++;
      }

      // rearrange it to a table rows
      let buckets = [];
      for (i of [0, 1, 2]) {
        for (const index in resolved[ i ]) {
          if (buckets[ index ] == undefined) {
            buckets[ index ] = [];
          }
          buckets[ index ].push(resolved[ i ][ index ]);
        }
      }

      this.buckets = buckets;

      this.repartition = [
        total * 0.5,
        total * 0.3,
        total * 0.2,
      ]

      this.jumpTo('buckets')
    },
    jumpTo: function(elementId) {
      this.$nextTick(() => { document.getElementById(elementId).scrollIntoView() })
    },
    hasItems: function() {
      return Object.keys(this.items).length > 0
    },
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
    }
  },
  computed: {
    totalToSplit: function() {
      if (!this.hasItems()) {
        return 0;
      }

      return Object.values(this.items).reduce((acc, item) => acc = parseInt(acc) + item.value, 0)
    },
    sumOfRepartition: function() {
      if (this.repartition[2] <= 0) {
        return [0, 0, 0];
      }

      let sums = [0, 0, 0];
      this.buckets.reduce(function(acc, bucket) {
        acc[0] += bucket[0] ? bucket[0].value : 0;
        acc[1] += bucket[1] ? bucket[1].value : 0;
        acc[2] += bucket[2] ? bucket[2].value : 0;
        return acc;
      }, sums)

      return sums;
    },
  }
}
</script>
