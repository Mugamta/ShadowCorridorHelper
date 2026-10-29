<template>
  <div class="page">
    <h1>감지·추격</h1>
    <p class="lead">
      적이 플레이어를 알아채는 길은 시야, 불빛, 소리 세 가지입니다. 적의 상태는 기절 &gt; 추격 &gt;
      시야 안 &gt; 경계 순으로 강합니다.
    </p>

    <h2 id="sight">시야와 발견</h2>
    <p>
      배회자의 시야는 앞으로 눕힌 캡슐(둥근 막대) 모양입니다. 위에서 보면 앞으로 818, 좌우 300
      정도이고, 몸 뒤로도 82 정도 걸칩니다. <SourceTag src="pak" />
    </p>
    <p>배회자가 추격을 시작하려면 아래가 모두 맞아야 합니다. <SourceTag src="pak" /></p>
    <ol>
      <li>적(눈높이 +70)에서 플레이어까지 선이 막히지 않는다.</li>
      <li>
        플레이어가 시야 캡슐 안에 있다. 또는 불을 켰고 더 큰 불빛 캡슐(앞 1636, 좌우 800) 안에 있다.
      </li>
      <li>숨는 곳에서 밖을 내다보는 중이 아니다.</li>
    </ol>
    <div class="note">
      "시야 안"은 "들켰다"가 아닙니다. 가만히 앉아 있어도 적의 시야(옆 80°, 거리 950까지 관찰)에
      들어가면 시야 안 표시는 켜집니다. 실제로 알아챘는지는 추격이 시작되는지로만 알 수 있습니다.
      <SourceTag src="game" />
    </div>
    <p>배회자는 플레이어와 대략 2000 안일 때만 시야 판정을 켭니다. <SourceTag src="pak" /></p>

    <h3>앉기</h3>
    <p>
      배회자에게 앉기는 시야 범위를 바꾸지 않습니다. 몸이 낮아져서 낮은 장애물이 시선을 막고, 뛰는
      소리가 안 나는 효과뿐입니다. <SourceTag src="pak" /> 도코니는 다릅니다. 앉아서 가만히 있으면
      두리번거리지 않습니다(<NuxtLink to="/enemies#dokoni">도코니</NuxtLink>).
    </p>

    <h2 id="light">불빛</h2>
    <ul>
      <li>
        라이터와 손전등은 배회자에게 똑같습니다. 둘 다 "불 켬" 하나만 켭니다.
        <SourceTag src="pak" />
      </li>
      <li>
        불을 켜면 배회자 시야가 앞 1636, 좌우 800으로 넓어집니다(경종은 앞 1721).
        <SourceTag src="pak" />
      </li>
      <li>
        도코니에게는 다릅니다. 라이터는 600 안에서 시야에 있고 두리번 중일 때만, 손전등은 도코니를
        직접 비추면(화면 방향이 성분마다 ±0.42 안) 두리번을 일으킵니다. <SourceTag src="pak" />
      </li>
      <li>
        일부 난이도에서는 배회자 불빛 캡슐이 좌우 500, 높이 반 700으로 줄고 이동 속도가 ×0.7이
        됩니다.
        <SourceTag src="pak" />
      </li>
    </ul>

    <h2 id="sound">소리</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>적</th>
            <th class="num">발소리(뛸 때)</th>
            <th class="num">폭죽</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>배회자(무녀·살며시)</td>
            <td class="num">2300</td>
            <td class="num">3000</td>
          </tr>
          <tr>
            <td>달리는 배회자</td>
            <td class="num">찾아오지 않음</td>
            <td class="num">3000</td>
          </tr>
          <tr>
            <td>천리안</td>
            <td class="num">1800 (뛰지 않아도)</td>
            <td class="num">3000</td>
          </tr>
          <tr>
            <td>경종의 배회자</td>
            <td class="num">1500</td>
            <td class="num">3000</td>
          </tr>
          <tr>
            <td>도코니</td>
            <td class="num">없음</td>
            <td class="num">1200</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul>
      <li>
        소리는 적 위치에서 3D 직선거리만 봅니다. 벽과 시선은 상관없습니다. <SourceTag src="game" />
      </li>
      <li>
        그래서 여러 층 맵에서는 다른 층의 발소리도 들리고, 시체가 흐르는 계곡처럼 높이 차가 큰
        곳에서는 바로 위아래여도 못 듣습니다. 내 높이에서 들리는 범위는 √(거리² − 높이 차²)입니다.
        <SourceTag src="game" />
      </li>
      <li>
        발소리는 뛸 때만 납니다. 걷기와 앉아 걷기는 소리가 없습니다(천리안은 예외).
        <SourceTag src="pak" />
      </li>
    </ul>

    <h3 id="firework">폭죽</h3>
    <ul>
      <li>
        던진 폭죽은 땅에 떨어지고 1초 뒤부터 5초 동안 터집니다. 그동안 3000 안의 적이 그 자리를
        목표로 삼습니다.
        <SourceTag src="pak" />
      </li>
      <li>
        적은 폭죽 자리 150 안에 도착하거나, 10초 동안 막혀 못 움직일 때까지 그쪽으로 갑니다. 폭죽이
        다 터진 뒤에도 도착할 때까지 계속 갑니다. <SourceTag src="game" />
      </li>
      <li>
        폭죽으로 가는 중인 무녀는 발소리를 듣지 못합니다. 폭죽을 던지고 뛰어서 빠져나갈 수 있습니다.
        <SourceTag src="game" />
      </li>
    </ul>

    <h2 id="lose">추격 해제</h2>
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>적</th>
            <th class="num">보통·어려움</th>
            <th class="num">쉬움</th>
            <th>규칙</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>배회자</td>
            <td class="num">10초</td>
            <td class="num">0.7초</td>
            <td>시선이 끊긴 동안만 줄어든다. 시선이 통하면 시야 밖이어도 다시 가득 찬다.</td>
          </tr>
          <tr>
            <td>도코니</td>
            <td class="num">10초</td>
            <td class="num">7초</td>
            <td>안 보이거나 숨는 곳에 있는 동안 차오르고, 보이면 0으로 돌아간다.</td>
          </tr>
          <tr>
            <td>경종의 배회자</td>
            <td class="num">15초</td>
            <td class="num">8초</td>
            <td>배회자와 같다. 물 모드 추격은 이 타이머를 쓰지 않는다.</td>
          </tr>
          <tr>
            <td>천리안</td>
            <td class="num">없음</td>
            <td class="num">없음</td>
            <td>폭죽·손거울·수정구슬·카메라·순간이동으로만 뗀다.</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="muted">
      값은 게임 파일에서 읽었습니다 <SourceTag src="pak" />. 쉬움의 배회자 0.7초는 파일 값
      그대로이고, 7초의 오타일 수도 있습니다 <SourceTag src="guess" />. 숨는 곳에서 밖을 내다보는
      동안에도 배회자 타이머는 줄어듭니다.
    </p>

    <h2 id="alert">경계</h2>
    <ul>
      <li>
        소리를 듣고 그쪽으로 걸어가는 상태가 경계입니다. 경계 중에도 걷기 속도 그대로입니다.
        <SourceTag src="pak" />
      </li>
      <li>
        적이 소리 위치를 기억해도 실제로 그쪽으로 걷지 않는 경우가 있습니다(달리는 배회자).
        <SourceTag src="game" />
      </li>
      <li>
        도코니의 두리번(경계)은 한 번 켜지면 끝난 뒤에도 켜진 채로 남고, 고정 도코니는 처음부터 켜져
        있습니다.
        <SourceTag src="game" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
useHead({ title: '감지·추격 · 그림자 복도 공략 노트' })
</script>

<style scoped>
h2 {
  scroll-margin-top: 64px;
}
</style>
