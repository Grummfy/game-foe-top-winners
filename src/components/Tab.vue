<template>
    <section class="tab-content" v-if="active">
        <div class="box">
            <slot></slot>
        </div>
    </section>
</template>


<script>
export default {
  name: "Tab",
  props: {
      active: Boolean,
  }
};
</script>
