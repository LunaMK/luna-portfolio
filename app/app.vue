<script setup>
useHead({
  htmlAttrs: { lang: 'en' }
})
</script>

<template>
  <div
    id="app-loader"
    class="app-loader"
  >
    <div class="app-loader__inner">
      <SharedAppLogo
        class="app-loader__logo h-12 w-12 text-primary-900 dark:text-primary-50"
      />
      <div class="app-loader__bar">
        <span />
      </div>
    </div>
  </div>

  <UApp>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<style scoped>
.app-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-loader__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.app-loader__logo {
  filter: drop-shadow(0 4px 14px rgba(0, 0, 0, 0.15));
}

.app-loader__bar {
  width: 120px;
  height: 3px;
  border-radius: 9999px;
  overflow: hidden;
  background: rgba(92, 74, 115, 0.15);
}

.app-loader__bar span {
  display: block;
  height: 100%;
  width: 40%;
  border-radius: 9999px;
  background: linear-gradient(90deg, var(--color-brand-400), var(--color-brand-600));
  animation: app-loader-slide 1.1s ease-in-out infinite;
}

@keyframes app-loader-slide {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(320%);
  }
}
</style>
