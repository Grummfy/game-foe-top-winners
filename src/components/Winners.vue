<template>
<div>
    <h3 class="title is-3">Gagants</h3>
    <h5 class="subtitle is-5">Choix des gagnants et du répartiteur</h5>

    <table class="table is-stripped is-fullwidth">
      <tr>
        <th>Nom</th>
        <th>Point</th>
        <th>Gagnant<br />(1<sup>er</sup>, 2<sup>ième</sup>, ...)</th>
        <th>Répartiteur</th>
      </tr>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.value }}</td>
        <td>
            <div class="control">
                <input
                    v-for="index in numberOfMember" :key="index" 
                    type="radio"
                    class="radio"
                    name="winners[ index ]"
                    :value="item.name"
                    v-model="winners[ index ]"
                    :disabled="isPossibleWinner(index)"
                />
            </div>
        </td>
        <td>
            <div class="control">
                <input
                    class="radio"
                    type="radio"
                    name="splitter"
                    :value="item.name"
                    v-model="splitter"
                    :disabled="isPossibleSplitter(item)" />
            </div>
        </td>
      </tr>
    </table>

    <div class="box">
        Total :
        <span class="tag is-info is-medium">
            <span class="icon">
                <i class="mid mid-summit"></i>
            </span>
            {{ totalToSplit }}
        </span>
    </div>

    <div class="field">
      <div class="control">
        <button class="button is-info" @click="splitIntoBuckets">
            <span class="icon">
                <i class="mid mid-call-split"></i>
            </span>
            Répartir
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Winners',
  data: function() {
    return {
      splitter: "",
      winners: function() {
          return [new Array(this.numberOfMember)].fill('');
      },
      buckets: function() {
          return [new Array(this.numberOfMember)].fill([]);
      },
      splitterValue: 0,
    }
  },
  props: {
    numberOfMember: Number,
    items: Object,
    total: Number,
  },
  emmits: ['splitted', 'update:total'],
  methods: {
    isPossibleSplitter: function(item) {
        return this.winners.find(winner => winner.name == item.name) == undefined;
    },
    isPossibleWinner: function(index) {
        const currentName = this.winners[ index ].name;

        // winner can't be the
        if (this.splitter == currentName) {
            return false;
        }

        // already checked in other winners
        for (const [i, winner] of this.winners.entries()) {
            if (i != index && currentName == winner.name) {
                return false;
            }
        }

        return true;
    },
    splitIntoBuckets: function() {
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
      this.$emmits('update:total', this.totalToSplit);
      this.$emmits('splitted', {
          splitter: this.splitter,
          winners: this.winners,
          buckets: this.buckets,
          splitterValue: this.splitterValue,
      });
    },
  },
  computed: {
    totalToSplit: function() {
      if (Object.keys(this.items).length <= 0) {
        return 0;
      }

      return Object.values(this.items).reduce((acc, item) => acc = parseInt(acc) + item.value, 0)
    },
  }
}
</script>
