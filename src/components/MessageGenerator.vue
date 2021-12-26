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
			<h5 class="subtitle is-5">Message global</h5>
			<div class="content">
				<blockquote @click="copyToClipboard" @touchend="copyToClipboard">
					Le calcul de la répartition des gains a eu lieux, merci aux participants!<br />
					Vous trouverez {{ winners.length }} fils (un par gagnant) au sein de la guilde reprenant la répartition des gains.
					<br />
					<template v-for="(winner, column) in winners" :key="column">
						{{ column + 1 }}. {{winner}} : <template v-for="bucket in bucketValues[ column ]" :key="bucket.name">{{ bucket.name }}, </template><br />
					</template>
					<br />
					Vous devez juste vérifier dans quel fil vous devez vous acquitter du don.</blockquote>
			</div>

      <h5 class="subtitle is-5">Récompenses</h5>

<template v-for="(winner, column) in winners" :key="column">
				<div class="content">
					<blockquote @click="copyToClipboard" @touchend="copyToClipboard">🥇🥈🥉Répartition cagnotte {{ winner }}</blockquote>
				</div>
				<div class="content">
					<blockquote @click="copyToClipboard" @touchend="copyToClipboard">
						Bonsoir à toutes et tous,<br />
						Les attributions des dons pour les meilleurs progressions en points, sur la semaine du {{ startOfPeriod }} au {{ endOfPeriod }}, pour le {{ column + 1 }}° gagnant : {{ winner }}<br />
						Merci de lier un GM dans ce fil (⚠ pas un gm 1.9 ⚠, pour la facilité le suivit) afin que les promesses de dons vous soient déposées.<br />
						<br />
						Ps: comme c’est un don, merci de reverser le bénéfice sur le même gm au cas où vous prenez une place à pf sur le gm. Je compte sur votre honnêteté!
					</blockquote>
					<blockquote @click="copyToClipboard" @touchend="copyToClipboard">Doivent déposer sur le gm de {{ winner }} :<br />
<template v-for="bucket in bucketValues[ column ]" :key="bucket.name">
{{ bucket.name }} {{ bucket.value }}<br />
</template>
{{ splitters[0].splitter }} {{ splitters[0].values[ column ] }}
					</blockquote>
				</div>
	</template>

      <h5 class="subtitle is-5">Nouveau sujet top message</h5>
      <div class="content">
        <blockquote @click="copyToClipboard" @touchend="copyToClipboard">🥇Cagnotte du {{ startOfNextPeriod }} au {{ endOfNextPeriod }}</blockquote>
      </div>
      <div class="content">
        <blockquote @click="copyToClipboard" @touchend="copyToClipboard">
Suite au classement de la meilleure progression, nous récompensons le top 3 de la meilleure progression ***toutes les 2 semaines***<br />
Comment ?<br />
Sur ce fil, chaque 2 semaines, les promesses aux dons seront ouvertes et chaque joueur pourra écrire son nom et le nombre de PF qu’il souhaite donner.  Ce don n’est absolument pas obligatoire et seuls ceux qui le souhaitent participent 😊 Mais ne sauront pris en compte comme participants que ceux participants à la cagnotte.<br />
Une promesse de don = une inscription à la cagnotte, avant la clôture.<br />
<br />
Le total de ces promesses constituera la cagnotte qui sera répartie entre les trois vainqueurs de la façon suivante :<br />
P1 : 50% des dons 🎁🎁🎁<br />
P2 : 30% des dons🎁🎁<br />
P3 : 20% des dons🎁<br />
<br />
Les gagnants pourront alors indiquer dans le fil sur quel GM ils souhaitent que la récompense soit déposée. Pas d’inquiétude ! pas de calcul de répartition ou de pourcentage à faire ! J’indiquerai à chacun le lundi à qui il doit donner ses PF pour que chaque gagnant touche le bon montant de la récompense 😊<br />
<br />
Mais il est donc important d’attendre mes indications avant de déposer les PF, sinon il nous sera impossible d’obtenir la répartition 50, 30, 20 !<br />
<br />
Il sera impossible de gagner deux fois d’affiliées :<br />
Exemple:<br />
si vous êtes 3ième la periode 1<br />
Et 3ième la période 2.<br />
Vous ne toucherez pas de récompense. Celle ci sera attribuée au 4ième.<br />
<br />
Autre exemple:<br />
Vous êtes 3ième la période 1, premier la période 2, ==> Vous ne toucherez pas de récompenses<br />
<br />
Tout redevient normal en période 3, vous pouvez de nouveau gagner la récompense<br />
<br />
Les membres du conseil de Calaadan renoncent à leur droit de gagner la cagnotte, merci à eux 😉. Les membres du conseil sont Bobbie joe, Elemental, Christophe, Quiétus, Fred et Honorius.
        </blockquote>
      </div>
      <div class="content">
        <blockquote @click="copyToClipboard" @touchend="copyToClipboard">
