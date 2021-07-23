<template>
  <div>
    <h3 class="title is-3">Participants</h3>

    <div class="field">
      <label class="label">
        Valeurs a répartir :
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
export default {
  name: "Participants",
  data: function () {
    return {
      values: "", // "Quietus 100\nHonorius   40\nD.Willy 40\nLilliann 100\nCirius 40\nJijy 80\n\nLaure 50\nElemental 100\nKarelcote 40\n",
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
      const regex = new RegExp("^(.+)\\s+([0-9]+)$");

      let items = [];
      for (let element of elements) {
        // skip empty line
        if (element.trim().length <= 0) {
          continue;
        }

        let line = regex.exec(element.trim());
        if (line[1] && line[2]) {
          items.push({
            name: line[1].trim(),
            value: parseInt(line[2]),
          });
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
  },
};
</script>
