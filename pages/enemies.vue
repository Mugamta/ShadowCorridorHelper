<template>
  <div class="page">
    <h1>적</h1>
    <p class="lead">
      속도는 초당 게임 단위(100 = 1m)입니다. 플레이어는 걸으면 130, 뛰면 350, 앉아 걸으면 50입니다.
    </p>
    <nav class="toc">
      <div v-for="g in GROUPS" :key="g.id">
        <a :href="`#${g.id}`" class="toc-group">{{ g.title }}</a>
        <a v-for="e in g.list" :key="e.id" :href="`#${e.id}`">{{ e.name }}</a>
      </div>
    </nav>

    <section v-for="g in GROUPS" :id="g.id" :key="g.id" class="group">
      <h2>{{ g.title }}</h2>
      <p v-if="g.intro" class="muted">{{ g.intro }}</p>

      <section v-for="e in g.list" :id="e.id" :key="e.id" class="enemy">
        <h3>{{ e.name }}</h3>
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

      <template v-if="g.id === 'others'">
        <h3 id="minor">자세히 모르는 적</h3>
        <div class="table-wrap">
          <table>
            <thead>
              <tr>
                <th>적</th>
                <th class="num">속도</th>
                <th>메모</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="m in MINOR_ENEMIES" :key="m.name">
                <td>{{ m.name }}</td>
                <td class="num">{{ m.speed }}</td>
                <td>{{ m.note }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="muted">속도는 플레이로 아직 확인하지 않았습니다 <SourceTag src="pak" />.</p>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ENEMIES, MINOR_ENEMIES } from '~/data/enemies'

useHead({ title: '적 · 그림자 복도 공략 노트' })

const GROUPS = [
  {
    id: 'wanderers',
    title: '배회자',
    intro:
      '순찰하다가 플레이어를 보거나 들으면 쫓아오는 적들입니다. 값은 도전자·파괴자 기준이고, 초보자에서 달라지는 값은 따로 적었습니다. 도전자와 파괴자는 적의 능력이 같고 수와 종류만 다릅니다.',
    list: ENEMIES.filter((e) => e.group === 'wanderer'),
  },
  {
    id: 'others',
    title: '그 밖의 적',
    intro: '',
    list: ENEMIES.filter((e) => e.group === 'other'),
  },
]
</script>

<style scoped>
.toc {
  display: grid;
  gap: 6px;
  font-size: 14px;
  margin: 16px 0 8px;
}
.toc div {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
}
.toc .toc-group {
  color: var(--text);
  font-weight: 700;
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
.group,
#minor {
  scroll-margin-top: 64px;
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
