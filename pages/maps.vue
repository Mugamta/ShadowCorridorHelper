<template>
  <div class="page">
    <h1>맵 기믹</h1>
    <p class="lead">
      곡옥 스테이지 같은 5×5 무작위 맵은 한 칸이 3250(32.5m)인 타일로 짜여 있습니다. 시체가 흐르는
      계곡, 영혼 집합소 같은 고정 맵은 타일이 없습니다. <SourceTag src="game" />
    </p>

    <h2 id="shadow">살기 등장 조건</h2>
    <p>
      5×5 맵에서는 곡옥 수가 정해진 값과 <strong>같아지고 10초 뒤에도 같으면</strong> 살기가
      나옵니다. 곡옥 챌린지에서는 나오지 않습니다. <SourceTag src="pak" />
    </p>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>맵</th>
            <th>쉬움</th>
            <th>보통</th>
            <th>어려움</th>
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
        "적 지움"이 붙은 맵은 살기가 나올 때 다른 배회자를 모두 없앱니다. 출구를 확인하면 살기가
        사라지고 일반 적이 다시 배치됩니다. <SourceTag src="pak" />
      </li>
      <li>
        시체가 흐르는 계곡은 곡옥과 상관없이 특정 위치를 지나면 나옵니다. <SourceTag src="pak" />
      </li>
      <li>DLC 맵(어느 맵인지 모름)은 어려움에서 곡옥 3개에 나옵니다. <SourceTag src="pak" /></li>
    </ul>

    <h2 id="trap">함정방</h2>
    <p>
      곡옥 근처 등에 들어가면 근처에서 배회자가 튀어나오는 곳입니다. 맵 블루프린트가 보이지 않는
      상자(트리거)에 들어갈 때(드물게 나올 때) 정해진 생성 지점에서 적을 만듭니다.
      <SourceTag src="pak" />
    </p>
    <ul>
      <li>대부분 한 판에 한 번만 발동합니다. <SourceTag src="game" /></li>
      <li>수정구슬로 시간을 멈춘 동안에는 발동하지 않습니다. <SourceTag src="pak" /></li>
      <li>
        발동하면 근처 문이나 벽을 부수며 튀어나오고, 대부분 처음부터 추격 상태입니다.
        <SourceTag src="pak" />
      </li>
      <li>
        Random5x5와 프롤로그에는 함정방이 없습니다. Stage5x5, Extra5x5, Stage6x5, 시체가 흐르는
        계곡에 있습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        Stage5x5의 한 함정은 들어가면 도코니 둘을 내고, 나가면 없앱니다. Stage6x5의 한 함정은 나갈
        때 발동합니다.
        <SourceTag src="pak" />
      </li>
    </ul>
    <h3>시체가 흐르는 계곡의 난이도별 함정</h3>
    <p>
      난이도에 따라 함정이 달라지는 맵은 계곡뿐입니다(다른 맵은 모든 난이도에서 같음). 보통
      난이도에서 실제로 함정 트리거 세 개만 생기는 것을 확인했습니다. <SourceTag src="game" />
    </p>
    <ul>
      <li>
        어려움이 아닐 때만 생기는 함정이 하나, 어려움에서만 생기는 함정이 둘 있습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        어려움 전용 함정 하나는 추격 상태가 아닌 배회자를, 다른 하나는 추격 상태의 배회자를 냅니다.
        <SourceTag src="pak" />
      </li>
      <li>
        시작할 때 나오는 배회자가 어려움이면 2마리, 그 밖에는 1마리입니다. <SourceTag src="pak" />
      </li>
    </ul>

    <h2 id="drop">무너지는 곳</h2>
    <ul>
      <li>
        복도 한가운데가 무너져 막히는 곳입니다. 5×5 맵에 몇 개씩(6~8개 관찰) 있습니다. 무너지기 전에
        눈에 띄는 전조는 없습니다. <SourceTag src="game" />
      </li>
      <li>
        복도 중심에서 양쪽으로 270 떨어진 곳에 보이지 않는 선이 둘 있고,
        <strong>두 선을 모두 지나야</strong> 무너집니다. 방향은 상관없습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        그래서 한쪽 선만 밟고 되돌아가면 무너지지 않습니다. 막다른 통로와 ㄷ자 통로에서
        관찰했습니다.
        <SourceTag src="game" />
      </li>
      <li>
        반대쪽 선을 밟으면 바로 잔해가 떨어져 길이 막히고, 2초 뒤 화면이 흔들립니다.
        <SourceTag src="pak" />
      </li>
    </ul>

    <h2 id="flood">성역(Stage6x5)의 물</h2>
    <ul>
      <li>
        곡옥이 1개, 3개, 5개가 되는 순간 물이 차오르고, 물 쪽 길이 막힙니다(들어가려 하면 안내
        문구가 나옴).
        <SourceTag src="pak" />
      </li>
      <li>
        물이 차면 물 레버 10개가 올라가 당길 수 있게 됩니다. 그중 <strong>아무거나 하나</strong>를
        당기면 물이 빠지고 레버가 모두 다시 잠깁니다. <SourceTag src="pak" />
      </li>
      <li>그 밖의 레버는 물과 상관없습니다. <SourceTag src="pak" /></li>
    </ul>

    <h2 id="lever">레버</h2>
    <ul>
      <li>
        한 번 내리면 다시 못 올리는 레버가 있습니다. 당긴 뒤에는 상호작용 표시가 아예 뜨지 않습니다.
        <SourceTag src="game" />
      </li>
      <li>시간이 지나면 되돌아가는 레버도 있는 것으로 보입니다. <SourceTag src="guess" /></li>
    </ul>

    <h2 id="door">문</h2>
    <ul>
      <li>
        미닫이문은 문짝이 둘이라 열어도 밀린 문짝이 문틀 일부를 막습니다. 여닫이문은 문틀과 90°로
        열립니다.
        <SourceTag src="game" />
      </li>
      <li>
        여닫이문 자리는 벽 한 칸(250)을 차지하지만 문짝은 약 110이고 나머지는 벽입니다. 부서져도 그
        벽은 남습니다.
        <SourceTag src="game" />
      </li>
      <li>잠긴 문을 여는 방법은 <NuxtLink to="/player#tools">열쇠와 문</NuxtLink>을 보세요.</li>
    </ul>

    <h2 id="walls">지나갈 수 있는 벽</h2>
    <ul>
      <li>
        신사 벽 중 기둥·문지방·인방만 있는 빈 문틀은 지나갈 수 있습니다. 같은 자리에 난간이 서
        있으면 막힙니다.
        <SourceTag src="game" />
      </li>
      <li>
        한쪽은 벽이고 다른 쪽은 문짝 없는 출입구인 신사 벽이 있습니다(시작 방 근처). 격자 창이 난
        벽은 못 지나갑니다.
        <SourceTag src="game" />
      </li>
    </ul>

    <h2 id="ghost">떠도는 영혼의 제단</h2>
    <p>
      카메라로 영혼을 없애면 약 3분 뒤 제단 자리에서 새 영혼이 생겨, 맵의 영혼 수가 유지됩니다. 여러
      마리를 없애면 마리마다 따로 잽니다. 일시 정지 중에는 시간이 멈춥니다. <SourceTag src="game" />
    </p>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '맵 기믹 · 그림자 복도 공략 노트' })

const SHADOW_TIMING = [
  { map: 'Random5x5 (Stage1)', easy: '없음', normal: '없음', hard: '없음' },
  { map: 'Extra5x5 (Stage3)', easy: '없음', normal: '없음', hard: '곡옥 4 · 적 지움' },
  { map: 'Stage5x5 (Stage5)', easy: '없음', normal: '곡옥 5 · 적 지움', hard: '곡옥 4 · 적 지움' },
  { map: 'Stage6x5 (Stage7, 성역)', easy: '없음', normal: '없음', hard: '없음' },
]
</script>

<style scoped>
h2 {
  scroll-margin-top: 64px;
}
</style>
