<template>
  <div class="page">
    <h1>그림자 복도 공략 노트</h1>
    <p class="lead">
      그림자 복도(Shadow Corridor)의 배회자가 얼마나 빠른지, 어디까지 보고 듣는지, 언제 추격을
      포기하는지를 정리했습니다.
    </p>
    <p class="muted">
      거리와 속도는 게임 단위입니다. 100 = 1m, 속도는 초당 거리(130 = 초당 1.3m)입니다.
    </p>

    <div class="sections">
      <NuxtLink v-for="s in SECTIONS" :key="s.to" :to="s.to" class="card link">
        <h2>{{ s.title }}</h2>
        <p>{{ s.text }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const SECTIONS = [
  {
    to: '/system',
    title: '게임 시스템',
    text: '적이 플레이어를 알아채는 시야·불빛·소리, 폭죽, 경계와 추격 해제 규칙.',
  },
  {
    to: '/enemies',
    title: '적',
    text: '배회자와 그 밖의 적. 적마다 속도, 감지 범위 그림, 특징.',
  },
  {
    to: '/player',
    title: '플레이어',
    text: '걷기·달리기·앉아 걷기 속도, 적과 속도 비교, 스태미나.',
  },
  {
    to: '/items',
    title: '아이템',
    text: '카메라·손전등·폭죽·수정구슬, 열쇠와 문, 패시브, 아이템 줍기.',
  },
  {
    to: '/maps',
    title: '맵',
    text: '증오를 흩뿌리는 그림자 등장 조건, 함정방, 무너지는 곳, 성역의 물, 레버와 문.',
  },
]
</script>

<style scoped>
.sections {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
  margin-top: 20px;
}
.sections h2 {
  margin: 0 0 6px;
  font-size: 18px;
}
.sections p {
  margin: 0;
  color: var(--text-2);
  font-size: 14px;
}
.link {
  text-decoration: none;
  color: inherit;
  transition: border-color 0.15s;
}
.link:hover {
  border-color: var(--accent);
}
</style>
