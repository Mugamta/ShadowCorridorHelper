<template>
  <div class="page">
    <h1>아이템</h1>
    <h2 id="camera">카메라</h2>
    <ul>
      <li>
        쓰고 나면 20초 뒤 다시 쓸 수 있습니다. 초보자에서는 두 배 빨리 찹니다.
        <SourceTag src="pak" />
      </li>
      <li>떠도는 영혼을 찍으면 없앨 수 있습니다.</li>
      <li>
        증오를 흩뿌리는 그림자를 25초 기절시킵니다(계곡 초보자 35초). 흑충도 쫓아냅니다.
        <SourceTag src="pak" />
      </li>
    </ul>
    <h2 id="flashlight">손전등</h2>
    <ul>
      <li>
        배터리는 켜 둔 동안만 닳고, 켠 시간으로 480초(8분)면 다 닳습니다. 손전등 강화 특전이면
        960초. <SourceTag src="pak" />
      </li>
      <li>새 손전등을 주우면 배터리가 다시 가득 찹니다. <SourceTag src="pak" /></li>
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
      <li>초보자는 폭죽 5개, 도전자는 3개를 들고 시작합니다. <SourceTag src="pak" /></li>
    </ul>
    <h2 id="crystal">수정구슬</h2>
    <ul>
      <li>
        시간을 멈춘 동안 증오를 흩뿌리는 그림자에 닿아도 죽지 않고, 떠도는 영혼이 멈추며, 함정방이
        발동하지 않습니다.
        <SourceTag src="pak" />
      </li>
    </ul>
    <h2 id="keys">열쇠와 문</h2>
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
      <li>증오를 흩뿌리는 그림자는 문에 닿기만 해도 부숩니다. <SourceTag src="pak" /></li>
    </ul>

    <h2 id="passive">패시브</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>알려진 효과</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in PASSIVES" :key="p.id">
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
      효과 칸은 이 정리에서 확인한 것만 적었습니다. 패시브는 줍는 순간 지금 찬 것과 맞바뀌고, 원래
      찬 것은 그 자리에 남습니다.
    </p>

    <h2 id="pickup">아이템 줍기</h2>
    <ul>
      <li>아이템은 대부분 서랍과 선반 안에 미리 놓여 있습니다.</li>
      <li>함정 서랍을 열면 큰 거미가 나와 피해 20을 입습니다.</li>
      <li>회복약은 작은 병 20, 큰 병 60을 회복합니다. <SourceTag src="pak" /></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '아이템 · 그림자 복도 공략 노트' })

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
