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
            <td>칭호 보상 '앉아서 걷는 속도 강화'를 켜면 80</td>
          </tr>
          <tr>
            <td>물속</td>
            <td class="num">÷1.7</td>
            <td>두꺼운 장화면 느려지지 않음. 대식가 스테이지의 물에서는 느려지지 않음</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="muted">
      칭호 보상은 시작 화면의 칭호 메뉴에서 획득 조건을 채우면 켤 수 있습니다. 칭호 보상 '앉아서
      걷는 속도 강화'는 앉아 걷기만 바꾸고 걷기·달리기는 그대로입니다. 플레이어의 속도와 스태미나는
      난이도와 상관없습니다.
    </p>
    <p class="muted">
      대식가 스테이지에서는 물속에서도 걷기 130, 달리기 350 그대로입니다. 다른 스테이지의 물에서만
      느려집니다.
    </p>

    <h3>적과 비교</h3>
    <p class="muted">
      나(파랑)와 적(빨강)을 빠른 순으로 섞었습니다. 난이도나 상태(배회·추격 등)에 따라 속도가 다르면
      따로 적었습니다. 난이도를 적지 않은 것은 모든 난이도에서 같습니다. 물속 속도는 ÷1.7을 반올림한
      값입니다(대식가 스테이지 제외). 위의 칩을 누르면 그 적이나 내 조건(칭호 보상·금메달·물속)의
      막대를 숨기거나 다시 보입니다.
    </p>
    <div class="chip-group">
      <span class="chip-title">나</span>
      <div class="chips" role="group" aria-label="플레이어 조건 고르기">
        <button
          v-for="c in CONDS"
          :key="c"
          type="button"
          class="chip me"
          :class="{ off: hidden.has(c) }"
          :aria-pressed="!hidden.has(c)"
          @click="toggle(c)"
        >
          {{ c }}
        </button>
      </div>
    </div>
    <div class="chip-group">
      <span class="chip-title">적</span>
      <div class="chips" role="group" aria-label="비교할 적 고르기">
        <button
          v-for="n in FOES"
          :key="n"
          type="button"
          class="chip"
          :class="{ off: hidden.has(n) }"
          :aria-pressed="!hidden.has(n)"
          @click="toggle(n)"
        >
          {{ n }}
        </button>
      </div>
    </div>
    <div class="bars" role="img" aria-label="플레이어와 적의 이동 속도 비교">
      <div v-for="b in shown" :key="b.name + b.note" class="bar-row" :class="b.kind">
        <span class="bar-label">
          {{ b.name }}<span v-if="b.note" class="bar-note"> · {{ b.note }}</span>
        </span>
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
      </li>
      <li>달리는 동안에는 차지 않고, 달리기를 멈춰야 찹니다. <SourceTag src="pak" /></li>
      <li>
        다시 뛰기 시작하려면 30 이상이어야 합니다. 매듭 머리띠나 반야의 가면을 차면 이 제한이
        없습니다.
      </li>
      <li>
        스태미나가 0이 되면 매듭 머리띠는 체력 10 이상, 반야의 가면은 체력 80 이상인 동안 체력을
        초당 1씩 써서 계속 달립니다. 그보다 낮아지거나 달리기를 멈추면 걷기로 바뀝니다. 이 체력
        소모에도 난이도 피해 배수가 붙습니다. 시체가 흐르는 계곡 초보자에서는 절반인 것을
        확인했습니다. 5×5 맵 파괴자는 초당 2입니다.
      </li>
      <li>
        체력을 써서 달리는 중에 달리기 키를 누른 채 앉기 키를 한 번 누르면, 그 뒤로 체력이 줄지 않고
        계속 달립니다. 게임의 버그입니다.
      </li>
      <li>
        이 상태는 달리기를 멈추면(달리기 키나 전진 키를 떼면) 풀리고, 다음에 체력을 써서 달릴 때는
        다시 체력이 줄어듭니다. 다른 피해로 체력이 위 기준 아래로 떨어져도 걷기로 바뀌며 풀립니다.
        <SourceTag src="pak" />
      </li>
    </ul>

    <h3 id="stamina-regen">회복 속도</h3>
    <p>
      기본 초당 5에 패시브 배수를 <strong>곱하고</strong>, 칭호 보상 '스테미너 회복속도 강화'가
      있으면 ×1.25를 한 번 더 곱합니다. 예: 천호의 가면 + 칭호 보상 = 5 × 5 × 1.25 = 초당 31.25,
      신묘한 여자 가면 + 칭호 보상 = 5 × 0.5 × 1.25 = 초당 3.125.
    </p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th rowspan="2">패시브</th>
            <th rowspan="2" class="num">배수</th>
            <th colspan="2" class="num">칭호 보상 없음</th>
            <th colspan="2" class="num">칭호 보상 있음</th>
          </tr>
          <tr>
            <th class="num">초당 회복</th>
            <th class="num">0→100</th>
            <th class="num">초당 회복</th>
            <th class="num">0→100</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in REGEN" :key="r.name">
            <td>{{ r.name }}</td>
            <td class="num">×{{ r.x }}</td>
            <td class="num">{{ 5 * r.x }}</td>
            <td class="num">{{ fillSec(5 * r.x) }}초</td>
            <td class="num">{{ 5 * r.x * 1.25 }}</td>
            <td class="num">{{ fillSec(5 * r.x * 1.25) }}초</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2 id="health">체력과 피해</h2>
    <ul>
      <li>체력은 최대 100입니다.</li>
      <li>
        체력은 소수까지 계산하고, 화면 숫자만 소수 없이 반올림해서 보여 줍니다. 그래서 실제 체력이
        0.4면 화면에는 0으로 보여도 살아 있습니다. <SourceTag src="pak" />
      </li>
      <li>
        받는 피해는 난이도에 따라 배수가 붙습니다. 5×5 맵은 초보자·도전자 ×1, 파괴자 ×2입니다.
        시체가 흐르는 계곡은 초보자 ×0.5이고, 도전자 ×1, 파괴자 ×2입니다.
        <NuxtLink to="/system#difficulty">자세히</NuxtLink>
      </li>
      <li>떨어져서 입는 피해에는 난이도 배수가 붙지 않습니다.</li>
      <li>
        증오를 흩뿌리는 그림자를 쳐다볼 때(초당 8)나 매듭 머리띠로 달릴 때(초당 1)처럼 계속 깎이는
        피해는 여러 개가 겹쳐도 가장 큰 것 하나만 들어갑니다. <SourceTag src="pak" />
      </li>
      <li>
        곡옥 목걸이를 차면 받는 피해가 모두 절반이 됩니다(떨어져서 입는 피해, 계속 깎이는 피해
        포함).
      </li>
      <li>
        반야의 가면, 히바나의 저주받은 가면, 천호의 가면, 빨간 잎사귀는 체력을 조금씩
        회복합니다(<NuxtLink to="/items#passive">패시브</NuxtLink>).
      </li>
      <li>
        빨간 액체가 든 작은 병은 병 크기에 따라 20(작은 병) 또는 60(큰 병)을 회복합니다(<NuxtLink
          to="/items#pickup"
          >아이템</NuxtLink
        >).
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '플레이어 · 그림자 복도 공략 노트' })

