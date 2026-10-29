<template>
  <header class="header">
    <div class="inner">
      <NuxtLink to="/" class="brand">그림자 복도 <span>공략 노트</span></NuxtLink>
      <nav class="nav">
        <NuxtLink v-for="l in links" :key="l.to" :to="l.to">{{ l.label }}</NuxtLink>
      </nav>
      <button
        class="theme"
        type="button"
        :aria-label="themeLabel"
        :title="themeLabel"
        @click="toggle"
      >
        {{ dark ? '☾' : '☀' }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { to: '/enemies', label: '적' },
  { to: '/detection', label: '감지·추격' },
  { to: '/player', label: '플레이어·아이템' },
  { to: '/maps', label: '맵 기믹' },
]

// ── 테마 ───────────────────────────── (nuxt.config.ts 의 head 스크립트와 같은 'sc-theme' 키)
const dark = ref(true)
const themeLabel = computed(() => (dark.value ? '낮 테마로' : '밤 테마로'))

onMounted(() => {
  const set = document.documentElement.dataset.theme
  dark.value = set ? set === 'dark' : !matchMedia('(prefers-color-scheme: light)').matches
})

function toggle() {
  dark.value = !dark.value
  const t = dark.value ? 'dark' : 'light'
  document.documentElement.dataset.theme = t
  try {
    localStorage.setItem('sc-theme', t)
  } catch {
    // 저장이 막혀 있어도 이번 화면에서는 바뀐다
  }
}
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}
.inner {
  max-width: 980px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px 20px;
  flex-wrap: wrap;
}
.brand {
  font-family: 'Noto Serif KR', serif;
  font-weight: 700;
  font-size: 17px;
  color: var(--text);
  text-decoration: none;
}
.brand span {
  color: var(--accent-text);
}
.nav {
  display: flex;
  gap: 4px 16px;
  flex-wrap: wrap;
  flex: 1;
}
.nav a {
  color: var(--text-2);
  text-decoration: none;
  font-size: 14px;
}
.nav a:hover,
.nav a.router-link-active {
  color: var(--accent-text);
}
.theme {
  background: var(--surface);
  border: 1px solid var(--line);
  color: var(--text-2);
  border-radius: 8px;
  width: 34px;
  height: 30px;
  cursor: pointer;
  font-size: 15px;
}
.theme:hover {
  color: var(--text);
}
/* 좁은 화면: 메뉴를 다음 줄 전체로 */
@media (max-width: 560px) {
  .brand {
    flex: 1;
  }
  .nav {
    order: 3;
    flex-basis: 100%;
  }
}
</style>
