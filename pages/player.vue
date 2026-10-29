<template>
  <div class="page">
    <h1>플레이어</h1>
    <p class="lead">속도는 초당 게임 단위(100 = 1m)입니다.</p>

    <h2 id="move">이동 속도</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>동작</th>
            <th class="num">속도</th>
            <th>메모</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>걷기</td>
            <td class="num">130</td>
            <td></td>
          </tr>
          <tr>
            <td>달리기</td>
            <td class="num">350</td>
            <td>금메달이면 ×1.5(525), 스태미나 소모 없음</td>
          </tr>
          <tr>
            <td>앉아 걷기</td>
            <td class="num">50</td>
            <td>특전 "걷는 속도 강화"를 켜면 80</td>
          </tr>
          <tr>
            <td>물속</td>
            <td class="num">÷1.7</td>
            <td>두꺼운 장화면 느려지지 않음</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="muted">
      <SourceTag src="pak" /> 특전 "걷는 속도 강화"는 이름과 달리 앉아 걷기만 바꿉니다.
      걷기·달리기는 그대로입니다. 플레이어의 속도와 스태미나는 난이도와 상관없습니다.
    </p>

    <h3>적과 비교</h3>
    <p class="muted">
      도전자·파괴자 기준입니다. 초보자에서는 배회자와 울음소리의 배회자의 추격 속도가 ×0.7(189,
      210)이고, 계곡의 증오를 흩뿌리는 그림자는 140, 대식가는 240입니다.
    </p>
    <div class="bars" role="img" aria-label="플레이어와 적의 이동 속도 비교">
      <div v-for="b in SPEEDS" :key="b.label" class="bar-row">
        <span class="bar-label">{{ b.label }}</span>
        <span class="bar-track">
          <span class="bar-fill" :class="b.kind" :style="{ width: `${(b.v / maxSpeed) * 100}%` }" />
        </span>
        <span class="bar-val">{{ b.v }}</span>
      </div>
    </div>

    <h2 id="stamina">스태미나</h2>
    <ul>
      <li>
        최대 100. 뛰면 초당 15 줄고, 쉬면 초당 5 찹니다. 가득 찬 상태로 약 6.7초 뛸 수 있습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        다시 뛰기 시작하려면 30 이상이어야 합니다. 매듭 머리띠나 반야의 가면을 차면 이 제한이
        없습니다.
        <SourceTag src="pak" />
      </li>
      <li>특전 "스태미나 강화"는 회복을 ×1.25로 합니다. <SourceTag src="pak" /></li>
    </ul>

    <h2 id="health">체력과 피해</h2>
    <ul>
      <li>체력은 최대 100입니다. <SourceTag src="pak" /></li>
      <li>
        받는 피해는 난이도에 따라 배수가 붙습니다. 5×5 맵은 초보자·도전자 ×1, 파괴자 ×2이고, 시체가
        흐르는 계곡은 초보자 ×0.5, 도전자 ×1, 파괴자 ×2입니다.
        <NuxtLink to="/system#difficulty">자세히</NuxtLink> <SourceTag src="pak" />
      </li>
      <li>떨어져서 입는 피해에는 배수가 붙지 않습니다. <SourceTag src="pak" /></li>
      <li>
        회복약은 작은 병 20, 큰 병 60을 회복합니다(<NuxtLink to="/items#pickup">아이템</NuxtLink>).
        <SourceTag src="pak" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '플레이어 · 그림자 복도 공략 노트' })

const SPEEDS: { label: string; v: number; kind: 'me' | 'foe' }[] = [
  { label: '나: 달리기', v: 350, kind: 'me' },
  { label: '나: 걷기', v: 130, kind: 'me' },
  { label: '나: 앉아 걷기', v: 50, kind: 'me' },
  { label: '대식가', v: 600, kind: 'foe' },
  { label: '가면 벌레', v: 330, kind: 'foe' },
  { label: '달리는 배회자(배회)', v: 300, kind: 'foe' },
  { label: '울음소리의 배회자(추격)', v: 300, kind: 'foe' },
  { label: '경종의 배회자(물 모드)', v: 300, kind: 'foe' },
  { label: '카구라 방울 등 4종(추격)', v: 270, kind: 'foe' },
  { label: '증오를 흩뿌리는 그림자(계곡)', v: 240, kind: 'foe' },
  { label: '떠도는 영혼', v: 200, kind: 'foe' },
  { label: '증오를 흩뿌리는 그림자(5×5)', v: 160, kind: 'foe' },
  { label: '경종의 배회자(야경꾼 추격)', v: 120, kind: 'foe' },
  { label: '카구라 방울의 배회자(배회)', v: 100, kind: 'foe' },
  { label: '살며시 다가오는 배회자(배회)', v: 85, kind: 'foe' },
  { label: '천리안(배회)', v: 70, kind: 'foe' },
  { label: '경종의 배회자(야경꾼 배회)', v: 40, kind: 'foe' },
  { label: '울음소리의 배회자(배회)', v: 25, kind: 'foe' },
]
const maxSpeed = Math.max(...SPEEDS.map((s) => s.v))
</script>

<style scoped>
h2 {
  scroll-margin-top: 64px;
}
.bars {
  display: grid;
  gap: 4px;
  margin: 8px 0 12px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 10px;
  padding: 12px 14px;
}
.bar-row {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr) 40px;
  gap: 10px;
  align-items: center;
  font-size: 13px;
}
.bar-label {
  color: var(--text-2);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bar-track {
  height: 10px;
  background: var(--surface-2);
  border-radius: 999px;
  overflow: hidden;
}
.bar-fill {
  display: block;
  height: 100%;
  border-radius: 999px;
}
.bar-fill.me {
  background: var(--sky);
}
.bar-fill.foe {
  background: var(--accent);
}
.bar-val {
  text-align: right;
  font-variant-numeric: tabular-nums;
  color: var(--text-2);
}
@media (max-width: 480px) {
  .bar-row {
    grid-template-columns: 140px minmax(0, 1fr) 34px;
  }
}
</style>
