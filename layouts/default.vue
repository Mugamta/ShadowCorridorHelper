<template>
  <div class="shell">
    <AppHeader />
    <main class="content">
      <slot />
    </main>
    <footer class="footer">
      <span>팬이 만든 비공식 정리입니다. 게임과 이름의 권리는 원작자에게 있습니다.</span>
      <span>
        표시가 없는 내용은 게임에서 확인했습니다.
        <SourceTag src="pak" /> 플레이로 아직 확인 안 함 <SourceTag src="guess" /> 추정
      </span>
    </footer>
  </div>
</template>

<style scoped>
.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
}
.footer {
  border-top: 1px solid var(--line);
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text-3);
  text-align: center;
}
</style>
