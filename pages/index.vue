<template>
  <div class="page">
    <h1>그림자 복도 공략 노트</h1>
    <p class="lead">
      그림자 복도(Shadow Corridor)의 배회자가 얼마나 빠른지, 어디까지 보고 듣는지, 언제 추격을
      포기하는지를 게임 파일과 실제 플레이 기록으로 정리했습니다.
    </p>
    <p class="muted">
      거리와 속도는 게임 단위입니다. 100 = 1m, 속도는 초당 거리(130 = 초당 1.3m)입니다. 플레이어는
      걸으면 130, 뛰면 350입니다.
    </p>

    <h2>한눈에 보기</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>적</th>
            <th class="num">배회</th>
            <th class="num">추격</th>
            <th>시야</th>
            <th class="num">발소리</th>
            <th class="num">폭죽</th>
            <th class="num">추격 해제</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="e in ENEMIES" :key="e.id">
            <td>
              <NuxtLink :to="`/enemies#${e.id}`">{{ e.name }}</NuxtLink>
            </td>
            <td class="num">{{ e.walk }}</td>
            <td class="num">{{ e.chase }}</td>
            <td>{{ e.sight }}</td>
            <td class="num">{{ e.sprint }}</td>
            <td class="num">{{ e.firework }}</td>
            <td class="num">{{ e.lose }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="muted">
      쉬움 난이도에서는 배회자·도코니의 추격 속도가 ×0.7이고, 추격 해제 시간이 짧아집니다.
      <NuxtLink to="/detection#lose">자세히</NuxtLink>
    </p>

    <h2>꼭 알아둘 것</h2>
    <div class="tips">
      <div v-for="t in TIPS" :key="t.title" class="card">
        <h3>{{ t.title }} <SourceTag :src="t.src" /></h3>
        <p>{{ t.text }}</p>
      </div>
    </div>

    <h2>둘러보기</h2>
    <div class="tips">
      <NuxtLink v-for="s in SECTIONS" :key="s.to" :to="s.to" class="card link">
        <h3>{{ s.title }}</h3>
        <p>{{ s.text }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ENEMIES } from '~/data/enemies'
import type { Src } from '~/data/types'

const TIPS: { title: string; text: string; src: Src }[] = [
  {
    title: '"보인다"와 "들켰다"는 다르다',
    text: '배회자 시야에 들어가도 바로 추격하지 않습니다. 시선이 통하고 시야 캡슐 안이어야 추격이 시작됩니다. 가만히 앉아 있어도 시야 안에는 들어갑니다.',
    src: 'game',
  },
  {
    title: '소리는 벽을 뚫는다',
    text: '발소리(2300)와 폭죽(3000)은 3D 거리만 봅니다. 벽 너머, 위아래층에서도 들립니다. 높이 차가 크면 거리에 높이도 들어가서 못 듣습니다.',
    src: 'game',
  },
  {
    title: '도코니 앞에서는 앉기',
    text: '도코니는 600 안에서 서 있거나 움직이면 두리번거리고, 그 상태로 3초 보이면 추격합니다. 앉아서 가만히 있으면 두리번이 꺼집니다.',
    src: 'pak',
  },
  {
    title: '천리안은 거리만 본다',
    text: '1800 안에 들어가면 뛰지 않아도 벽 너머에서 따라옵니다. 한 번 붙으면 폭죽·손거울·수정구슬·카메라로 떼어야 합니다.',
    src: 'game',
  },
  {
    title: '추격은 못 볼 때만 풀린다',
    text: '배회자의 추격 해제 타이머(10초)는 시선이 끊긴 동안에만 줄어듭니다. 시선이 통하면 시야 밖이어도 다시 가득 찹니다.',
    src: 'pak',
  },
  {
    title: '무너지는 곳은 양쪽을 다 밟아야',
    text: '무너지는 복도는 양쪽 끝 트리거를 모두 지나야 무너집니다. 한쪽만 밟고 돌아가면 그대로 남습니다.',
    src: 'game',
  },
]

const SECTIONS = [
  { to: '/enemies', title: '적', text: '적마다 속도, 감지 범위 그림, 특징.' },
  { to: '/detection', title: '감지·추격', text: '시야, 불빛, 소리, 폭죽, 추격 해제 규칙.' },
  {
    to: '/player',
    title: '플레이어·아이템',
    text: '이동 속도, 스태미나, 카메라·손전등, 패시브, 열쇠.',
  },
  { to: '/maps', title: '맵 기믹', text: '살기 등장 조건, 함정방, 무너지는 곳, 성역의 물, 문.' },
]
</script>

<style scoped>
.tips {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 12px;
}
.tips h3 {
  margin: 0 0 6px;
  font-size: 16px;
}
.tips p {
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