// 이동 속도 비교(빠른 순으로 정렬). note는 상태·난이도, 없으면 모든 난이도에서 같음
// cond는 내 막대의 조건(칭호 보상·금메달·물속), 없으면 기본 동작
type Cond = '칭호 보상' | '금메달' | '물속'
type Speed = { name: string; note: string; v: number; kind: 'me' | 'foe'; cond?: Cond }
const ME = '나'
const SPEEDS: Speed[] = (
  [
    { name: ME, note: '달리기', v: 350, kind: 'me' },
    { name: ME, note: '금메달 달리기', v: 525, kind: 'me', cond: '금메달' },
    { name: ME, note: '걷기', v: 130, kind: 'me' },
    { name: ME, note: '앉아 걷기', v: 50, kind: 'me' },
    { name: ME, note: '앉아 걷기 (앉아서 걷는 속도 강화)', v: 80, kind: 'me', cond: '칭호 보상' },
    { name: ME, note: '물속 달리기', v: 206, kind: 'me', cond: '물속' },
    { name: ME, note: '물속 걷기', v: 76, kind: 'me', cond: '물속' },
    { name: ME, note: '물속 앉아 걷기', v: 29, kind: 'me', cond: '물속' },
    { name: '카구라 방울의 배회자', note: '배회', v: 100, kind: 'foe' },
    { name: '카구라 방울의 배회자', note: '추격 (도전자·파괴자)', v: 270, kind: 'foe' },
    { name: '카구라 방울의 배회자', note: '추격 (초보자)', v: 189, kind: 'foe' },
    { name: '달리는 배회자', note: '배회', v: 300, kind: 'foe' },
    { name: '달리는 배회자', note: '추격 (도전자·파괴자)', v: 270, kind: 'foe' },
    { name: '달리는 배회자', note: '추격 (초보자)', v: 189, kind: 'foe' },
    { name: '살며시 다가오는 배회자', note: '배회', v: 85, kind: 'foe' },
    { name: '살며시 다가오는 배회자', note: '추격 (도전자·파괴자)', v: 270, kind: 'foe' },
    { name: '살며시 다가오는 배회자', note: '추격 (초보자)', v: 189, kind: 'foe' },
    { name: '천리안의 배회자', note: '배회', v: 70, kind: 'foe' },
    { name: '천리안의 배회자', note: '추격 (도전자·파괴자)', v: 270, kind: 'foe' },
    { name: '천리안의 배회자', note: '추격 (초보자)', v: 189, kind: 'foe' },
    { name: '울음소리의 배회자', note: '배회', v: 25, kind: 'foe' },
    { name: '울음소리의 배회자', note: '추격 (도전자·파괴자)', v: 300, kind: 'foe' },
    { name: '울음소리의 배회자', note: '추격 (초보자)', v: 210, kind: 'foe' },
    { name: '경종의 배회자', note: '야경꾼 배회', v: 40, kind: 'foe' },
    { name: '경종의 배회자', note: '야경꾼 추격', v: 120, kind: 'foe' },
    { name: '경종의 배회자', note: '물 모드', v: 300, kind: 'foe' },
    { name: '증오를 흩뿌리는 그림자', note: '5×5 맵', v: 160, kind: 'foe' },
    { name: '증오를 흩뿌리는 그림자', note: '계곡 (도전자·파괴자)', v: 240, kind: 'foe' },
    { name: '증오를 흩뿌리는 그림자', note: '계곡 (초보자)', v: 140, kind: 'foe' },
    { name: '떠도는 영혼', note: '', v: 200, kind: 'foe' },
    { name: '가면 벌레', note: '', v: 330, kind: 'foe' },
    { name: '대식가', note: '파괴자', v: 600, kind: 'foe' },
    { name: '대식가', note: '도전자', v: 400, kind: 'foe' },
    { name: '대식가', note: '초보자', v: 240, kind: 'foe' },
    { name: '대식가', note: '느려지는 구간 (도전자·파괴자)', v: 170, kind: 'foe' },
    { name: '대식가', note: '느려지는 구간 (초보자)', v: 70, kind: 'foe' },
    { name: '방대해진 증오', note: '', v: 200, kind: 'foe' },
  ] as Speed[]
).sort((a, b) => b.v - a.v || (a.kind === 'me' ? -1 : 1))
const maxSpeed = Math.max(...SPEEDS.map((s) => s.v))

