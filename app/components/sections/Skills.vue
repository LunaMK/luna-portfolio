<template>
  <section id="skills" class="py-24">
    <UContainer>
      <div class="mb-20">
        <h2
          class="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tighter"
        >
          Technical <span class="text-primary-500 italic">Skills</span>
        </h2>
        <div
          class="mt-2 h-2 w-32 bg-primary-500 underline decoration-wavy opacity-80"
        ></div>
        <p
          class="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-6 font-medium leading-relaxed max-w-2xl"
        >
          A versatile skill set covering mobile, web, and backend development,
          with a strong foundation in software engineering and problem-solving.
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <div
          class="group p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 hover:border-primary-500/30 transition-all duration-500"
        >
          <div class="flex items-center gap-4 mb-8">
            <div
              class="p-3 rounded-2xl bg-primary-500/10 text-primary-500 group-hover:scale-110 transition-transform"
            >
              <UIcon name="i-lucide-layout" class="w-6 h-6" />
            </div>
            <h3
              class="font-black uppercase tracking-widest text-slate-800 dark:text-slate-100"
            >
              Mobile & Frontend
            </h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="s in [
                'Flutter',
                'GetX',
                'Nuxt.js',
                'Vue.js',
                'HTML/CSS',
                'JS',
              ]"
              :key="s"
              variant="subtle"
              class="rounded-xl font-bold px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-colors cursor-default"
            >
              {{ s }}
            </UBadge>
          </div>
        </div>

        <div
          class="group p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 hover:border-primary-500/30 transition-all duration-500"
        >
          <div class="flex items-center gap-4 mb-8">
            <div
              class="p-3 rounded-2xl bg-primary-500/10 text-primary-500 group-hover:scale-110 transition-transform"
            >
              <UIcon name="i-lucide-database" class="w-6 h-6" />
            </div>
            <h3
              class="font-black uppercase tracking-widest text-slate-800 dark:text-slate-100"
            >
              Backend & DB
            </h3>
          </div>
          <div class="flex flex-wrap gap-2 text-left">
            <UBadge
              v-for="s in [
                'Laravel',
                'Flask',
                'MySQL',
                'Firebase',
                'REST API',
                'GraphQL',
              ]"
              :key="s"
              variant="subtle"
              class="rounded-xl font-bold px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-colors cursor-default"
            >
              {{ s }}
            </UBadge>
          </div>
        </div>

        <div
          class="group p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 hover:border-primary-500/30 transition-all duration-500"
        >
          <div class="flex items-center gap-4 mb-8">
            <div
              class="p-3 rounded-2xl bg-primary-500/10 text-primary-500 group-hover:scale-110 transition-transform"
            >
              <UIcon name="i-lucide-brain-circuit" class="w-6 h-6" />
            </div>
            <h3
              class="font-black uppercase tracking-widest text-slate-800 dark:text-slate-100"
            >
              AI & Design
            </h3>
          </div>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="s in [
                'Machine Learning',
                'NLP',
                'System Design',
                'Patterns',
              ]"
              :key="s"
              variant="subtle"
              class="rounded-xl font-bold px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-colors cursor-default"
            >
              {{ s }}
            </UBadge>
          </div>
        </div>

        <div
          class="md:col-span-2 lg:col-span-1 p-8 rounded-[2.5rem] border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40"
        >
          <div class="flex items-center gap-4 mb-8">
            <div
              class="p-3 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              <UIcon name="i-lucide-terminal" class="w-6 h-6" />
            </div>
            <h3
              class="font-black uppercase tracking-widest text-slate-800 dark:text-slate-100"
            >
              Languages
            </h3>
          </div>
          <div class="grid grid-cols-3 gap-3">
            <UBadge
              v-for="s in ['Python', 'PHP', 'Java', 'C++', 'C#', 'SQL']"
              :key="s"
              variant="subtle"
              class="rounded-xl font-bold px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-primary-500 hover:text-white transition-colors cursor-default"
            >
              {{ s }}
            </UBadge>
          </div>
        </div>

        <div
          class="lg:col-span-2 p-10 rounded-[2.5rem] border border-primary-500/15 bg-linear-to-br from-primary-500/6 via-transparent to-primary-600/12 backdrop-blur-md flex flex-col md:flex-row gap-12 group/wide relative overflow-hidden"
        >
          <div
            class="absolute -right-10 -top-10 w-48 h-48 bg-primary-500/15 blur-[80px] pointer-events-none"
          ></div>
          <div
            class="absolute -left-10 -bottom-10 w-48 h-48 bg-primary-600/10 blur-[80px] pointer-events-none"
          ></div>

          <div class="flex-1 space-y-10 relative z-10">
            <div class="flex items-center gap-4">
              <div
                class="p-3 rounded-2xl bg-linear-to-tr from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
              >
                <UIcon name="i-lucide-wrench" class="w-5 h-5" />
              </div>
              <h4
                class="text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-500"
              >
                Tools & Ecosystem
              </h4>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6">
              <div
                v-for="t in ['Git', 'GitLab', 'cPanel', 'Shopify', 'Figma']"
                :key="t"
                class="flex items-center gap-3 group/tool cursor-default"
              >
                <div
                  class="w-1.5 h-1.5 rounded-full bg-primary-500/40 group-hover/tool:bg-primary-500 group-hover/tool:scale-150 transition-all duration-300"
                ></div>
                <span
                  class="text-sm font-bold text-slate-600 dark:text-slate-400 group-hover/tool:text-primary-600 dark:group-hover/tool:text-primary-400 transition-colors"
                >
                  {{ t }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="hidden md:block w-px bg-linear-to-b from-transparent via-primary-500/20 to-transparent self-stretch"
          ></div>

          <div class="flex-1 space-y-10 relative z-10">
            <div class="flex items-center gap-4">
              <div
                class="p-3 rounded-2xl bg-linear-to-tr from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
              >
                <UIcon name="i-lucide-sparkles" class="w-5 h-5" />
              </div>
              <h4
            class="text-[11px] font-black uppercase tracking-widest text-slate-600 dark:text-slate-500"
              >
                Core Strengths
              </h4>
            </div>

            <div class="space-y-8">
              <div
                v-for="skill in [
                  {
                    name: 'Team Collaboration',
                    level: 'w-[85%]',
                    color: 'from-primary-500 to-primary-400',
                  },
                  {
                    name: 'Fast Learner',
                    level: 'w-[92%]',
                    color: 'from-primary-600 to-primary-500',
                  },
                  {
                    name: 'Pressure Management',
                    level: 'w-[88%]',
                    color: 'from-primary-500 to-primary-400',
                  },
                ]"
                :key="skill.name"
                class="group/skill"
              >
                <div class="flex justify-between items-center mb-3">
                  <span
                    class="text-sm font-extrabold text-slate-700 dark:text-slate-200 group-hover/skill:text-primary-500 transition-colors tracking-tight"
                  >
                    {{ skill.name }}
                  </span>
                  <span
                    class="text-[10px] font-black text-primary-500/60 tabular-nums uppercase tracking-widest"
                  >
                    {{ skill.level.replace("w-[", "").replace("]", "") }}
                  </span>
                </div>

                <div
                  class="h-2 w-full bg-slate-200/40 dark:bg-slate-800/60 rounded-full overflow-hidden"
                >
                  <div
                    :class="[skill.level, skill.color]"
                    class="h-full bg-linear-to-r rounded-full transition-all duration-1500 ease-out shadow-[0_0_12px_rgba(var(--color-primary-500),0.3)]"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
