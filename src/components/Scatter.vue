<script setup lang="tsx">
// import type { CircleProps } from '../../packages/vuez-shape/Circle.vue';
import { scaleLinear, Circle } from "@vueniquejs/vuenique"
// import { scaleLinear } from '../../packages/vuenique-scale';
import { extent, max } from 'd3-array';
import { ref, computed } from 'vue';
// import Circle, { type CircleProps } from '../../packages/vuenique-shape/Circle.vue';

type ScatterProps = {
  //height of entire plot
  height: number;
  //width of entire plot
  width: number;
  //circles to render
  circles: Record<string, unknown>[];
  //background color for plot
  background: string;
};

const scatterProps = defineProps<ScatterProps>();

const width = ref(400);
const height = ref(400);
//max radius of circles; scaling needed to keep dots within plot, grabbing specifically the max in case of different radii
const maxR = max(scatterProps.circles, (d: any) => d.r)!;
const xScale = computed(() => {
  return scaleLinear({
    domain: extent(scatterProps.circles, (d: any) => d.cx),
    range: [0 + maxR, width.value - maxR],
  });
});
const yScale = computed(() => {
  return scaleLinear({
    domain: extent(scatterProps.circles, (d: any) => d.cy),
    range: [0 + maxR, height.value - maxR],
  });
});
</script>

<template>
  <svg :width="width" :height="height">
    <rect
      :width="width"
      :height="height"
      :fill="scatterProps.background"
      :fill-opacity="0.5"
    ></rect>
    <Circle
      v-for="(props, index) in scatterProps.circles"
      :key="index"
      v-bind="props"
      :cx="xScale(props.cx)"
      :cy="yScale(props.cy)"
      class="circle"
    />
  </svg>
</template>
