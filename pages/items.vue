<template>
  <div class="page">
    <h1>아이템</h1>
    <h2 id="camera">낡은 카메라</h2>
    <ul>
      <li>쓰고 나면 다시 쓸 수 있을 때까지 도전자·파괴자는 20초, 초보자는 10초가 걸립니다.</li>
      <li>떠도는 영혼을 찍으면 없앨 수 있습니다.</li>
      <li>증오를 흩뿌리는 그림자를 25초 기절시킵니다(계곡 초보자 35초). <SourceTag src="pak" /></li>
      <li>물 모드인 경종의 배회자는 기절시킬 수 없습니다. <SourceTag src="pak" /></li>
      <li>흑충을 쫓아내면 사라지고 다시 나타나지 않습니다(폭죽도 같음).</li>
    </ul>
    <h2 id="flashlight">손전등</h2>
    <ul>
      <li>
        배터리는 켜 둔 동안만 닳고, 켠 시간으로 480초(8분)면 다 닳습니다. 칭호 보상 '손전등의 배터리
        강화'를 켜면 960초. <SourceTag src="pak" />
      </li>
      <li>
        배터리는 고르게 줄지 않습니다. 켠 시간 약 380초(전체의 8할)까지는 14% 정도만 줄고, 그 뒤
        100초 동안 나머지가 빠르게 닳습니다. <SourceTag src="pak" />
      </li>
      <li>손전등을 가진 채 새 손전등을 주우면 배터리가 다시 가득 찹니다.</li>
      <li>
        배회자에게는 라이터와 똑같이 "불 켬"입니다. 울음소리의 배회자는 직접 비추면 반응합니다.
        <SourceTag src="pak" />
      </li>
    </ul>
    <h2 id="firework">폭죽</h2>
    <ul>
      <li>
        땅에 떨어지고 1초 뒤 5초 동안 터지며, 그동안 3000(울음소리의 배회자 1200) 안의 적을
        부릅니다.
        <NuxtLink to="/system#firework">자세히</NuxtLink> <SourceTag src="pak" />
      </li>
      <li>성역은 난이도와 상관없이 처음 시작하는 방에 폭죽 5개가 놓여 있습니다.</li>
    </ul>
    <h2 id="crystal">수정 구슬</h2>
    <ul>
      <li>시간이 20초 동안 멈춥니다. <SourceTag src="pak" /></li>
      <li>
        시간을 멈춘 동안 증오를 흩뿌리는 그림자나 배회자에 닿아도 죽지 않고, 떠도는 영혼이 멈추며,
        함정방이 발동하지 않습니다.
      </li>
      <li>
        시간을 멈춘 동안 새로 나타난 적은 멈추지 않고 움직입니다. 예를 들어 그동안 제단에서 새로
        생긴 떠도는 영혼이나, 출구에 곡옥을 바쳐 다시 나타난 배회자는 시간이 멈춰 있어도
        돌아다닙니다.
      </li>
      <li>시간을 멈춘 동안에는 낡은 카메라를 쓸 수 없습니다.</li>
      <li>
        멈춘 동안 수정 구슬을 또 쓰면 남은 시간에 더해지지 않고, 지속 시간이 처음부터 다시
        시작됩니다.
      </li>
      <li>
        시간을 멈춘 동안 함정 서랍을 열면 큰 거미가 나오지 않고 피해도 없습니다. 다만 수정 구슬이
        끝난 뒤 그 서랍을 다시 닫거나 열면 거미가 나오고 피해를 입습니다.
      </li>
    </ul>
    <h2 id="mirror">손거울</h2>
    <ul>
      <li>
        쓰면 그 맵에 정해진 이동 지점 중 하나로 무작위로 옮겨 갑니다. 지금 있는 곳에서 가까운 지점을
        빼는 규칙은 없어서, 가까운 곳에 떨어질 수도 있습니다. 숨는 곳 안에서 써도 같습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        이동 지점 수: 매미의 복도 7, 심연 8, 영혼 집합소 9, 성역 9, 해후 9, 골목·방대해진
        증오·비밀의 방 1. 시체가 흐르는 계곡에는 이동 지점이 없습니다. <SourceTag src="pak" />
      </li>
      <li>무작위 맵의 이동 지점은 방에 딸려 있어서 방 배치를 따라 판마다 자리가 바뀝니다.</li>
    </ul>
    <h2 id="glowstone">발광석</h2>
    <ul>
      <li>
        놓은 발광석의 빛은 세기 100, 닿는 거리 320입니다. 칭호 보상 '발광석의 빛의 세기 강화'를 켜면
        세기 180, 닿는 거리 500이 됩니다.
      </li>
    </ul>
    <h2 id="compass">나침반</h2>
    <ul>
      <li>
        칭호 보상 '나침반 강화'를 켜면 나침반에 바늘이 하나 더 생깁니다. 둘째 바늘은 매미의
        복도·심연·영혼 집합소·성역에서만 맵에 정해진 한 곳을 가리킵니다. <SourceTag src="pak" />
      </li>
    </ul>

    <h2 id="keys">황금 열쇠와 문</h2>
    <ul>
      <li>
        잠긴 나무 여닫이문, 쇠 여닫이문, 나무 미닫이문은 황금 열쇠 하나로 엽니다.
        <SourceTag src="pak" />
      </li>
      <li>굳게 닫힌 문은 황금 열쇠로 열 수 없습니다.</li>
      <li>
        금메달을 차고 달리면서 문에 부딪히면 잠겨 있어도 부수고 지나갑니다(쇠문 제외).
        <SourceTag src="pak" />
      </li>
      <li>증오를 흩뿌리는 그림자는 문에 닿기만 해도 부숩니다. <SourceTag src="pak" /></li>
      <li>
        안쪽에서 빗장을 푸는 식으로 잠긴 문을 여는 방법은 없습니다. 황금 열쇠, 금메달 달리기,
        그림자가 부수는 것뿐입니다. <SourceTag src="pak" />
      </li>
    </ul>

    <h2 id="passive">패시브</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>게임 안 설명</th>
            <th>실제 수치</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="p in PASSIVES" :key="p.id">
            <tr>
              <td>
                <button
                  type="button"
                  class="name"
                  :aria-expanded="open.has(p.id)"
                  @click="toggle(p.id)"
                >
                  <span class="caret">{{ open.has(p.id) ? '▾' : '▸' }}</span
                  >{{ p.name }}
                </button>
                <span v-if="p.field" class="field">일반 맵에 나옴</span>
              </td>
              <td class="desc">{{ p.desc }}</td>
              <td>{{ p.effect }} <SourceTag v-if="p.effect" :src="p.src ?? 'pak'" /></td>
            </tr>
            <tr v-show="open.has(p.id)" class="full-row">
              <td colspan="3">
                <p class="full">{{ FULL_DESC[p.id] }}</p>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <p class="muted">
      게임 안 설명 칸에는 아카이브 설명에서 효과 부분만 옮겼습니다. 이름을 누르면 설명 전문이
      펼쳐집니다. 패시브는 한 번에 하나만 찰 수 있고, 줍는 순간 지금 찬 것과 맞바뀌며 원래 찬 것은
      그 자리에 남습니다. 스태미나 회복 배수는
      <NuxtLink to="/player#stamina">플레이어</NuxtLink>에 정리했습니다.
    </p>
    <p>
      도마뱀 꼬리와 히바나의 가면은 카구라 방울의 배회자, 달리는 배회자, 살며시 다가오는 배회자,
      천리안의 배회자, 울음소리의 배회자, 경종의 배회자, 증오를 흩뿌리는 그림자에게 잡혔을 때와
      체력이 0이 되었을 때 발동합니다. 대식가와 방대해진 증오에게 잡혔을 때는 발동하지 않습니다.
      체력이 0이 되었을 때는 체력 조건 때문에 도마뱀 꼬리가 발동하지 않습니다.
      <SourceTag src="pak" />
    </p>

    <h2 id="pickup">아이템 줍기</h2>
    <ul>
      <li>아이템은 대부분 서랍과 선반 안에 미리 놓여 있습니다.</li>
      <li>
        서랍장과 선반은 아이템 칸이 세 개씩이고, 칸 안의 자리는 정해져 있습니다. 어느 서랍의 몇 번
        칸에 들어가는지는 판마다 무작위입니다(<NuxtLink to="/fixed-items"
          >정해진 아이템 자리</NuxtLink
        >). <SourceTag src="pak" />
      </li>
      <li>
        함정 서랍을 열면 큰 거미 20마리가 나와 피해 20(파괴자 40)을 입습니다. 두꺼운 장화를 차고
        있으면 피해가 없습니다.
      </li>
      <li>빨간 액체가 든 작은 병은 병 크기에 따라 20(작은 병) 또는 60(큰 병)을 회복합니다.</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Src } from '~/data/types'

