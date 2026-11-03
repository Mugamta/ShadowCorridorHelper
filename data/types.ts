// 출처: game = 게임에서 확인(배지 없음), pak = 게임 파일 분석("미확인" 배지), guess = 추정
export type Src = 'game' | 'pak' | 'guess'

export interface Fact {
  text: string
  src: Src
}

// 위에서 본 감지 범위. 적은 원점, 앞이 +forward. 거리 단위는 게임 단위(cm)
export interface SenseCapsule {
  kind: 'sight' | 'light' | 'look'
  label: string
  from: number // 앞쪽 끝까지 포함한 뒤쪽 끝
  to: number
  r: number // 좌우 반폭
}
export interface SenseCircle {
  kind: 'sound' | 'fire' | 'look' | 'sight'
  label: string
  r: number
}

export interface Enemy {
  id: string
  name: string
  group: 'wanderer' | 'other' // 배회자 / 그 밖의 적
  internal: string
  walk: string
  chase: string
  sight: string
  sprint: string
  firework: string
  lose: string
  summary: string
  facts: Fact[]
  sense?: { capsules: SenseCapsule[]; circles: SenseCircle[] }
}

// 정해진 아이템 자리 (data/fixedItems.ts)
export type FixedItem = [name: string, count: number, chance: string] // chance: '항상' | '약 31%' | '판마다 다름'
export interface FixedSpot {
  kind: string // '놓임' | '확정 선반' | '확정 서랍' | '전용 칸 선반' | '전용 칸 서랍'
  items: FixedItem[]
  where: string // 시작 지점·곡옥 제단·출구 문에서의 거리와 층. 방 타일 안이면 ''
  floor: string
  enemies: string[] // 1000 안에 나오는 배회자
  note?: string
}
export interface FixedStage {
  id: string
  title: string
  fixed: FixedSpot[] // 매 판 같은 자리
  rooms: FixedSpot[][] // 5×5 맵의 방(위치는 판마다 바뀜)마다
  starts?: FixedSpot[][] // 매미의 복도 시작 방 4가지
}
