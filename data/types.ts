// 출처: game = 게임에서 확인, pak = 게임 파일 분석, guess = 추정
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
  kind: 'sound' | 'fire' | 'look'
  label: string
  r: number
}

export interface Enemy {
  id: string
  name: string
  nick?: string
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
