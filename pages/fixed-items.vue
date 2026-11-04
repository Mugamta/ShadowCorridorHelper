<template>
  <div class="page">
    <h1>정해진 아이템 자리</h1>
    <p class="lead">
      대부분의 아이템은 판마다 무작위로 서랍과 선반에 들어가지만, 매 판 같은 자리에 놓이는 아이템과
      정해진 아이템만 들어가는 칸이 있습니다. 스테이지마다 정리했습니다.
    </p>

    <h2 id="rules">세 가지 자리</h2>
    <ul>
      <li>
        서랍장과 선반은 모두 아이템 칸이 세 개뿐이고, 칸 안의 위치도 정해져 있습니다. 무작위
        아이템은 맵의 구역마다 정해진 개수만큼, 그 구역의 서랍·선반 중 하나를 무작위로 골라 빈 칸에
        들어갑니다. <SourceTag src="pak" />
      </li>
      <li>
        <strong>놓임</strong>: 바닥이나 선반 위에 처음부터 놓여 있는 아이템입니다. 매 판 같은 자리에
        있습니다. <SourceTag src="pak" />
      </li>
      <li>
        <strong>확정 선반·서랍</strong>: 정해진 칸에 정해진 아이템이 들어갑니다. 대부분 항상
        들어가고, 일부는 칸마다 따로 약 31% 확률로만 들어갑니다(빈 칸이면 아무것도 없음). 무작위
        아이템은 이 선반·서랍에 들어가지 않습니다. <SourceTag src="pak" />
      </li>
      <li>
        <strong>전용 칸</strong>: 그 방에 이 아이템이 나오게 되면 이 칸에 먼저 들어가고, 다른
        아이템은 들어가지 않습니다. 나오지 않는 판에는 비어 있습니다. <SourceTag src="pak" />
      </li>
      <li>
        확정 칸의 "패시브"는 매듭 머리띠, 초록 잎사귀, 빨간 잎사귀, 도마뱀 꼬리, 두꺼운 장화 중
        하나가 무작위로 나옵니다. <SourceTag src="pak" />
      </li>
      <li>
        곡옥 전용 칸도 있지만, 보통 판에서는 곡옥이 무작위로 배분되지 않아 비어 있는 것으로
        보입니다. 그래서 목록에서 뺐습니다. 곡옥은 "놓임" 자리에만 있습니다.
        <SourceTag src="guess" />
      </li>
      <li>
        해후 전투에서 쏘는 곡옥은 이 목록에 없습니다. 위치와 다시 생기는 시간은
        <NuxtLink to="/maps#reunion">해후의 곡옥</NuxtLink>을 보세요.
      </li>
    </ul>
    <p class="muted">
      매미의 복도·심연·영혼 집합소·성역은 방의 배치가 판마다 바뀝니다. 그래서 방 안의 자리는 "어느
      방에 무엇이 같이 있는지"로만 적었습니다. 시작 구역과 출구 구역처럼 위치가 바뀌지 않는 곳은
      시작 지점(또는 출구)에서 잰 직선 거리로 적었습니다. "근처"는 그 자리 10m 안에서 나오는
      배회자입니다.
    </p>
    <nav class="toc">
      <a v-for="s in FIXED_STAGES" :key="s.id" :href="`#${s.id}`">{{ s.title }}</a>
    </nav>

    <section v-for="s in FIXED_STAGES" :id="s.id" :key="s.id">
      <h2>{{ s.title }}</h2>

      <template v-if="s.starts">
        <h3>시작 방 (네 가지 중 하나)</h3>
        <div class="rooms">
          <div v-for="(r, i) in s.starts" :key="i" class="card room">
            <div class="room-title">시작 방 {{ i + 1 }}</div>
            <ul>
              <li v-for="(p, j) in r" :key="j">
                <span class="kind">{{ p.kind }}</span> {{ itemsText(p) }}
              </li>
            </ul>
          </div>
        </div>
      </template>

      <template v-if="s.fixed.length">
        <h3 v-if="s.rooms.length">위치가 바뀌지 않는 곳</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>아이템</th>
                <th>자리</th>
                <th>위치</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, j) in s.fixed" :key="j">
                <td>{{ itemsText(p) }}</td>
                <td class="nowrap">{{ p.kind }}</td>
                <td>
                  {{ p.where }}
                  <span v-if="p.enemies.length" class="muted">
                    · 근처 {{ p.enemies.join(', ') }}</span
                  >
                  <span v-if="p.note" class="muted"> · {{ p.note }}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>

      <template v-if="s.rooms.length">
        <h3>방 안 (방 위치는 판마다 바뀜)</h3>
        <div class="rooms">
          <div v-for="(r, i) in s.rooms" :key="i" class="card room">
            <div class="room-title">방 {{ i + 1 }}</div>
            <ul>
              <li v-for="(p, j) in r" :key="j">
                <span class="kind">{{ p.kind }}</span> {{ itemsText(p) }}
                <span v-if="p.floor" class="muted">({{ p.floor }})</span>
                <span v-if="p.enemies.length" class="muted">
                  · 근처 {{ p.enemies.join(', ') }}</span
                >
              </li>
            </ul>
          </div>
        </div>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import { FIXED_STAGES } from '~/data/fixedItems'
import type { FixedSpot } from '~/data/types'

useHead({ title: '정해진 아이템 자리 · 그림자 복도 공략 노트' })

// "발광석 ×6 · 황금 열쇠 (약 31%)" — 확률은 '항상'이 아닐 때만 붙인다
function itemsText(p: FixedSpot) {
  return p.items
    .map(([name, n, chance]) => {
      const count = n > 1 ? ` ×${n}` : ''
      const tail = chance === '항상' ? '' : ` (${chance})`
      return name + count + tail
    })
    .join(' · ')
}
</script>

<style scoped>
/* 목차로 이동할 때 위쪽 고정 메뉴에 제목이 가리지 않게 */
section,
h2 {
  scroll-margin-top: 64px;
}
.toc {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  margin: 16px 0 8px;
  font-size: 14px;
}
.rooms {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 10px;
  margin: 12px 0 16px;
}
.room {
  padding: 10px 14px;
  font-size: 14px;
}
.room ul {
  margin: 6px 0 0;
  padding-left: 18px;
}
.room-title {
  font-weight: 600;
}
.kind {
  color: var(--text-3);
  font-size: 12px;
}
.nowrap {
  white-space: nowrap;
}
</style>
