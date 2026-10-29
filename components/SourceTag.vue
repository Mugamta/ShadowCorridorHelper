<template>
  <!-- 게임에서 확인한 내용(game)은 배지를 달지 않는다 -->
  <span v-if="info" class="src" :class="src" :title="info.title">{{ info.label }}</span>
</template>

<script setup lang="ts">
import type { Src } from '~/data/types'

const props = defineProps<{ src: Src }>()

const INFO: Record<Src, { label: string; title: string } | null> = {
  game: null,
  pak: { label: '미확인', title: '실제 플레이로는 아직 확인하지 않은 내용' },
  guess: { label: '추정', title: '정황으로 짐작한 내용' },
}
const info = computed(() => INFO[props.src])
</script>

<style scoped>
.src {
  display: inline-block;
  font-size: 11px;
  line-height: 1;
  padding: 3px 6px;
  border-radius: 999px;
  border: 1px solid currentColor;
  vertical-align: 0.12em;
  white-space: nowrap;
  cursor: help;
  font-weight: 500;
}
.pak {
  color: var(--src-pak);
}
.guess {
  color: var(--src-guess);
}
</style>
