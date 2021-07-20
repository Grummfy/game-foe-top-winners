<template>
  <div class="tabs is-centered is-boxed is-medium">
    <ul>
      <li v-for="tab in tabs" :key="tab.id" :class="{ 'is-active': tab.id == current }" @click="clickedTab(tab)">
        <a>
          <span class="icon is-large">
            <span class="mdi" :class="tab.icon" aria-hidden="true"></span>
          </span>
          {{ tab.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import TabHeader from "../Datas/TabHeader";

export default {
  name: "TabsHeader",
  emits: ['tab-clicked'],
  props: {
    tabs: {
      type: Array,
      validator(tabs) {
          // check that each elements is a TabHeader
          // also check that the array is not empty ;)
          return tabs.length > 0 && tabs.reduce((response, tab) => response && tab instanceof TabHeader, true)
      },
    },
    current: String,
  },
  methods: {
      clickedTab: function(tab) {
          this.$emit('tab-clicked', tab)
      }
  },
};
</script>