Cagnotte de la période du {{ startOfNextPeriod }} au {{ endOfNextPeriod }} (cette semaine {{ winners.join(', ') }} ne sont pas éligibles aux gains mais rien ne vous empêche d'être dans le top 3 quand même ;))<br />
Promesses de dons (Nom suivi de pf, suivit de '(auto)' si vous voulez un report automatique):<br />
<template v-for="participant in autoParticipants" :key="participant.name">{{ participant.name }} {{ participant.value }} (auto)<br /></template>
<br />
Total {{ sumAutoParticipants }}
        </blockquote>
      </div>
    </div>
  </div>
</template>


<script>
import Participant from '../Datas/Participant';

export default {
  name: 'MessageGenerator',
  data: function(){
    return {
      period: '',
      bucketValues: [],
      autoParticipants: [],
      sumAutoParticipants: 0,
    }
  },
  mounted() {
    let newBuckets = [];
    let autoParticipants = [];
    for(let bucket of this.buckets) {
      for(let column in bucket) {
        let col = bucket[ column ];
        if (col.value > 0) {
          if (!newBuckets[ column ]) {
            newBuckets[ column ] = [];
          }
          newBuckets[ column ].push({...col});

          if (col.isAuto) {
            autoParticipants.push(col)
          }
        }
      }
    }

    if (this.items[ this.splitters[0].splitter ].isAuto) {
      let val = new Participant(this.splitters[0].splitter, this.splitters[0].values.reduce((sum, val) => sum += val, 0));
      autoParticipants.push(val)
    }

    this.autoParticipants = autoParticipants;
    this.sumAutoParticipants = autoParticipants.reduce((sum, participant) => sum += participant.value, 0);
    this.bucketValues = newBuckets;
  },
  props: {
    winners: Array,
    buckets: Array,
    splitters: Object,
    items: Array,
  },
  methods: {
    copyToClipboard: function(event) {
      let element = event.target;

			// select text to mark the copy
      if (element.createTextRange) {
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

			// legacy copy :  document.execCommand('copy');
			const cb = navigator.clipboard;
			cb.writeText(element.innerText);
    }
  },
  computed: {
    startOfPeriod: function() {
      if (typeof this.period == 'string') {
        let matched = this.period.match('([0-9]+)-([0-9]+)-([0-9]+)')
        return matched[3] + '/' + matched[2];
      }

      return "" + this.period.getDate() + '/' + (this.period.getMonth() + 1);
    },
    endOfPeriod: function() {
      let dateOfPeriod = (typeof this.period == 'string') ? new Date(this.period) : this.period;
      dateOfPeriod.setDate(dateOfPeriod.getDate() + 13);

      // avoid any stupide timezone stuff
      dateOfPeriod.setHours(12);

      return "" + dateOfPeriod.getDate() + '/' + (dateOfPeriod.getMonth() + 1);
    },
    startOfNextPeriod: function() {
      let dateOfPeriod = (typeof this.period == 'string') ? new Date(this.period) : this.period;
      // next monday
      dateOfPeriod.setDate(dateOfPeriod.getDate() + 14);

      // avoid any stupide timezone stuff
      dateOfPeriod.setHours(12);

      return "" + dateOfPeriod.getDate() + '/' + (dateOfPeriod.getMonth() + 1);
    },
    endOfNextPeriod: function() {
      let dateOfPeriod = (typeof this.period == 'string') ? new Date(this.period) : this.period;
      // next monday then jump
      dateOfPeriod.setDate(dateOfPeriod.getDate() + 14 + 13);

      // avoid any stupide timezone stuff
      dateOfPeriod.setHours(12);

      return "" + dateOfPeriod.getDate() + '/' + (dateOfPeriod.getMonth() + 1);
    }
  }
}
</script>