useHead({ title: '아이템 · 그림자 복도 공략 노트' })

// 게임 안 아카이브 설명 전문(줄바꿈 그대로)
const FULL_DESC: Record<number, string> = {
  1: '기묘한 힘을 불어넣은 반야의 가면\n착용하면 시야가 좁아지고\n일정 시간마다 체력이 극소량 회복되며\n스테미너 회복 속도가 소폭 증가하고\n스테미너가 바닥날 경우 체력 80까지만\n체력을 소모하여 계속 달릴 수 있다',
  2: '이유는 모르지만 복도 여기저기에 흩어져 있는 가면\n착용하면 시야가 좁아지며\n스테미너 회복 속도가 크게 감소한다\n\n이 가면은 증녀(増女)라고 하는 가면으로\n이 신묘한 표정은 신이나 부처의 모습을 표현한 것이라고 한다\n\n착용하면 숨쉬기 매우 힘들기 때문에 굳이 쓸 필요는 없을 것 같다',
  3: '강력한 힘이 깃들어있는 가면\n일정 시간마다 체력이 소폭 회복되고\n스테미너 회복 속도가 일정량 증가한다\n\n곡옥이 깃들어있는 힘을 공격 시에도 사용할 수 있는 듯하다',
  4: '돌아갈 때 히바나가 준 물건\n\n착용한 사람의 생명이 위협을 받게 될 경우\n단 한 번 가면이 생명을 대신해 준다.\n\n스테미너 회복 속도가 약간 감소한다.',
  5: "신비로운 힘이 깃든 천호의 가면\n\n여우는 1000년을 살면 천호가 되며\n천리 밖을 내다보는 힘을 얻는다고 한다.\n꼬리는 9개가 있으며 매우 똑똑하고 자애심이 깊은 데다 예를 중요시한다.\n\n인간에게 신비로운 힘인 '신통력'을 전수하는 경우도 있다고 한다.",
  6: '두 가지 색깔의 끈을 꼬아 이마에 감는 타입의 머리끈\n스테미너를 모두 사용했을 때\n체력을 소모하여 달릴 수 있다\n\n이마 땀이 눈에 들어가지 않도록 하는 실용적 효과\n기합을 넣어 집중력을 높이는 정신적 효과\n두 가지 효과로 기존보다 강한 힘을 낼 수 있다.',
  7: '녹색을 띠는 잎사귀\n스테미너 회복 속도가 크게 증가한다\n\n계속 물고 있으면 상쾌한 향이 입안에 퍼진다',
  8: '빨간색을 띠는 잎사귀\n일정 시간마다 체력이 회복된다\n\n계속 물고 있으면 미세하게 쇠 맛이 나면서 바다짠내가 입 안에 퍼진다',
  9: '주술에서 사용된 건조한 도마뱀 꼬리\n위험한 상황일 때 자동으로 그곳에서 이탈한다\n체력이 50 미만일 경우 효과가 발동되지 않는다\n\n부적의 힘이 담긴 불가사의한 물건\n몸을 잘라 도망치는 도마뱀처럼\n자신의 피를 대가로 위험으로부터 도망친다',
  10: '튼튼하고 두꺼운 장화\n물에서도 평소와 같은 속도로 이동할 수 있게 된다\n또한 발에 대한 피해를 막아줄 수도 있지\n\n젖은 땅에서도 미끄러지지 않고\n추위나 해충으로부터 발을 보호한다',
  11: '힘을 불어넣은 곡옥으로 만든 목걸이\n받는 피해를 크게 감소시킨다\n\n곡옥의 힘을 발휘하기 위해서 특별한 머리카락을 엮어\n만든 끈으로 묶여 있다\n\n상당한 힘이 들어있는 것 같다',
  12: '당신이 굉장한 기록을 세웠다는 증거\n매우 힘차게 달릴 수 있게 된다\n\n황금빛으로 빛나는 가면이\n기묘한 표정으로 당신에게 미소지어 보인다',
}

