<template>
  <footer
    class="border-t border-slate-200 dark:border-white/5 py-12"
  >
    <UContainer>
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="flex items-center gap-3">
          <SharedAppLogo
            class="h-10 w-10 text-primary-900 dark:text-primary-50"
          />
          <span
            class="text-2xl font-black tracking-tighter text-slate-800 dark:text-slate-100 logo-font"
          >
            Luna Marzouk
          </span>
        </div>

        <div class="text-center md:text-right">
          <p
            class="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em]"
          >
            © {{ new Date().getFullYear() }} — Built with Passion
          </p>
        </div>
      </div>
    </UContainer>
  </footer>
</template>
