<script setup lang="ts">
import type * as Vue from "vue";

export type LegendLabelOwnProps = {
  align?: string;
  label?: any;
  flex?: string | number;
  margin?: string | number;
  children?: Vue.VNode;
};

//possible way of immplementing children, but falling back to
// <slot>"legendlabelProps.label"</slot>
const legendLabelProps = withDefaults(defineProps<LegendLabelOwnProps>(), {
  flex: 1,
  margin: "5px 0",
  align: "left",
});
</script>
<template>
  <div
    className="legendLabels"
    v-bind="$attrs"
    :style="{
      justifyContent: legendLabelProps.align,
      display: 'flex',
      flex: legendLabelProps.flex,
      margin: legendLabelProps.margin,
    }"
  >
    {{ legendLabelProps.label }}
  </div>
</template>
