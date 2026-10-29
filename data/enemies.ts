import type { Enemy, SenseCapsule, SenseCircle } from './types'

// ── 공통 감지 범위 ───────────────────────────── (게임 단위 = cm)
// 배회자(EG_EnemyPawn): VewTrigger 캡슐 반지름 300·반높이 450·앞 368, 피치 90°로 눕힘
const WANDERER_SIGHT: SenseCapsule = { kind: 'sight', label: '시야', from: -82, to: 818, r: 300 }
// LightTrigger 캡슐 반지름 800·반높이 1000·앞 636
const WANDERER_LIGHT: SenseCapsule = {
  kind: 'light',
  label: '불 켰을 때 시야',
  from: -364,
  to: 1636,
  r: 800,
}

function wander(sprint: number | null): { capsules: SenseCapsule[]; circles: SenseCircle[] } {
  const circles: SenseCircle[] = [{ kind: 'fire', label: '폭죽 3000', r: 3000 }]
  if (sprint) circles.unshift({ kind: 'sound', label: `달리기 소리 ${sprint}`, r: sprint })
  return { capsules: [WANDERER_SIGHT, WANDERER_LIGHT], circles }
}

export const ENEMIES: Enemy[] = [
  {
    id: 'kagura',
    name: '카구라 방울의 배회자',
    nick: '무녀',
    internal: 'EG_EnemyPawn_C · EnemyTipe 0',
    walk: '100',
    chase: '270',
    sight: '앞 818 · 불 켜면 1636',
    sprint: '2300',
    firework: '3000',
    lose: '10초',
    summary:
      '가장 기본이 되는 배회자. 방울 소리를 내며 순찰하고, 발소리와 폭죽 소리를 벽 너머로도 듣는다.',
    sense: wander(2300),
    facts: [
      {
        text: '배회·경계·시야 안일 때는 걷기 속도(100), 추격 중에만 270으로 달린다. 소리를 듣고 가는 중이라고 빨라지지는 않는다.',
        src: 'pak',
      },
      {
        text: '달리기 소리는 적 위치에서 3D 거리 2300 안이면 들린다. 벽이나 시선은 보지 않는다. 지도상 멀리 있던 무녀가 뛰는 소리를 듣고 찾아온 적이 있다.',
        src: 'game',
      },
      { text: '폭죽에 끌려 가는 중인 무녀는 발소리를 듣지 못한다.', src: 'game' },
      { text: '쉬움 난이도에서는 추격 속도가 ×0.7(189)이다.', src: 'pak' },
    ],
  },
  {
    id: 'runner',
    name: '달리는 배회자',
    nick: '달배',
    internal: 'EG_EnemyPawn_C · EnemyTipe 1',
    walk: '300',
    chase: '270',
    sight: '앞 818 · 불 켜면 1636',
    sprint: '무시',
    firework: '3000',
    lose: '10초',
    summary: '평소에 달려 다니는 배회자. 배회 속도(300)가 추격 속도(270)보다 빠르다.',
    sense: wander(null),
    facts: [
      {
        text: '배회 속도 300이 추격 속도 270보다 빠르다. 발견된 뒤가 오히려 조금 느리다.',
        src: 'pak',
      },
      {
        text: '달리기 소리를 찾아오지 않는다. 내부적으로는 소리 위치가 기록되지만 그쪽으로 걷지 않는다.',
        src: 'game',
      },
      { text: '폭죽에는 반응한다.', src: 'pak' },
    ],
  },
  {
    id: 'shinobi',
    name: '살며시 다가오는 배회자',
    nick: '거미',
    internal: 'EG_EnemyPawn_C · EnemyTipe 4',
    walk: '85',
    chase: '270',
    sight: '앞 818 · 불 켜면 1636',
    sprint: '2300',
    firework: '3000',
    lose: '10초',
    summary: '아주 느리게 다가오는 배회자. 별명 "거미"는 큰 거미와는 다른 적이다.',
    sense: wander(2300),
    facts: [
      {
        text: '배회 속도 85로 플레이어가 걷는 속도(130)보다 느리다. 추격은 다른 배회자와 같은 270이다.',
        src: 'pak',
      },
    ],
  },
  {
    id: 'senrigan',
    name: '천리안',
    internal: 'EG_EnemyPawn_C · EnemyTipe 6',
    walk: '70',
    chase: '270',
    sight: '앞 818 · 불 켜면 1636',
    sprint: '1800 (달리기 무관)',
    firework: '3000',
    lose: '없음',
    summary: '가장 느리지만, 1800 안에 들어오면 달리든 아니든 벽 너머에서도 따라온다.',
    sense: {
      capsules: [WANDERER_SIGHT, WANDERER_LIGHT],
      circles: [
        { kind: 'look', label: '거리만 봄 1800', r: 1800 },
        { kind: 'fire', label: '폭죽 3000', r: 3000 },
      ],
    },
    facts: [
      {
        text: '발소리 감지 규칙이 다른 배회자와 다르다. 플레이어가 뛰는지 보지 않고, 3D 거리 1800 안이면 위치를 알고 따라온다. 벽도 상관없다.',
        src: 'pak',
      },
      {
        text: '범위에 들어가고 약 0.5초 뒤에 따라오기 시작한다(행동 트리의 0.5초 대기와 맞음).',
        src: 'game',
      },
      {
        text: '한 번 따라오기 시작하면 거리와 상관없이 계속 따라온다. 폭죽, 손거울, 수정구슬, 카메라, 순간이동으로만 떼어 낼 수 있다.',
        src: 'game',
      },
      {
        text: '이 추적은 "발견(추격)" 플래그를 켜지 않는다. 그래서 다른 배회자 같은 추격 해제 타이머가 없다.',
        src: 'pak',
      },
    ],
  },
  {
    id: 'dokoni',
    name: '도코니',
    internal: 'EG_WichPawn_C',
    walk: '25',
    chase: '300',
    sight: '앞 737',
    sprint: '듣지 않음',
    firework: '1200',
    lose: '10초',
    summary:
      '제자리에 있는 고정형과 천천히 순찰하는 배회형이 있다. 배회자와 달리 앉기가 아주 중요하다.',
    sense: {
      capsules: [{ kind: 'sight', label: '시야', from: -73, to: 737, r: 253 }],
      circles: [
        { kind: 'look', label: '두리번 600', r: 600 },
        { kind: 'fire', label: '폭죽 1200', r: 1200 },
      ],
    },
    facts: [
      {
        text: '반지름 600 구 안에 플레이어가 있고 숨지 않았으면, 서 있거나 움직일 때 두리번거리기 시작한다. 앉아서 가만히 있으면 두리번이 꺼진다.',
        src: 'pak',
      },
      { text: '바로 뒤에 서 있었더니 두리번거렸다. 600 구는 방향과 상관없다.', src: 'game' },
      {
        text: '두리번거리는 동안 시야 캡슐 안에서 시선이 열려 있으면 3초 뒤 추격한다.',
        src: 'pak',
      },
      {
        text: '두리번 범위는 구라서 위층 도코니가 바로 아래층의 플레이어를 알아챈다(높이 차 374에서 경계함).',
        src: 'game',
      },
      {
        text: '시야 캡슐은 몸통 방향만 따른다. 머리를 돌리는 애니메이션과는 상관없다.',
        src: 'pak',
      },
      {
        text: '600 안에서 라이터를 들고 켰는데 시야 안이면서 두리번 중이거나, 손전등으로 도코니를 직접 비추면 두리번을 시작한다.',
        src: 'pak',
      },
      { text: '발소리를 듣는 규칙이 없다. 폭죽은 1200 안에서만 듣는다.', src: 'pak' },
      {
        text: '추격 해제는 안 보이는(또는 숨는 곳에 있는) 동안 0에서 10초까지 차오르고, 보이면 다시 0이 된다. 쉬움은 7초.',
        src: 'pak',
      },
      { text: '추격 속도는 300이고 쉬움에서 ×0.7이다.', src: 'pak' },
    ],
  },
  {
    id: 'screamer',
    name: '경종의 배회자',
    internal: 'BP_Screamer_C',
    walk: '40 / 물 300',
    chase: '120 / 물 300',
    sight: '앞 768 · 불 켜면 1721',
    sprint: '1500',
    firework: '3000',
    lose: '15초',
    summary: '제등을 든 야경꾼 모드와 물 모드가 있는 적. 두 모드의 속도가 크게 다르다.',
    sense: {
      capsules: [
        { kind: 'sight', label: '시야', from: -132, to: 768, r: 300 },
        { kind: 'light', label: '불 켰을 때 시야', from: -279, to: 1721, r: 800 },
      ],
      circles: [
        { kind: 'sound', label: '달리기 소리 1500', r: 1500 },
        { kind: 'look', label: '물 모드 시야 1600', r: 1600 },
        { kind: 'fire', label: '폭죽 3000', r: 3000 },
      ],
    },
    facts: [
      {
        text: '야경꾼(제등) 모드는 배회 40, 추격 120. 물 모드는 300이다. 난이도 배수는 없다.',
        src: 'pak',
      },
      { text: '물 모드에서는 시야가 반지름 1600 구다.', src: 'pak' },
      { text: '폭죽과 발소리를 듣고 경계하는 것을 확인했다.', src: 'game' },
      { text: '추격 해제 15초(쉬움 8초). 물 모드 추격은 이 타이머를 쓰지 않는다.', src: 'pak' },
    ],
  },
  {
    id: 'shadow',
    name: '살기',
    internal: 'BP_MothersShadow_C',
    walk: '160 / 계곡 240',
    chase: '같음',
    sight: '쳐다보면 피해',
    sprint: '-',
    firework: '-',
    lose: '-',
    summary:
      '곡옥을 일정 수 모으면 나타나 끝까지 쫓아오는 적. 닿으면 즉사하고, 쳐다보면 체력이 깎인다.',
    facts: [
      {
        text: '속도는 맵과 난이도로만 정해진다. 5×5 곡옥 맵은 160, 시체가 흐르는 계곡은 쉬움 140, 보통·어려움 240.',
        src: 'pak',
      },
      {
        text: '멀어지면 달린다는 코드가 있지만 그걸 부르는 곳이 없어서 실제로는 달리지 않는다. 계곡에서 26초 동안 거리 1000~3000을 기록해 보니 거리와 상관없이 약 240으로 일정했다.',
        src: 'game',
      },
      {
        text: '반지름 100 안에 닿으면 즉사. 수정구슬로 시간을 멈춘 동안이나 기절 중에는 죽지 않는다.',
        src: 'pak',
      },
      {
        text: '시선이 통하고 화면이 살기 쪽을 향하면 지속 피해(8)와 비명이 시작된다. 안 보면 멈춘다.',
        src: 'pak',
      },
      { text: '카메라로 25초 기절(계곡 쉬움은 35초).', src: 'pak' },
      {
        text: '숨는 곳에 있으면 그 자리로 와서 문을 부순다. 문은 닿기만 해도 부수고 지나간다. 벽은 못 지나간다(길 찾기로 이동).',
        src: 'pak',
      },
      { text: '출구를 확인하면 사라지고, 일반 적이 다시 배치된다.', src: 'pak' },
    ],
  },
  {
    id: 'ghost',
    name: '떠도는 영혼',
    internal: 'BP_Ghost_C',
    walk: '200',
    chase: '200',
    sight: '보면 다가옴',
    sprint: '-',
    firework: '-',
    lose: '-',
    summary:
      '순찰 지점 사이를 떠다니다 플레이어를 보면 다가온다. 카메라로 없앨 수 있고, 약 3분 뒤 제단에서 다시 생긴다.',
    facts: [
      {
        text: '플레이어를 보면 원래 가던 순찰 지점은 그대로 둔 채 플레이어에게 온다.',
        src: 'game',
      },
      { text: '카메라로 찍으면 사라진다.', src: 'game' },
      {
        text: '찍은 지 약 3분(180초) 뒤 제단 자리에서 새 영혼이 생긴다. 시간은 게임 시간이라 일시 정지 중에는 멈춘다. 맵의 영혼 수는 유지된다.',
        src: 'game',
      },
      { text: '수정구슬로 시간을 멈추면 속도가 0이 된다.', src: 'pak' },
    ],
  },
  {
    id: 'kokuchu',
    name: '흑충',
    internal: 'BP_DamageFloorBody_C',
    walk: '-',
    chase: '-',
    sight: '-',
    sprint: '-',
    firework: '반응',
    lose: '-',
    summary: '바닥에 깔린 지렁이 무리. 밟으면 피해를 입는다.',
    facts: [
      {
        text: '움직이지 않는 바닥 함정이다. 지렁이 3마리와 피해 판정(피해 2)으로 되어 있다.',
        src: 'pak',
      },
      { text: '맵에 미리 놓인 것이 아니라 플레이 중에 생긴다.', src: 'game' },
      { text: '폭죽이나 카메라로 쫓아낼 수 있다.', src: 'pak' },
    ],
  },
]

// 자세한 분석이 없는 적
export const MINOR_ENEMIES: { name: string; internal: string; speed: string; note: string }[] = [
  { name: '가면 벌레', internal: 'BP_Bug_Fly_C', speed: '330', note: '' },
  { name: '대식가', internal: 'BP_Throughter_C', speed: '600', note: '' },
  { name: '방대해진 증오', internal: 'BP_Zouo_C', speed: '200', note: '' },
  { name: '그림자 손', internal: 'BP_Zouo_ShadowHand_C', speed: '-', note: '증오에 딸린 적' },
  {
    name: '큰 거미',
    internal: 'BP_Spider_C',
    speed: '-',
    note: '함정 서랍을 열면 20마리가 풀려난다',
  },
]
