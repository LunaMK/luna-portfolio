<template>
  <section
    id="contact"
    class="py-24 border-t border-slate-200 dark:border-white/5 relative overflow-hidden bg-linear-to-tl to-brand-bg from-white dark:from-brand-950 dark:to-slate-900"
  >
    <div
      class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-500/5 via-transparent to-transparent pointer-events-none"
    ></div>

    <UContainer class="relative z-10 text-center">
      <div class="mb-16">
        <h2
          class="text-4xl md:text-6xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tighter mb-4"
        >
          Let's <span class="text-primary-500 italic">Work Together</span>
        </h2>
        <p
          class="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Available for new opportunities and collaborations. If you need a
          Flutter mobile application, a web platform, or support with an
          existing project, feel free to reach out.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-4 mb-20">
        <UButton
          to="mailto:marzouk.luna@gmail.com"
          size="xl"
          color="primary"
          class="rounded-2xl px-8 py-4 font-black uppercase tracking-widest shadow-xl shadow-primary-500/20 hover:-translate-y-1 transition-transform"
        >
          <template #leading>
            <UIcon name="i-lucide-mail" class="w-5 h-5" />
          </template>
          Contact Me
        </UButton>

        <UButton
          to="https://linkedin.com/in/luna-marzouk-61004b200/"
          target="_blank"
          size="xl"
          variant="soft"
          color="slate"
          class="rounded-2xl px-8 py-4 font-black uppercase tracking-widest hover:-translate-y-1 transition-transform"
        >
          <template #leading>
            <UIcon name="i-lucide-linkedin" class="w-5 h-5" />
          </template>
          LinkedIn Profile
        </UButton>
      </div>
    </UContainer>
  </section>
</template>
