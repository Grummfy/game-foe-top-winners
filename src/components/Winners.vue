<template>
<div  class="table-container">
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
        <td>
          {{ item.value }}
          <span class="tag is-light is-rounded is-success" v-if="item.isAuto">
            <span class="icon is-large">
              <span class="mdi mdi-autorenew" aria-hidden="true"></span>
            </span>
          </span>
        </td>
        <td>
            <div class="control">
                <input
                    v-for="index in numberOfMember" :key="index" 
                    type="radio"
                    class="radio"
                    :name="'winners[' + (index - 1)  + ']'"
                    :value="item.name"
                    v-model="winners[ index - 1 ]"
                    :disabled="!isPossibleWinner(index - 1, item.name)"
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
                    :disabled="isPossibleSplitter(item.name)" />
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
import Participant from '../Datas/Participant';

export default {
  name: 'Winners',
  data: function() {
    return {
      splitter: "",
      winners: new Array(this.numberOfMember).fill(''),
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
    isPossibleSplitter: function(itemName) {
        return this.winners.find(winner => winner == itemName) != undefined;
    },
    isPossibleWinner: function(index, itemName) {
        // winner can't be the
        if (this.splitter == itemName) {
            return false;
        }

        // avoid that current line is already in one of the other winner
        for (const [i, winner] of this.winners.entries()) {
            // avoid current one & compare to current winner, if already in it
            if (i != index && itemName == winner) {
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
      this.splitterValue = availableValues[this.splitter].value;
      
      delete (availableValues[this.splitter]);

      // then finalise the basic distribution
      let availableValuesAry = Object.entries(availableValues);
      
      
      // TODO, more a round-robin, with random and sum of col to skip the col ;)
      /*
       on trie la liste d'articles par ordre décroissant de taille, puis on range chaque article dans l'ordre. Dans first-fit, on range l'article courant dans la première boîte qui peut le contenir. Dans best-fit, on range l'article dans la boîte la mieux remplie qui puisse le contenir. Ces algorithmes ne sont pas optimaux, mais ils permettent d'obtenir de très bons résultats en pratique.
       https://fr.wikipedia.org/wiki/Probl%C3%A8me_de_bin_packing
      */

    // first add elements with big value
     let initA = [];
     for (let i = this.numberOfMember; i > 0; i--) {
        initA.push(i);
     }

      initA.forEach(function (rep, index)
      {
        while (rep > 0)
        {
          let firstElement = availableValuesAry.shift();
          if (firstElement) {
            // push object
            resolved[ index ].push(firstElement[1]);
          }
          rep--;
        }  
      });
      
      // then fill with what's left
      let cpt = 0;
      let i = null;
      while ((i = availableValuesAry.shift()) != undefined)
      {
        resolved[ cpt % this.numberOfMember ].push(i[1]);
        cpt++;
      }

      // rearrange it to a table rows
      // resolved 0 = first column, 1 = second columns BUT table arre line oriented
      let buckets = [];
      for (let col = 0; col < this.numberOfMember; col++) {
        for (const line in resolved[ col ]) {
          // if the line doesn't exist yet, we create it
          if (buckets[ line ] == undefined) {
            buckets[ line ] = (new Array(this.numberOfMember)).fill(new Participant("", 0, false));
          }
          buckets[ line ][ col ] = resolved[ col ][ line ];
        }
      }

      this.$emit('update:total', this.totalToSplit);
      this.$emit('splitted', {
          splitter: this.splitter,
          winners: this.winners,
          buckets: buckets,
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
