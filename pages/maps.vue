<template>
  <div class="page">
    <h1>맵</h1>
    <p class="lead">
      무작위 맵은 한 칸이 3250(32.5m)인 타일로 판마다 새로 짜입니다. 고정 맵은 늘 같은 모양입니다.
    </p>

    <h2 id="stages">스테이지</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>순서</th>
            <th>이름</th>
            <th>맵</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="s in STAGES" :key="s.name">
            <td>{{ s.no }}</td>
            <td>{{ s.name }}</td>
            <td>{{ s.kind }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="muted">
      성역은 영혼 집합소에 숨겨진 비밀의 문을 열면 갈 수 있습니다. 비밀의 방은 해후를 도전자
      난이도로 클리어하면 열리고, 시작 화면의 스테이지 선택에서 고를 수 있습니다. 이 페이지의 "5×5
      맵"은 무작위 맵 네 곳을 말합니다(성역은 6×5).
    </p>
    <p>
      출구의 곡옥 재단에 바칠 곡옥은 초보자 3개, 도전자·파괴자 5개입니다. 초보자에서는 3개만 모으면
      출구로 가도 됩니다.
    </p>

    <h2 id="shadow">증오를 흩뿌리는 그림자 등장 조건</h2>
    <p>
      무작위 맵에서는 곡옥 수가 정해진 값에 <strong>도달하는 순간</strong> 증오를 흩뿌리는 그림자가
      나옵니다.
    </p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>맵</th>
            <th>초보자</th>
            <th>도전자</th>
            <th>파괴자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in SHADOW_TIMING" :key="r.map">
            <td>{{ r.map }}</td>
            <td>{{ r.easy }}</td>
            <td>{{ r.normal }}</td>
            <td>{{ r.hard }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li>
        "적 지움"이 붙은 맵은 증오를 흩뿌리는 그림자가 나타나는 순간 맵에 있던 배회자가 모두
        사라집니다. 그 뒤 함정방에서 불러낸 배회자는 사라지지 않고 맵을 돌아다닙니다. 흑충, 가면
        벌레, 함정 서랍은 그대로 남습니다.
      </li>
      <li>
        출구에 곡옥을 바치는 순간 증오를 흩뿌리는 그림자가 사라지고, 사라졌던 배회자가 다시
        나타납니다. 수정 구슬로 시간을 멈춘 동안 바쳐도 다시 나타난 배회자는 멈추지 않고
        돌아다닙니다.
      </li>
      <li>외연에서는 증오를 흩뿌리는 그림자가 나와도 다른 배회자가 사라지지 않습니다.</li>
      <li>
        시체가 흐르는 계곡은 곡옥과 상관없이, 열쇠를 줍거나 레버를 내린 뒤 특정 지점을 지나면
        나옵니다.
      </li>
      <li>외연은 파괴자에서 곡옥 3개에 나옵니다.</li>
      <li>곡옥 챌린지에서는 나오지 않습니다.</li>
    </ul>

    <h2 id="trap">함정방</h2>
    <p>
      곡옥 근처 등에 들어가면 근처에서 배회자가 튀어나오는 곳입니다. 보이지 않는 구역에 들어갈
      때(드물게 나올 때) 정해진 자리에서 적이 나옵니다.
      <SourceTag src="pak" />
    </p>
    <ul>
      <li>대부분 한 판에 한 번만 발동합니다.</li>
      <li>수정 구슬로 시간을 멈춘 동안에는 발동하지 않습니다.</li>
      <li>발동하면 근처 문이나 벽을 부수며 튀어나오고, 대부분 처음부터 추격 상태입니다.</li>
      <li>
        나오는 적은 대부분 카구라 방울의 배회자이고, 달리는 배회자나 울음소리의 배회자가 나오기도
        합니다. 성역에는 배회형 울음소리의 배회자가 나오는 함정방이 있습니다.
      </li>
      <li>
        매미의 복도와 골목에는 함정방이 없습니다. 영혼 집합소, 심연, 성역, 시체가 흐르는 계곡에
        있습니다.
      </li>
      <li>성역에는 거울을 눌러 다른 곳으로 옮겨 가는 함정형 곡옥방이 있습니다.</li>
      <li>
        영혼 집합소의 한 함정은 들어가면 울음소리의 배회자 둘을 내고, 나가면 없앱니다. 성역의 한
        함정은 나갈 때 발동합니다.
        <SourceTag src="pak" />
      </li>
    </ul>
    <h3>시체가 흐르는 계곡의 난이도별 함정</h3>
    <p>
      난이도에 따라 함정이 달라지는 맵은 계곡뿐입니다(다른 맵은 모든 난이도에서 같음). 도전자에서는
      함정이 세 개만 생깁니다.
    </p>
    <ul>
      <li>
        파괴자가 아닐 때만 생기는 함정이 하나, 파괴자에서만 생기는 함정이 둘 있습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        파괴자 전용 함정 하나는 추격 상태가 아닌 배회자를, 다른 하나는 추격 상태의 배회자를 냅니다.
        <SourceTag src="pak" />
      </li>
      <li>
        시작할 때 나오는 배회자가 파괴자면 2마리, 그 밖에는 1마리입니다. <SourceTag src="pak" />
      </li>
    </ul>

    <h2 id="drop">무너지는 곳</h2>
    <ul>
      <li>
        복도 한가운데가 무너져 막히는 곳입니다. 5×5 맵에 몇 개씩(6~8개) 있습니다. 무너지기 전에 눈에
        띄는 전조는 없습니다.
      </li>
      <li>
        복도 중심에서 양쪽으로 270 떨어진 곳에 보이지 않는 선이 둘 있고,
        <strong>두 선을 모두 지나야</strong> 무너집니다. 방향은 상관없습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        그래서 한쪽 선만 밟고 되돌아가면 무너지지 않습니다. 막다른 통로와 ㄷ자 통로에서
        관찰했습니다.
      </li>
      <li>
        반대쪽 선을 밟으면 바로 잔해가 떨어져 길이 막히고, 2초 뒤 화면이 흔들립니다.
        <SourceTag src="pak" />
      </li>
    </ul>

    <h2 id="flood">성역의 물과 재단</h2>
    <ul>
      <li>
        곡옥이 1개, 3개, 5개가 되는 순간 물이 차오르고, 물 쪽 길이 막힙니다(들어가려 하면 안내
        문구가 나옴).
      </li>
      <li>
        물이 차면 물 레버 10개가 올라가 당길 수 있게 됩니다. 그중 <strong>아무거나 하나</strong>를
        당기면 물이 빠지고 레버가 모두 다시 잠깁니다.
      </li>
      <li>그 밖의 레버는 물과 상관없습니다. <SourceTag src="pak" /></li>
      <li>
        곡옥 재단과 출구는 북쪽 홀 끝의 높은 단 위에 있습니다. 복도에서 비탈진 바닥을 내려가 홀로
        들어가고, 홀 양옆의 계단 두 개로 단에 오릅니다. <SourceTag src="pak" />
      </li>
    </ul>

    <h2 id="reunion">해후의 곡옥</h2>
    <p>
      해후의 두 전투에서는 곡옥을 재단에 바치지 않고 쏴서 보스를 맞힙니다. 곡옥은 정해진 자리에 놓여
      있고, 먹으면 다시 생깁니다.
    </p>
    <ul>
      <li>곡옥이 놓인 자리는 바닥이 초록색으로 빛납니다.</li>
      <li>닿으면 바로 1개를 먹습니다. <SourceTag src="pak" /></li>
      <li>
        <strong>먹고 30초 뒤</strong> 같은 자리에 다시 생깁니다. 자리마다 따로 잽니다. 난이도와
        상관없습니다. <SourceTag src="pak" />
      </li>
      <li>
        최대 5개까지 가질 수 있습니다. 5개일 때 닿으면 먹어지지 않고 그 자리에 남습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        곡옥을 고르고 사용하면 보는 쪽으로 쏘며, 한 발에 1개가 줄어듭니다. 0개면 쏠 수 없습니다.
        아이템 무한을 켜면 줄지 않습니다. <SourceTag src="pak" />
      </li>
      <li>
        전투 전에는 곡옥이 보이지 않고, 전투 직전 장면에서 나타납니다. <SourceTag src="pak" />
      </li>
    </ul>

    <h3>방대해진 증오 전투: 곡옥 15자리</h3>
    <ReunionMap
      title="방대해진 증오 전투"
      :ext="2800"
      :magatama="STAGE8_MAGATAMA"
      :orbs="STAGE8_ORBS"
      :walls="STAGE8_WALLS"
      :high="STAGE8_HIGH"
      :marks="[{ x: -2500, y: -200, label: '입구' }]"
    />
    <ul>
      <li>높은 바닥에 4자리, 나머지 11자리는 낮은 곳에 있습니다. <SourceTag src="pak" /></li>
      <li>
        초록 구는 11개입니다. 먹으면 스태미나가 100이 되고 30초 뒤 다시 생깁니다.
        <SourceTag src="pak" />
      </li>
      <li>
        <strong>25발</strong>을 맞히면 쓰러집니다. 평소에는 방패에 막혀 횟수가 오르지 않고, 번개와
        함께 방패가 꺼진 동안에만 들어갑니다. <SourceTag src="pak" />
      </li>
      <li>
        5발마다 단계가 오르고, 그때 방패가 다시 켜지며 5초 동안은 맞혀도 들어가지 않습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        방패가 꺼져 있는 시간은 단계마다 15초, 10초, 7초, 6초, 5초로 줄어듭니다.
        <SourceTag src="pak" />
      </li>
      <li>방패는 30초마다 꺼지는 것으로 보입니다. <SourceTag src="guess" /></li>
    </ul>

    <h3>사미호 전투: 곡옥 36자리</h3>
    <ReunionMap
      title="사미호 전투"
      :ext="2300"
      :magatama="STAGE82_MAGATAMA"
      :marks="[
        { x: -1506, y: -277, label: '시작' },
        { x: 2, y: -270, label: '사미호' },
      ]"
    />
    <ul>
      <li>
        3개씩 모인 무더기가 12곳에 있습니다. 초록 구는 없습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        <strong>40발</strong>을 맞히면 쓰러집니다. 방패는 없습니다. 8발마다 단계가 오르고, 그때 7초
        동안은 맞혀도 들어가지 않습니다. <SourceTag src="pak" />
      </li>
      <li>
        사미호가 띄우는 태양은 5발이면 부서집니다. 사미호의 40발에는 들어가지 않습니다.
        <SourceTag src="pak" />
      </li>
    </ul>

    <h2 id="lever">레버</h2>
    <ul>
      <li>
        한 번 내리면 다시 못 올리는 레버가 있습니다. 당긴 뒤에는 상호작용 표시가 아예 뜨지 않습니다.
      </li>
      <li>시간이 지나면 되돌아가는 레버도 있는 것으로 보입니다. <SourceTag src="guess" /></li>
    </ul>

    <h2 id="door">문</h2>
    <ul>
      <li>
        미닫이문은 문짝이 둘이라 열어도 밀린 문짝이 문틀 일부를 막습니다. 여닫이문은 문틀과 90°로
        열립니다.
      </li>
      <li>
        여닫이문 자리는 벽 한 칸(250)을 차지하지만 문짝은 약 110이고 나머지는 벽입니다. 부서져도 그
        벽은 남습니다.
      </li>
      <li>잠긴 문을 여는 방법은 <NuxtLink to="/items#keys">황금 열쇠와 문</NuxtLink>을 보세요.</li>
    </ul>

    <h2 id="walls">지나갈 수 있는 벽</h2>
    <ul>
      <li>
        신사 벽 중 기둥·문지방·인방만 있는 빈 문틀은 지나갈 수 있습니다. 같은 자리에 난간이 서
        있으면 막힙니다.
      </li>
      <li>
        한쪽은 벽이고 다른 쪽은 문짝 없는 출입구인 신사 벽이 있습니다(시작 방 근처). 격자 창이 난
        벽은 못 지나갑니다.
      </li>
    </ul>

    <h2 id="mirror">거울 제단</h2>
    <ul>
      <li>제단 위의 거울을 누르면 화면이 하얘졌다가 다른 곳으로 순간이동합니다.</li>
      <li>손거울과 달리 거울마다 도착하는 곳이 정해져 있습니다. <SourceTag src="pak" /></li>
      <li>
        한 번만 쓸 수 있는 거울이 있습니다. 쓰고 나면 다시 눌러도 반응하지 않습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        순간이동 대신 스테이지를 끝내는 거울도 있습니다. 골목과 영혼 집합소(비밀 골 포함)에
        있습니다. <SourceTag src="pak" />
      </li>
      <li>
        진행에 따라 사라지거나 더는 쓸 수 없게 되는 거울도 있습니다(시체가 흐르는 계곡, 대식가).
        <SourceTag src="pak" />
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>스테이지</th>
          <th>거울 수</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="m in MIRRORS" :key="m.map">
          <td>{{ m.map }}</td>
          <td>{{ m.count }}</td>
        </tr>
      </tbody>
    </table>
    <p>매미의 복도, 방대해진 증오, 해후에는 없습니다. <SourceTag src="pak" /></p>

    <h2 id="ghost">떠도는 영혼의 제단</h2>
    <p>
      낡은 카메라로 영혼을 없애면 약 3분 뒤 제단 자리에서 새 영혼이 생겨, 맵의 영혼 수가 유지됩니다.
      여러 마리를 없애면 마리마다 따로 잽니다. 일시 정지 중에는 시간이 멈춥니다. 수정 구슬로 시간을
      멈춘 동안 새로 생긴 영혼은 멈추지 않고 돌아다닙니다.
    </p>
  </div>
</template>

<script setup lang="ts">
import {
  STAGE82_MAGATAMA,
  STAGE8_HIGH,
  STAGE8_MAGATAMA,
  STAGE8_ORBS,
  STAGE8_WALLS,
} from '~/data/reunionMap'

useHead({ title: '맵 · 그림자 복도 공략 노트' })

// 메뉴 순서(EX는 추가 스테이지). 무작위 = 타일 맵
const STAGES = [
  { no: '0', name: '골목', kind: '고정' },
  { no: '1', name: '매미의 복도', kind: '무작위 5×5' },
  { no: '2', name: '시체가 흐르는 계곡', kind: '고정' },
  { no: '3', name: '심연', kind: '무작위 5×5' },
  { no: '4', name: '대식가', kind: '고정' },
  { no: '5', name: '영혼 집합소', kind: '무작위 5×5' },
  { no: '6', name: '방대해진 증오', kind: '고정' },
  { no: 'EX1', name: '성역', kind: '무작위 6×5' },
  { no: 'EX2', name: '해후', kind: '고정' },
  { no: 'DLC', name: '외연', kind: '고정' },
  { no: '', name: '비밀의 방', kind: '고정' },
]

// 거울 제단 배치(맵에 처음 놓인 수, 진행 중 사라지는 것 포함)
const MIRRORS = [
  { map: '골목', count: '1 (끝내는 거울)' },
  { map: '시체가 흐르는 계곡', count: '3' },
  { map: '심연', count: '2' },
  { map: '대식가', count: '5' },
  { map: '영혼 집합소', count: '7 (그중 끝내는 거울 2)' },
  { map: '성역', count: '1 (한 번만)' },
  { map: '비밀의 방', count: '1' },
]

const SHADOW_TIMING = [
  { map: '매미의 복도', easy: '없음', normal: '없음', hard: '없음' },
  { map: '심연', easy: '없음', normal: '없음', hard: '곡옥 4 · 적 지움' },
  { map: '영혼 집합소', easy: '없음', normal: '곡옥 5 · 적 지움', hard: '곡옥 4 · 적 지움' },
  { map: '성역', easy: '없음', normal: '없음', hard: '없음' },
  { map: '외연', easy: '없음', normal: '없음', hard: '곡옥 3' },
]
</script>

<style scoped>
h2 {
  scroll-margin-top: 64px;
}
</style>
