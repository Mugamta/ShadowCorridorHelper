export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: '그림자 복도 공략 노트',
      htmlAttrs: { lang: 'ko' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            '그림자 복도(Shadow Corridor) 배회자 이동 속도, 감지 거리, 추격 규칙, 맵 기믹 정리',
        },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&family=Noto+Serif+KR:wght@600;700&display=swap',
        },
      ],
      // 저장된 테마를 첫 그리기 전에 적용 (깜빡임 방지, components/AppHeader.vue 의 토글과 같은 키)
      script: [
        {
          innerHTML:
            "try{var t=localStorage.getItem('sc-theme');if(t)document.documentElement.dataset.theme=t}catch(e){}",
        },
      ],
    },
  },

  nitro: {
    preset: 'github_pages',
  },
})
