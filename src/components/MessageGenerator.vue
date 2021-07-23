<template>
  <div>
    <h3 class="title is-3">Messages</h3>
    <div class="field">
      <label for="period" class="label">Début de période</label>
      <div class="control">
         <input type="date" id="period" v-model="period" />
      </div>
    </div>

    <div v-if="period != ''">

      <h5 class="subtitle is-5">Récompenses</h5>

      <pre class="content" @click="copyToClipboard" @touchend="copyToClipboard">
Bonsoir à tous, 
Les attributions des dons pour les meilleurs progressions en points, sur la semaine du {{ startOfPeriod }} au {{ endOfPeriod }}, sont les suivants :
<template v-for="winner in winners" :key="winner">
  * {{ winner }}
</template>

Merci à tous trois de lier votre GM dans ce fil (⚠ pas un gm 1.9 ⚠, pour la facilité le suivit) afin que les promesses de dons vous soient déposées. Les gens vont quitter le fil comme on fait pour les bb gm.

<template v-for="(winner, column) in winners" :key="column">
  {{ column }}. Doivent déposer sur le gm de {{ winner }} :
  <template v-for="bucket in bucketValues[ column ]" :key="bucket.name">
    {{ bucket.name }} {{ bucket.value }}
  </template>
    {{ splitters[0].splitter }} {{ splitters[0].values[ column ] }}
</template>

Ps: comme c’est un don, merci de reverser le bénéfice sur le même gm au cas où vous prenez une place à pf sur le gm. Je compte sur votre honnêteté!
      </pre>

      <h5 class="subtitle is-5">Nouveau sujet top message</h5>
      <pre class="content" @click="copyToClipboard" @touchend="copyToClipboard">
Suite au classement de la meilleure progression, nous récompensons le top 3 de la meilleure progression ***toutes les 2 semaines***
Comment ?
Sur ce fil, chaque 2 semaines, les promesses aux dons seront ouvertes et chaque joueur pourra écrire son nom et le nombre de PF qu’il souhaite donner.  Ce don n’est absolument pas obligatoire et seuls ceux qui le souhaitent participent 😊 Mais ne sauront pris en compte comme participants que ceux participants à la cagnotte.
Une promesse de don = une inscription à la cagnotte    

Le total de ces promesses constituera la cagnotte qui sera répartie entre les trois vainqueurs de la façon suivante :  
P1 : 50% des dons 🎁🎁🎁   
P2 : 30% des dons🎁🎁   
P3 : 20% des dons🎁      

Les gagnants pourront alors indiquer dans le fil sur quel GM ils souhaitent que la récompense soit déposée. Pas d’inquiétude ! pas de calcul de répartition ou de pourcentage à faire ! J’indiquerai à chacun le lundi à qui il doit donner ses PF pour que chaque gagnant touche le bon montant de la récompense 😊       

Mais il est donc important d’attendre mes indications avant de déposer les PF, sinon il nous sera impossible d’obtenir la répartition 50, 30, 20 !      

Il sera impossible de gagner deux fois d’affiliées :     
Exemple:
si vous êtes 3ième la periode 1
Et 3ième la période 2.
Vous ne toucherez pas de récompense. Celle ci sera attribuée au 4ième.

Autre exemple:   
Vous êtes 3ième la période 1   
Premier la période 2   
Vous ne toucherez pas de récompenses   

Tout redevient normal en période 3, vous pouvez de nouveau gagner la récompense

Les membres du conseil de Calaadan renoncent à leur droit de gagner la cagnotte, merci à eux 😉. Les membres du conseil sont Bobbie joe, Elemental, Chokkobons, Christophe, Quiétus et Fred.
      </pre>
      <pre class="content" @click="copyToClipboard" @touchend="copyToClipboard">
Cagnotte de la période du {{ startOfNextPeriod }} au {{ endOfNextPeriod }} (cette semaine {{ winners.join(', ') }} ne sont pas éligibles aux gains mais rien ne vous empêche d'être dans le top 3 quand même ;))

Promesses de dons (Nom suivi de pf):
Total 0
      </pre>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MessageGenerator',
  data: function(){
    return {
      period: '',
      bucketValues: [],
    }
  },
  mounted() {
    let newBuckets = [];
    for(let bucket of this.buckets) {
      for(let column in bucket) {
        let col = bucket[ column ];
        if (col.value > 0) {
          if (!newBuckets[ column ]) {
            newBuckets[ column ] = [];
          }
          newBuckets[ column ].push({...col});
        }
      }
    }
    this.bucketValues = newBuckets;
  },
  props: {
    winners: Array,
    buckets: Array,
    splitters: Object,
  },
  methods: {
    copyToClipboard: function(event) {
      let element = event.target;
      if (document.body.createTextRange) {
        const range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      }
      else if (window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      document.execCommand('copy');
    }
  },
  computed: {
    startOfPeriod: function() {
      if (typeof this.period == 'string') {
        let matched = this.period.match('([0-9]+)-([0-9]+)-([0-9]+)')
        return matched[3] + '/' + matched[2];
      }

      return "" + this.period.getDay() + '/' + (this.period.getMonth() + 1);
    },
    endOfPeriod: function() {
      let dateOfPeriod = (typeof this.period == 'string') ? new Date(this.period) : this.period;
      dateOfPeriod.setDate(dateOfPeriod.getDate() + 13);

      return "" + dateOfPeriod.getDay() + '/' + (dateOfPeriod.getMonth() + 1);
    },
    startOfNextPeriod: function() {
      let dateOfPeriod = (typeof this.period == 'string') ? new Date(this.period) : this.period;
      // next monday
      dateOfPeriod.setDate(dateOfPeriod.getDate() + 14);

      return "" + dateOfPeriod.getDay() + '/' + (dateOfPeriod.getMonth() + 1);
    },
    endOfNextPeriod: function() {
      let dateOfPeriod = (typeof this.period == 'string') ? new Date(this.period) : this.period;
      // next monday then jump
      dateOfPeriod.setDate(dateOfPeriod.getDate() + 14 + 13);

      return "" + dateOfPeriod.getDay() + '/' + (dateOfPeriod.getMonth() + 1);
    }
  }
}
</script>