// 비교에서 숨길 적 이름과 내 조건(기본은 모두 보임). 막대 길이 기준은 숨겨도 그대로 둔다
const CONDS: Cond[] = ['칭호 보상', '금메달', '물속']
const FOES = [...new Set(SPEEDS.filter((s) => s.kind === 'foe').map((s) => s.name))]
const hidden = ref(new Set<string>())
function toggle(name: string) {
  const next = new Set(hidden.value)
  if (next.has(name)) next.delete(name)
  else next.add(name)
  hidden.value = next
}
const shown = computed(() =>
  SPEEDS.filter((s) =>
    s.kind === 'me' ? !(s.cond && hidden.value.has(s.cond)) : !hidden.value.has(s.name),
  ),
)

// 스태미나 회복 배수(기본 초당 5에 곱함). 칭호 보상 ×1.25는 표의 열로 따로 보여 준다
const REGEN = [
  { name: '없음·그 밖의 패시브', x: 1 },
  { name: '천호의 가면', x: 5 },
  { name: '초록 잎사귀', x: 2 },
  { name: '히바나의 저주받은 가면', x: 2 },
  { name: '반야의 가면', x: 1.5 },
  { name: '히바나의 가면', x: 0.75 },
  { name: '신묘한 여자 가면', x: 0.5 },
]
const fillSec = (perSec: number) => Math.round((100 / perSec) * 10) / 10
</script>

<style scoped>
h2 {
  scroll-margin-top: 64px;
}
.chip-group {
  display: flex;
  gap: 8px;
  align-items: baseline;
  margin: 8px 0 4px;
}
.chip-title {
  flex: none;
  font-size: 12px;
  color: var(--text-3);
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.chip {
  font: inherit;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--accent);
  background: var(--surface);
  color: var(--text-2);
  cursor: pointer;
}
.chip.me {
  border-color: var(--sky);
}
.chip.off {
  border-color: var(--line);
  color: var(--text-3);
  text-decoration: line-through;
  opacity: 0.6;
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
  grid-template-columns: 300px minmax(0, 1fr) 40px;
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
.bar-row.me .bar-label {
  color: var(--sky);
  font-weight: 600;
}
.bar-note {
  color: var(--text-3);
  font-weight: 400;
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
    grid-template-columns: 1fr 34px;
    row-gap: 2px;
  }
  .bar-label {
    grid-column: 1 / -1;
    white-space: normal;
  }
}
</style>
