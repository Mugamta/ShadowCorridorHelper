<template>
  <figure class="reunion-map">
    <figcaption>
      <strong>{{ title }}</strong>
      <span class="muted">위에서 본 모습 · 아래가 들어오는 쪽</span>
    </figcaption>
    <svg :viewBox="`${-ext} ${-ext} ${ext * 2} ${ext * 2}`" role="img" :aria-label="ariaLabel">
      <g class="grid">
        <line v-for="v in gridLines" :key="'v' + v" :x1="v" :x2="v" :y1="-ext" :y2="ext" />
        <line v-for="v in gridLines" :key="'h' + v" :y1="v" :y2="v" :x1="-ext" :x2="ext" />
      </g>
      <rect
        v-for="(b, i) in high"
        :key="'high' + i"
        class="high"
        :x="b[1] - b[3]"
        :y="-b[0] - b[2]"
        :width="b[3] * 2"
        :height="b[2] * 2"
      />
      <rect
        v-for="(b, i) in walls"
        :key="'wall' + i"
        class="wall"
        :x="b[1] - b[3]"
        :y="-b[0] - b[2]"
        :width="b[3] * 2"
        :height="b[2] * 2"
      />
      <circle
        v-for="(p, i) in orbs"
        :key="'orb' + i"
        :class="['orb', { up: p[2] >= HIGH_Z }]"
        :cx="p[1]"
        :cy="-p[0]"
        :r="ext * 0.016"
      />
      <circle
        v-for="(p, i) in magatama"
        :key="'mag' + i"
        :class="['mag', { up: p[2] >= HIGH_Z }]"
        :cx="p[1]"
        :cy="-p[0]"
        :r="ext * 0.024"
      />
      <g v-for="m in marks" :key="m.label" class="mark">
        <path
          :d="`M${m.y - ext * 0.025} ${-m.x}h${ext * 0.05}M${m.y} ${-m.x - ext * 0.025}v${ext * 0.05}`"
        />
        <text :x="m.y" :y="-m.x + ext * 0.08" :font-size="ext * 0.042">{{ m.label }}</text>
      </g>
      <g class="scale" :transform="`translate(${-ext * 0.94} ${ext * 0.93})`">
        <line x1="0" x2="1000" y1="0" y2="0" />
        <text x="500" :y="-ext * 0.025" :font-size="ext * 0.042">1000 (10m)</text>
      </g>
    </svg>
    <ul class="legend">
      <li><i class="dot mag" />곡옥</li>
      <li v-if="hasUpperMagatama"><i class="dot mag up" />곡옥(높은 곳)</li>
      <template v-if="orbs.length">
        <li><i class="dot orb" />초록 구</li>
        <li><i class="dot orb up" />초록 구(높은 곳)</li>
      </template>
      <li v-if="high.length"><i class="box high" />높은 바닥</li>
      <li v-if="walls.length"><i class="box wall" />바위·벽</li>
    </ul>
  </figure>
</template>

<script setup lang="ts">
import type { Box, Point3 } from '~/data/reunionMap'

const props = withDefaults(
  defineProps<{
    title: string
    ext: number
    magatama: Point3[]
    orbs?: Point3[]
    walls?: Box[]
    high?: Box[]
    marks?: { x: number; y: number; label: string }[]
  }>(),
  { orbs: () => [], walls: () => [], high: () => [], marks: () => [] },
)

// 이 높이부터 바닥보다 높은 층에 있는 자리로 표시한다
const HIGH_Z = 500

const hasUpperMagatama = computed(() => props.magatama.some((p) => p[2] >= HIGH_Z))
const gridLines = computed(() => {
  const n = Math.floor(props.ext / 1000)
  return Array.from({ length: n * 2 + 1 }, (_, i) => (i - n) * 1000)
})
const ariaLabel = computed(() => {
  const orbs = props.orbs.length ? `, 초록 구 ${props.orbs.length}자리` : ''
  return `${props.title}: 곡옥 ${props.magatama.length}자리${orbs}`
})
</script>

<style scoped>
.reunion-map {
  margin: 12px 0;
  background: var(--bg-2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px;
}
figcaption {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4px 10px;
  font-size: 13px;
  margin-bottom: 6px;
}
figcaption .muted {
  font-size: 12px;
}
svg {
  display: block;
  width: 100%;
  max-width: 520px;
  margin: 0 auto;
  aspect-ratio: 1;
}
.grid line {
  stroke: var(--line);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}
.wall {
  fill: var(--surface-2);
  stroke: var(--text-3);
  stroke-width: 0.6;
  vector-effect: non-scaling-stroke;
}
.high {
  fill: color-mix(in srgb, var(--sky) 16%, transparent);
  stroke: color-mix(in srgb, var(--sky) 45%, transparent);
  stroke-width: 0.6;
  vector-effect: non-scaling-stroke;
}
circle.mag,
.dot.mag {
  fill: var(--amber);
  stroke: var(--bg);
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}
circle.orb,
.dot.orb {
  fill: var(--green);
}
circle.mag.up,
circle.orb.up {
  fill: var(--bg-2);
  stroke-width: 2.4;
  vector-effect: non-scaling-stroke;
}
circle.mag.up {
  stroke: var(--amber);
}
circle.orb.up {
  stroke: var(--green);
}
.mark path {
  fill: none;
  stroke: var(--accent-text);
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}
.mark text {
  fill: var(--accent-text);
  text-anchor: middle;
  font-family: inherit;
}
.scale line {
  stroke: var(--text-2);
  stroke-width: 2;
  vector-effect: non-scaling-stroke;
}
.scale text {
  fill: var(--text-2);
  text-anchor: middle;
  font-family: inherit;
}
.legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px 14px;
  margin: 8px 0 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  color: var(--text-2);
}
.legend li {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0;
}
.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.dot.mag.up {
  background: transparent;
  border: 2px solid var(--amber);
}
.dot.mag:not(.up) {
  background: var(--amber);
}
.dot.orb:not(.up) {
  background: var(--green);
}
.dot.orb.up {
  background: transparent;
  border: 2px solid var(--green);
}
.box {
  display: inline-block;
  width: 12px;
  height: 10px;
}
.box.wall {
  background: var(--surface-2);
  border: 1px solid var(--text-3);
}
.box.high {
  background: color-mix(in srgb, var(--sky) 16%, transparent);
  border: 1px solid color-mix(in srgb, var(--sky) 45%, transparent);
}
</style>
