# CLAUDE.md

그림자 복도(Shadow Corridor 1) 게임 정보 정리 정적 사이트. 배회자 이동 속도, 감지 거리, 추격 규칙, 맵 기믹을 보여 준다.
GitHub Pages(`https://mugamta.github.io/ShadowCorridorHelper/`)로 배포한다. 사용자는 한국어로 대답받기를 원한다.

## 내용의 출처
- 원본은 `C:\Users\tjwlg\Desktop\organization\Game\shadow corridor\CLAUDE.md`의 "게임 지식"과 "현재 상태"다. 실시간 지도 모드(SCMap)를 만들면서 게임 파일(pak)과 플레이 기록으로 알아낸 것이다.
- 이 사이트에는 **게임 정보만** 옮긴다. 모드 내부 구현(UE4SS, 크래시, 캐시, 뷰어 기능)은 넣지 않는다.
- 모든 사실에 출처 배지(`<SourceTag src>`)를 붙인다: `game` 게임에서 확인, `pak` 게임 파일에서 읽음(플레이로 확인 안 함), `guess` 추정. 원본에서 "게임에서 아직 확인하지 않았다"인 것은 `pak`이다. 확인되면 `game`으로 올린다.
- 원본에서 이름을 바꾸지 말라고 한 것(EnemyTipe 2·3·5 등)은 추정으로 둔다.

## 스택 / 명령어
- Nuxt 4 + Vue 3, `nuxt generate`로 페이지마다 HTML을 미리 만든다(SSR 켜짐, 검색에 잡히게). UI 라이브러리 없이 `assets/css/main.css`의 색 토큰을 쓴다(밤 기본, 낮 테마).
- `srcDir` = 레포 루트(`app/` 폴더를 만들지 않는다).
- `npm run dev` / `npm run generate` / `npm run typecheck` / `npm run format`
- 배포: `main` push → GitHub Actions(`nuxt generate --preset github_pages`, base `/ShadowCorridorHelper/`). 저장소 Settings → Pages → Source를 "GitHub Actions"로 해야 한다.
- Windows Git Bash에서 base URL로 빌드할 때는 `MSYS_NO_PATHCONV=1`이 필요하다(옆 PokemonChampionsHelper에서 겪음).

## 구조
- `data/enemies.ts` — 적 표와 상세(속도, 감지 범위 그림 값, 사실 목록). 홈의 요약 표와 적 페이지가 같이 쓴다.
- `components/SenseDiagram.vue` — 위에서 본 감지 범위 SVG. 캡슐 값은 "앞쪽 끝까지 포함한 범위"(`from`~`to`, 좌우 `r`)다.
- 나머지 페이지(`detection`, `player`, `maps`)는 글을 템플릿에 바로 쓴다.

## 규칙
- 거리·속도는 게임 단위(cm, 100 = 1m) 그대로 쓴다.
- 코드 스타일: Prettier(2칸, 세미콜론 없음, 작은따옴표, printWidth 100). `*.md`는 대상 아님. 한국어 주석.
- 커밋·push는 사용자가 요청할 때만. 메시지는 한국어.
