<template>
  <section id="experience" class="py-24 overflow-x-hidden">
    <UContainer>
      <div class="mb-16">
        <h2
          class="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tighter"
        >
          Experience
        </h2>
        <div
          class="mt-2 h-2 w-32 bg-primary-500 underline decoration-wavy opacity-80"
        ></div>
        <p
          class="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-4 font-medium leading-relaxed"
        >
          Developing scalable web and mobile applications through clean code and
          thoughtful design.
        </p>
      </div>

      <div
        class="relative space-y-10 before:absolute before:inset-0 before:left-4 md:before:left-6 before:-translate-x-px before:h-full before:w-1 before:bg-linear-to-b before:from-primary-500 before:via-slate-200 dark:before:via-slate-800 before:to-transparent"
      >
        <div class="relative pl-10 md:pl-16 group">
          <div
            class="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary-500 flex items-center justify-center z-10 shadow-2xl transition-transform group-hover:scale-110"
          >
            <UIcon
              name="i-lucide-layers"
              class="w-4 h-4 md:w-6 md:h-6 text-white"
            />
          </div>

          <div
            class="w-full border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-700/30 p-6 md:p-8 rounded-[1.5rem] md:rounded-4xl transition-all duration-500 hover:border-primary-500/20"
          >
            <div
              class="flex flex-col md:flex-row justify-between items-start gap-4 mb-8"
            >
              <div>
                <h3
                  class="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-50 uppercase tracking-tight"
                >
                  Software Developer
                </h3>
                <div class="flex flex-wrap items-center gap-2 mt-2">
                  <span
                    class="text-lg font-bold text-primary-500 dark:text-primary-200"
                    >Spacetoon</span
                  >
                  <span
                    class="hidden md:inline text-slate-300 dark:text-slate-700"
                    >|</span
                  >
                  <span
                    class="text-[10px] md:text-sm font-mono text-slate-400 uppercase tracking-widest"
                    >+500 Employees</span
                  >
                </div>
              </div>
              <UBadge
                size="lg"
                color="primary"
                variant="subtle"
                class="px-3 py-1.5 md:px-4 md:py-2 rounded-xl border border-primary-500/20 uppercase tracking-widest text-[10px] md:text-xs"
              >
                2021 — PRESENT
              </UBadge>
            </div>

            <div class="flex flex-col gap-y-6">
              <div class="flex gap-4">
                <div
                  class="mt-1 w-6 h-6 shrink-0 rounded-lg bg-primary-500/10 flex items-center justify-center"
                >
                  <UIcon
                    name="i-lucide-smartphone"
                    class="w-4 h-4 text-primary-500 dark:text-primary-400"
                  />
                </div>
                <p
                  class="text-slate-700 dark:text-slate-300 text-sm md:text-[15px] leading-relaxed"
                >
                  Developing and maintaining cross-platform mobile applications
                  using <strong>Flutter</strong>, with a focus on performance,
                  usability, and clean architecture.
                </p>
              </div>
              <div class="flex gap-4">
                <div
                  class="mt-1 w-6 h-6 shrink-0 rounded-lg bg-purple-500/10 flex items-center justify-center"
                >
                  <UIcon
                    name="i-lucide-globe"
                    class="w-4 h-4 text-purple-600"
                  />
                </div>
                <p
                  class="text-slate-700 dark:text-slate-300 text-sm md:text-[15px] leading-relaxed"
                >
                  Developing responsive and user-friendly web interfaces using
                  <strong>Nuxt.js</strong>, contributing primarily to front-end
                  features of internal and public-facing applications.
                </p>
              </div>

              <div class="flex gap-4">
                <div
                  class="mt-1 w-6 h-6 shrink-0 rounded-lg bg-emerald-500/10 flex items-center justify-center"
                >
                  <UIcon
                    name="i-lucide-server"
                    class="w-4 h-4 text-emerald-600"
                  />
                </div>
                <p
                  class="text-slate-700 dark:text-slate-300 text-sm md:text-[15px] leading-relaxed"
                >
                  Contributing to backend development using
                  <strong>Laravel</strong>, including features for internal
                  systems such as the Mini ERP platform.
                </p>
              </div>

              <div class="flex gap-4">
                <div
                  class="mt-1 w-6 h-6 shrink-0 rounded-lg bg-blue-500/10 flex items-center justify-center"
                >
                  <UIcon
                    name="i-lucide-database"
                    class="w-4 h-4 text-blue-600"
                  />
                </div>
                <p
                  class="text-slate-700 dark:text-slate-300 text-sm md:text-[15px] leading-relaxed"
                >
                  Integrating <strong>RESTful APIs</strong> and supporting
                  <strong>GraphQL</strong> services to enable seamless
                  communication between web and mobile applications.
                </p>
              </div>
            </div>

            <div
              class="mt-10 pt-6 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2 md:gap-3"
            >
              <span
                v-for="t in [
                  'Flutter',
                  'Laravel',
                  'MySQL',
                  'GraphQL',
                  'REST API',
                  'Nuxt.js',
                  'GitLab',
                ]"
                :key="t"
                class="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] md:text-[12px] uppercase tracking-widest text-slate-600 dark:text-slate-300 font-bold"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>

        <div class="relative pl-10 md:pl-16 group">
          <div
            class="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center z-10 border border-slate-200 dark:border-slate-700"
          >
            <UIcon
              name="i-lucide-terminal"
              class="w-4 h-4 md:w-6 md:h-6 text-slate-500"
            />
          </div>

          <div
            class="w-full border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-slate-900/20 p-6 md:p-8 rounded-[1.5rem] md:rounded-4xl transition-all duration-500 hover:border-primary-500/20"
          >
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
            >
              <h3
                class="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-50 uppercase tracking-tight"
              >
                Freelance Developer
              </h3>
              <span
                class="text-[10px] md:text-sm font-mono text-slate-400 tracking-[0.2em] font-bold"
                >2023 — PRESENT</span
              >
            </div>
            <p
              class="text-slate-700 dark:text-slate-400 text-sm md:text-[15px] leading-relaxed max-w-4xl mb-8"
            >
              Delivered several freelance projects, developing mobile
              applications with <strong>Flutter</strong> and web applications
              using <strong>Nuxt.js</strong>, with full REST API integration.
            </p>
            <div class="flex flex-wrap gap-2 md:gap-3">
              <span
                v-for="t in [
                  'Flutter',
                  'GetX',
                  'Firebase',
                  'Nuxt.js',
                  'TypeScript',
                ]"
                :key="t"
                class="px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-primary-500/10 text-primary-600 dark:text-primary-400 text-[10px] md:text-[12px] uppercase tracking-widest border border-primary-500/20 font-bold"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
