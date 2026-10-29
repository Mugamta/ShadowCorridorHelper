<template>
  <div class="page">
    <h1>적</h1>
    <p class="lead">
      속도는 초당 게임 단위(100 = 1m)입니다. 플레이어는 걸으면 130, 뛰면 350, 앉아 걸으면 50입니다.
    </p>
    <nav class="toc">
      <a v-for="e in ENEMIES" :key="e.id" :href="`#${e.id}`">{{ e.name }}</a>
      <a href="#others">그 밖의 적</a>
    </nav>

    <section v-for="e in ENEMIES" :id="e.id" :key="e.id" class="enemy">
      <h2>
        {{ e.name }}
        <span v-if="e.nick" class="nick">{{ e.nick }}</span>
      </h2>
      <p class="internal muted">
        내부 이름 <code>{{ e.internal }}</code>
      </p>
      <p>{{ e.summary }}</p>

      <div class="body" :class="{ wide: !e.sense }">
        <div>
          <dl class="stats">
            <div>
              <dt>배회</dt>
              <dd>{{ e.walk }}</dd>
            </div>
            <div>
              <dt>추격</dt>
              <dd>{{ e.chase }}</dd>
            </div>
            <div>
              <dt>시야</dt>
              <dd>{{ e.sight }}</dd>
            </div>
            <div>
              <dt>발소리</dt>
              <dd>{{ e.sprint }}</dd>
            </div>
            <div>
              <dt>폭죽</dt>
              <dd>{{ e.firework }}</dd>
            </div>
            <div>
              <dt>추격 해제</dt>
              <dd>{{ e.lose }}</dd>
            </div>
          </dl>
          <ul class="facts">
            <li v-for="(f, i) in e.facts" :key="i">{{ f.text }} <SourceTag :src="f.src" /></li>
          </ul>
        </div>
        <SenseDiagram
          v-if="e.sense"
          :name="e.name"
          :capsules="e.sense.capsules"
          :circles="e.sense.circles"
        />
      </div>
    </section>

    <section id="others">
      <h2>그 밖의 적</h2>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>적</th>
              <th>내부 이름</th>
              <th class="num">속도</th>
              <th>메모</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in MINOR_ENEMIES" :key="m.internal">
              <td>{{ m.name }}</td>
              <td>
                <code>{{ m.internal }}</code>
              </td>
              <td class="num">{{ m.speed }}</td>
              <td>{{ m.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="muted">
        속도는 게임 파일 값입니다 <SourceTag src="pak" />. 배회자 종류 번호(EnemyTipe) 2·3은
        울음소리 배회자(서 있는 것, 걷는 것), 5는 경종(BellMan)으로 보이지만 게임에서 모습을
        확인하지는 않았습니다 <SourceTag src="guess" />. 심연의 안내인은 적이 아닙니다.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ENEMIES, MINOR_ENEMIES } from '~/data/enemies'

useHead({ title: '적 · 그림자 복도 공략 노트' })
</script>

<style scoped>
.toc {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  font-size: 14px;
  margin: 16px 0 8px;
}
.toc a {
  color: var(--text-2);
  text-decoration: none;
}
.toc a:hover {
  color: var(--accent-text);
}
.enemy {
  scroll-margin-top: 64px;
}
#others {
  scroll-margin-top: 64px;
}
.nick {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-3);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 1px 8px;
  vertical-align: 0.2em;
  margin-left: 6px;
}
.internal {
  font-size: 12px;
  margin-bottom: 8px;
}
.body {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 380px);
  gap: 20px;
  align-items: start;
}
.body.wide {
  grid-template-columns: minmax(0, 1fr);
}
@media (max-width: 760px) {
  .body {
    grid-template-columns: minmax(0, 1fr);
  }
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
  background: var(--line);
  border: 1px solid var(--line);
  border-radius: 10px;
  overflow: hidden;
  margin: 0 0 14px;
}
.stats div {
  background: var(--surface);
  padding: 8px 12px;
}
.stats dt {
  font-size: 12px;
  color: var(--text-3);
}
.stats dd {
  margin: 0;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
}
@media (max-width: 480px) {
  .stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.facts {
  color: var(--text-2);
}
</style>