const open = ref(new Set<number>())
function toggle(id: number) {
  const s = new Set(open.value)
  if (s.has(id)) s.delete(id)
  else s.add(id)
  open.value = s
}

// 게임 안 설명은 아카이브 문구에서 효과 부분만, 수치는 플레이어 처리에서 읽은 값
const PASSIVES = [
  {
    id: 1,
    name: '반야의 가면',
    field: false,
    desc: '착용하면 시야가 좁아지고, 일정 시간마다 체력이 극소량 회복되며, 스테미너 회복 속도가 소폭 증가하고, 스테미너가 바닥날 경우 체력 80까지만 체력을 소모하여 계속 달릴 수 있다',
    effect:
      '체력 초당 0.06 회복. 스태미나 회복 ×1.5. 스태미나 30 미만이어도 뛰기 시작할 수 있음. 스태미나가 0이면 체력이 80 이상인 동안 체력을 초당 1 써서 계속 달림',
    src: 'game' as Src,
  },
  {
    id: 2,
    name: '신묘한 여자 가면',
    field: true,
    desc: '착용하면 시야가 좁아지며 스테미너 회복 속도가 크게 감소한다',
    effect: '스태미나 회복 ×0.5',
    src: 'game' as Src,
  },
  {
    id: 3,
    name: '히바나의 저주받은 가면',
    field: false,
    desc: '일정 시간마다 체력이 소폭 회복되고 스테미너 회복 속도가 일정량 증가한다',
    effect: '체력 초당 0.5 회복. 스태미나 회복 ×2',
    src: 'game' as Src,
  },
  {
    id: 4,
    name: '히바나의 가면',
    field: false,
    desc: '착용한 사람의 생명이 위협을 받게 될 경우 단 한 번 가면이 생명을 대신해 준다. 스테미너 회복 속도가 약간 감소한다.',
    effect: '죽을 때 한 번 살려 줌(발동하는 경우는 아래). 스태미나 회복 ×0.75',
  },
  {
    id: 5,
    name: '천호의 가면',
    field: false,
    desc: '(효과 설명 없음)',
    effect: '체력 초당 2 회복. 스태미나 회복 ×5',
    src: 'game' as Src,
  },
  {
    id: 6,
    name: '매듭 머리띠',
    field: true,
    desc: '스테미너를 모두 사용했을 때 체력을 소모하여 달릴 수 있다',
    effect:
      '스태미나 30 미만이어도 뛰기 시작할 수 있음. 스태미나가 0이면 체력이 10 이상인 동안 체력을 초당 1 써서 계속 달림',
    src: 'game' as Src,
  },
  {
    id: 7,
    name: '초록 잎사귀',
    field: true,
    desc: '스테미너 회복 속도가 크게 증가한다',
    effect: '스태미나 회복 ×2',
    src: 'game' as Src,
  },
  {
    id: 8,
    name: '빨간 잎사귀',
    field: true,
    desc: '일정 시간마다 체력이 회복된다',
    effect: '체력 초당 0.125 회복(8초에 1)',
    src: 'game' as Src,
  },
  {
    id: 9,
    name: '도마뱀 꼬리',
    field: true,
    desc: '위험한 상황일 때 자동으로 그곳에서 이탈한다. 체력이 50 미만일 경우 효과가 발동되지 않는다',
    effect:
      '죽을 때 체력이 50 이상이면 체력 50을 잃고 다른 곳으로 순간이동(발동하는 경우는 아래). 쓰고 나면 꼬리가 사라짐',
  },
  {
    id: 10,
    name: '두꺼운 장화',
    field: true,
    desc: '물에서도 평소와 같은 속도로 이동할 수 있게 된다. 또한 발에 대한 피해를 막아줄 수도 있지',
    effect: '물속에서 느려지지 않음. 흑충을 밟아도, 함정 서랍을 열어도 피해 없음',
    src: 'game' as Src,
  },
  {
    id: 11,
    name: '곡옥 목걸이',
    field: false,
    desc: '받는 피해를 크게 감소시킨다',
    effect:
      '받는 피해 ×0.5(떨어져서 입는 피해, 쳐다보기 같은 지속 피해 포함). 성역 챕터 기믹으로 얻음',
    src: 'game' as Src,
  },
  {
    id: 12,
    name: '금메달',
    field: false,
    desc: '매우 힘차게 달릴 수 있게 된다',
    effect: '달리기 ×1.5, 스태미나 소모 없음, 달리며 문 부수기',
  },
]
</script>

<style scoped>
h2 {
  scroll-margin-top: 64px;
}
.name {
  font: inherit;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  text-align: left;
}
.name:hover {
  text-decoration: underline;
}
.caret {
  display: inline-block;
  width: 1em;
  color: var(--text-3);
}
.full-row td {
  background: var(--surface);
}
.full {
  margin: 0;
  white-space: pre-line;
  color: var(--text-2);
  font-size: 13px;
  line-height: 1.7;
}
.desc {
  color: var(--text-2);
  font-size: 13px;
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
