<template>
  <div class="block">
    <h1 class="title">Point splitter for top champions!</h1>
    
    <TabsHeader :current="currentTab" @tab-clicked="tabClicked" :tabs="tabs" />
    
    <Tab :active="currentTab == 'participants'">
      <Participants v-model:items="items" @extracted="currentTab = 'winners'" />
    </Tab>

    <Tab :active="currentTab == 'winners'">
      <Winners v-if="hasItems()" :items="items" :numberOfMember="numberOfMember" v-model:total="total" @splitted="splittedValues" />
      <div v-else class="notification is-warning is-light">
        Merci de choisir les participants d'abord.
      </div>
    </Tab>

    <Tab :active="currentTab == 'points'">
      <PointSplitter
        v-if="repartition[ numberOfMember - 1 ] > 0"
        :numberOfMember="numberOfMember"
        :winners="winners.winners"
        :repartition="repartition"
        :buckets="winners.buckets"
        :splitter="winners.splitter"
        :splitterValue="winners.splitterValue"
        @validated="pointValidated"
      />
      <div v-else class="notification is-warning is-light">
        Merci de choisir les gagnants et le répartiteur.
      </div>
    </Tab>

    <Tab :active="currentTab == 'messages'">
      <MessageGenerator
        :buckets="winners.buckets"
        :splitters="splitters"
        :winners="winners.winners"
        v-if="winners && winners.buckets && winners.buckets.length > 0"
      />
      <div v-else class="notification is-warning is-light">
        Merci de choisir de répartir les points avant.
      </div>
    </Tab>
  </div>
</template>

<script>
import TabHeader from './Datas/TabHeader'

import TabsHeader from './components/TabsHeader.vue'
import Tab from './components/Tab.vue'
import Participants from './components/Participants.vue'
import Winners from './components/Winners.vue'
import PointSplitter from './components/PointSplitter.vue'
import MessageGenerator from './components/MessageGenerator.vue'

export default {
  name: 'App',
  data: function() {
    return {
      tabs: [
        new TabHeader('participants', 'Participants', 'mdi-account-multiple'),
        new TabHeader('winners', 'Gagnants', 'mdi-shield-account-outline'),
        new TabHeader('points', 'Répartitions', 'mdi-account-switch'),
        new TabHeader('messages', 'Messages', 'mdi-message-bookmark-outline'),
      ],
      currentTab: 'participants',
      items: {},
      numberOfMember: 3,
      total: 0,
      repartition: new Array(this.numberOfMember).fill(0),
      winners: {},
      splitters: {},
    }
  },
  methods: {
    tabClicked: function(event) {
      this.currentTab = event.id;
    },
    hasItems: function() {
      return Object.keys(this.items).length > 0
    },
    splittedValues: function(event) {
      this.repartition = [
        this.total * 0.5,
        this.total * 0.3,
        this.total * 0.2,
      ]

      this.winners = {...event}
      this.currentTab = 'points';
    },
    pointValidated: function(event) {
      this.currentTab = 'messages';
      this.splitters = event.splitter;
      this.winners.buckets = event.buckets;
    }
  },
  components: {
    TabsHeader,
    Tab,
    Participants,
    Winners,
    PointSplitter,
    MessageGenerator,
  }
}
</script>
