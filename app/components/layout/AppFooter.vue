<template>
  <footer class="border-t border-slate-200 dark:border-white/5 py-12">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left">

        <div class="flex items-center justify-center md:justify-start gap-3">
          <SharedAppLogo
            class="h-10 w-10 text-primary-900 dark:text-primary-50"
          />
          <span
            class="text-2xl font-black tracking-tighter text-slate-800 dark:text-slate-100 logo-font"
          >
            Luna Marzouk
          </span>
        </div>

        <div class="flex justify-center md:justify-end gap-4">
          <UTooltip text="Follow on LinkedIn" :shortcuts="['L']">
            <UButton
              to="https://www.linkedin.com/in/luna-marzouk-61004b200/"
              target="_blank"
              icon="i-logos-linkedin-icon"
              variant="ghost"
              aria-label="LinkedIn"
            />
          </UTooltip>

          <UTooltip text="Send an Email">
            <UButton
              to="mailto:marzouk.luna@gmail.com"
              icon="i-lucide-mail"
              variant="ghost"
              aria-label="Email"
            />
          </UTooltip>

          <UTooltip text="Download Resume">
            <UButton
              to="/Luna_Marzouk_CV.pdf"
              target="_blank"
              icon="i-lucide-download"
              variant="ghost"
              aria-label="Download CV"
            />
          </UTooltip>
        </div>
      </div>

      <div class="mt-10 pt-6 border-t border-slate-200 dark:border-white/5 text-center">
        <p class="text-sm text-slate-500 dark:text-slate-400">
          © {{ new Date().getFullYear() }} Luna Marzouk. Designed & Developed with Nuxt.
        </p>
      </div>
    </UContainer>
  </footer>
</template>
