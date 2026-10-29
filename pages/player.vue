<template>
  <div class="page">
    <h1>플레이어·아이템</h1>
    <p class="lead">값은 대부분 게임 파일에서 읽었습니다. 속도는 초당 게임 단위(100 = 1m)입니다.</p>

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
      걷기·달리기는 그대로입니다.
    </p>

    <h3>적과 비교</h3>
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

    <h2 id="tools">도구</h2>
    <h3>카메라</h3>
    <ul>
      <li>
        쓰고 나면 20초 뒤 다시 쓸 수 있습니다. 어떤 조건에서는 두 배 빨리 찹니다(조건은 모름).
        <SourceTag src="pak" />
      </li>
      <li>떠도는 영혼을 찍으면 없앨 수 있습니다. <SourceTag src="game" /></li>
      <li>살기를 25초 기절시킵니다(계곡 쉬움 35초). 흑충도 쫓아냅니다. <SourceTag src="pak" /></li>
    </ul>
    <h3>손전등</h3>
    <ul>
      <li>
        배터리는 켜 둔 동안만 닳고, 켠 시간으로 480초(8분)면 다 닳습니다. 손전등 강화 특전이면
        960초. <SourceTag src="pak" />
      </li>
      <li>새 손전등을 주우면 배터리가 다시 가득 찹니다. <SourceTag src="pak" /></li>
      <li>
        배회자에게는 라이터와 똑같이 "불 켬"입니다. 도코니는 직접 비추면 반응합니다.
        <SourceTag src="pak" />
      </li>
    </ul>
    <h3>폭죽</h3>
    <ul>
      <li>
        땅에 떨어지고 1초 뒤 5초 동안 터지며, 그동안 3000(도코니 1200) 안의 적을 부릅니다.
        <NuxtLink to="/detection#firework">자세히</NuxtLink> <SourceTag src="pak" />
      </li>
    </ul>
    <h3>수정구슬</h3>
    <ul>
      <li>
        시간을 멈춘 동안 살기에 닿아도 죽지 않고, 떠도는 영혼이 멈추며, 함정방이 발동하지 않습니다.
        <SourceTag src="pak" />
      </li>
    </ul>
    <h3>열쇠와 문</h3>
    <ul>
      <li>
        잠긴 나무 여닫이문, 쇠 여닫이문, 나무 미닫이문은 열쇠 하나로 엽니다. 장지문과 후스마는
        열쇠로 열 수 없습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        금메달을 차고 달리면서 문에 부딪히면 잠겨 있어도 부수고 지나갑니다(쇠문 제외).
        <SourceTag src="pak" />
      </li>
      <li>살기는 문에 닿기만 해도 부숩니다. <SourceTag src="pak" /></li>
    </ul>

    <h2 id="passive">패시브</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th class="num">번호</th>
            <th>이름</th>
            <th>알려진 효과</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in PASSIVES" :key="p.id">
            <td class="num">{{ p.id }}</td>
            <td>
              {{ p.name }}
              <span v-if="p.field" class="field">일반 맵에 나옴</span>
            </td>
            <td>{{ p.effect }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="muted">
      번호는 게임 내부 값입니다 <SourceTag src="pak" />. 효과 칸은 이 정리에서 확인한 것만
      적었습니다. 패시브는 줍는 순간 지금 찬 것과 맞바뀌고, 원래 찬 것은 그 자리에 남습니다
      <SourceTag src="game" />.
    </p>

    <h2 id="items">아이템 줍기</h2>
    <ul>
      <li>아이템은 대부분 서랍과 선반 안에 미리 놓여 있습니다. <SourceTag src="game" /></li>
      <li>함정 서랍은 열면 큰 거미 20마리가 풀려납니다. <SourceTag src="game" /></li>
      <li>회복약은 작은 병 20, 큰 병 60을 회복합니다. <SourceTag src="pak" /></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '플레이어·아이템 · 그림자 복도 공략 노트' })

const SPEEDS: { label: string; v: number; kind: 'me' | 'foe' }[] = [
  { label: '나: 달리기', v: 350, kind: 'me' },
  { label: '나: 걷기', v: 130, kind: 'me' },
  { label: '나: 앉아 걷기', v: 50, kind: 'me' },
  { label: '대식가', v: 600, kind: 'foe' },
  { label: '가면 벌레', v: 330, kind: 'foe' },
  { label: '달리는 배회자(배회)', v: 300, kind: 'foe' },
  { label: '도코니(추격)', v: 300, kind: 'foe' },
  { label: '경종(물 모드)', v: 300, kind: 'foe' },
  { label: '배회자(추격)', v: 270, kind: 'foe' },
  { label: '살기(계곡)', v: 240, kind: 'foe' },
  { label: '떠도는 영혼', v: 200, kind: 'foe' },
  { label: '살기(5×5)', v: 160, kind: 'foe' },
  { label: '경종(야경꾼 추격)', v: 120, kind: 'foe' },
  { label: '무녀(배회)', v: 100, kind: 'foe' },
  { label: '살며시(배회)', v: 85, kind: 'foe' },
  { label: '천리안(배회)', v: 70, kind: 'foe' },
  { label: '경종(야경꾼 배회)', v: 40, kind: 'foe' },
  { label: '도코니(배회)', v: 25, kind: 'foe' },
]
const maxSpeed = Math.max(...SPEEDS.map((s) => s.v))

const PASSIVES = [
  {
    id: 1,
    name: '반야의 가면',
    field: false,
    effect: '스태미나 30 미만이어도 뛰기 시작할 수 있음',
  },
  { id: 2, name: '신묘한 여자 가면', field: true, effect: '' },
  { id: 3, name: '히바나의 저주받은 가면', field: false, effect: '' },
  { id: 4, name: '히바나의 가면', field: false, effect: '' },
  { id: 5, name: '천호의 가면', field: false, effect: '' },
  { id: 6, name: '매듭 머리띠', field: true, effect: '스태미나 30 미만이어도 뛰기 시작할 수 있음' },
  { id: 7, name: '초록 잎사귀', field: true, effect: '' },
  { id: 8, name: '빨간 잎사귀', field: true, effect: '' },
  { id: 9, name: '도마뱀 꼬리', field: true, effect: '' },
  { id: 10, name: '두꺼운 장화', field: true, effect: '물속에서 느려지지 않음' },
  { id: 11, name: '곡옥 목걸이', field: false, effect: '성역 챕터 기믹으로 얻음' },
  {
    id: 12,
    name: '금메달',
    field: false,
    effect: '달리기 ×1.5, 스태미나 소모 없음, 달리며 문 부수기',
  },
]
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
  grid-template-columns: 140px minmax(0, 1fr) 40px;
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
    grid-template-columns: 110px minmax(0, 1fr) 34px;
  }
}
.field {
  font-size: 11px;
  color: var(--text-3);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0 6px;
  margin-left: 4px;
  white-space: nowrap;
}
</style>
