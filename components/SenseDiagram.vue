<template>
  <figure class="sense">
    <div class="bar">
      <span class="muted">위에서 본 모습 · 적은 가운데, 위쪽이 적의 앞</span>
      <button v-if="hasFar" type="button" class="zoom" @click="far = !far">
        {{ far ? '시야만 크게' : '소리 범위까지' }}
      </button>
    </div>
    <svg :viewBox="`${-ext} ${-ext} ${ext * 2} ${ext * 2}`" role="img" :aria-label="ariaLabel">
      <!-- 500 단위 격자 -->
      <g class="grid">
        <line v-for="v in gridLines" :key="'v' + v" :x1="v" :x2="v" :y1="-ext" :y2="ext" />
        <line v-for="v in gridLines" :key="'h' + v" :y1="v" :y2="v" :x1="-ext" :x2="ext" />
      </g>
      <g v-for="c in shownCircles" :key="c.label" :class="['circle', c.kind]">
        <circle :r="c.r" />
        <text :y="-c.r - ext * 0.015" :font-size="ext * 0.045">{{ c.label }}</text>
      </g>
      <g v-for="c in capsules" :key="c.label" :class="['capsule', c.kind]">
        <rect :x="-c.r" :y="-c.to" :width="c.r * 2" :height="c.to - c.from" :rx="c.r" :ry="c.r" />
        <text :x="c.r + ext * 0.02" :y="-c.to + ext * 0.06" :font-size="ext * 0.045">
          {{ c.label }} 앞 {{ c.to }}
        </text>
      </g>
      <!-- 적 -->
      <g class="me">
        <circle :r="ext * 0.022" />
        <line x1="0" y1="0" x2="0" :y2="-ext * 0.08" :stroke-width="ext * 0.008" />
      </g>
      <!-- 축척 -->
      <g class="scale" :transform="`translate(${-ext * 0.94} ${ext * 0.92})`">
        <line x1="0" :x2="scaleLen" y1="0" y2="0" :stroke-width="ext * 0.008" />
        <text :x="scaleLen / 2" :y="-ext * 0.025" :font-size="ext * 0.045">
          {{ scaleLen }} ({{ scaleLen / 100 }}m)
        </text>
      </g>
    </svg>
  </figure>
</template>

<script setup lang="ts">
import type { SenseCapsule, SenseCircle } from '~/data/types'

const props = defineProps<{ capsules: SenseCapsule[]; circles: SenseCircle[]; name: string }>()

const far = ref(false)

// 가까이 보기: 시야 캡슐이 다 들어오는 크기. 그 안에 드는 원은 같이 그린다
const nearExt = computed(() => {
  const reach = Math.max(...props.capsules.map((c) => Math.max(c.to, c.r, -c.from)), 600)
  return reach * 1.12
})
const farExt = computed(() => Math.max(nearExt.value, ...props.circles.map((c) => c.r)) * 1.1)
const hasFar = computed(() => farExt.value > nearExt.value * 1.05)
const ext = computed(() => (far.value ? farExt.value : nearExt.value))

const shownCircles = computed(() => props.circles.filter((c) => c.r <= ext.value))
const gridLines = computed(() => {
  const n = Math.floor(ext.value / 500)
  return Array.from({ length: n * 2 + 1 }, (_, i) => (i - n) * 500)
})
const scaleLen = computed(() => (ext.value > 2500 ? 1000 : 500))
const ariaLabel = computed(
  () =>
    `${props.name} 감지 범위: ` +
    [
      ...props.capsules.map((c) => `${c.label} 앞 ${c.to}, 좌우 ${c.r}`),
      ...props.circles.map((c) => `${c.label} 반지름 ${c.r}`),
    ].join(', '),
)
</script>

<style scoped>
.sense {
  margin: 0;
  background: var(--bg-2);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 10px;
}
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}
.zoom {
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--text-2);
  border-radius: 6px;
  padding: 3px 10px;
  font: inherit;
  cursor: pointer;
}
.zoom:hover {
  color: var(--text);
}
svg {
  display: block;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  aspect-ratio: 1;
}
text {
  fill: var(--text-2);
  font-family: inherit;
}
.grid line {
  stroke: var(--line);
  vector-effect: non-scaling-stroke;
  stroke-width: 1;
}
.capsule rect,
.circle circle {
  vector-effect: non-scaling-stroke;
  stroke-width: 1.6;
}
.capsule.sight rect {
  fill: color-mix(in srgb, var(--sense-sight) 22%, transparent);
  stroke: var(--sense-sight);
}
.capsule.light rect {
  fill: color-mix(in srgb, var(--sense-light) 8%, transparent);
  stroke: var(--sense-light);
  stroke-dasharray: 6 4;
}
.capsule.sight text {
  fill: var(--sense-sight);
}
.capsule.light text {
  fill: var(--sense-light);
}
.circle circle {
  fill: none;
}
.circle.sound circle {
  stroke: var(--sense-sound);
  stroke-dasharray: 3 4;
}
.circle.fire circle {
  stroke: var(--sense-fire);
  stroke-dasharray: 8 5;
}
.circle.look circle {
  stroke: var(--sense-look);
  fill: color-mix(in srgb, var(--sense-look) 8%, transparent);
}
.circle text {
  text-anchor: middle;
}
.circle.sound text {
  fill: var(--sense-sound);
}
.circle.fire text {
  fill: var(--sense-fire);
}
.circle.look text {
  fill: var(--sense-look);
}
.me circle {
  fill: var(--text);
}
.me line {
  stroke: var(--text);
}
.scale line {
  stroke: var(--text-2);
}
.scale text {
  text-anchor: middle;
  fill: var(--text-3);
}
</style>
