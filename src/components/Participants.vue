<template>
  <div>
    <h3 class="title is-3">Participants</h3>

    <div class="field">
      <label class="label">
        Valeurs a répartir : <button class="button is-warning is-small" @click="testValue">test text</button>
      </label>
      <div class="control">
        <textarea class="textarea" v-model="values" style="height: 100%"></textarea>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-info" @click="splitValues">Extraire</button>
      </div>
    </div>
  </div>
</template>

<script>
import Participant from '../Datas/Participant';

export default {
  name: "Participants",
  data: function () {
    return {
      values: "",
    };
  },
  props: {
    items: Object,
  },
  emits: ['update:items', 'extracted'],
  methods: {
    splitValues: function () {
      // no data => do nothing
      if (this.values.trim().length <= 0) {
        return;
      }

      // split line into element and then get values
      let elements = this.values.trim().split("\n");
      const regex = new RegExp("^(.+)\\s+:?([0-9]+)(\\s*\\(auto\\){1})?$");

      let items = [];
      for (let element of elements) {
        // skip empty line
        if (element.trim().length <= 0) {
          continue;
        }

        let line = regex.exec(element.trim());
        // console.log(line);
        // avoir empty line, and total line
        if (line && line[1] && line[2] && line[1].trim().toLowerCase() !== 'total') {
          items.push(new Participant(line[1].trim(), parseInt(line[2]), line[3] !== undefined));
        }
      }

      // sort elements by values
      items = items.sort((a, b) => b.value - a.value);

      // transform back to a collection
      this.$emit('update:items', Object.fromEntries(
        items.map((value) => [value.name, value])
      ));

      this.$emit('extracted');
    },
    testValue: function()
    {
      this.values = "blabla foo bar lorem ipsum : HBHJQJBQBHB\n\nQuietus 100\nHonorius   40\nD.Willy 40 (auto)\nLilliann 100   	(auto)\nCirius 40\nBidule's 456 : 40\nBob :10\nJijy : 80(auto)\n\nLaure 50\nElemental 100\nKarelcote 40\nFoo 40\nBar 40\nTotal 500"
    }
  },
};
</script>
