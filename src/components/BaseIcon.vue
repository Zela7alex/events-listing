<template>
  <div class="icon-wrapper">
    <div class="icon-wrapper" v-html="svg"></div>
    <slot> </slot>
    <!-- slots allow for slight differences in Base components while keeping all the properties/characteristics -->
  </div>
</template>

<script>
import feather from "feather-icons"; //feathers library that was installed
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
  computed: {
    svg() {
      return feather.icons[this.name].toSvg({
        class: "icon",
        width: this.width, // new property
        height: this.height, // new property
      });
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
  margin-right: 6px;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
}
</style>
