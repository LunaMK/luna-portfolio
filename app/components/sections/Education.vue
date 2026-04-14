<template>
  <section id="education" class="py-24">
    <UContainer>
      <div class="mb-16">
        <h2
          class="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tighter"
        >
          Academic & <span class="text-primary-500">Achievements</span>
        </h2>
        <div
          class="mt-2 h-2 w-32 bg-primary-500 underline decoration-wavy opacity-80"
        ></div>
      </div>

      <div
        class="relative space-y-12 before:absolute before:inset-0 before:left-4 md:before:left-6 before:-translate-x-px before:h-full before:w-1 before:bg-linear-to-b before:from-primary-500 before:via-slate-200 dark:before:via-slate-800 before:to-transparent"
      >
        <div class="relative pl-10 md:pl-16 group">
          <div
            class="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 rounded-xl bg-primary-500 flex items-center justify-center z-10 shadow-lg transition-transform group-hover:scale-110"
          >
            <UIcon
              name="i-lucide-graduation-cap"
              class="w-4 h-4 md:w-6 md:h-6 text-white"
            />
          </div>
          <div
            class="w-full border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-700/30 p-6 md:p-8 rounded-[1.5rem] md:rounded-4xl transition-all duration-500 hover:border-primary-500/20"
          >
            <div
              class="flex flex-col md:flex-row justify-between items-start gap-4 mb-6"
            >
              <div>
                <h3
                  class="text-xl md:text-2xl font-black text-slate-800 dark:text-slate-50 uppercase tracking-tight"
                >
                  Bachelor of Information Technology Engineering
                </h3>
                <p
                  class="text-lg font-bold text-primary-500 dark:text-primary-200"
                >
                  Specialization in Artificial Intelligence
                </p>
                <p class="text-slate-500 dark:text-slate-400 font-medium mt-1">
                  Arab International University (AIU)
                </p>
              </div>
              <div class="text-right flex flex-col items-end">
                <UBadge
                  size="lg"
                  color="primary"
                  variant="subtle"
                  class="rounded-xl uppercase tracking-widest px-4 py-2"
                >
                  GPA: 3.43 / 4.00 <br />
                  Graduated with Honors
                </UBadge>
                <span
                  class="text-[10px] md:text-xs font-mono text-slate-400 mt-2 uppercase tracking-widest font-bold"
                  >10/2016 — 08/2021</span
                >
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 relative overflow-hidden group/project"
              >
                <div
                  class="absolute top-0 right-0 p-2 opacity-10 group-hover/project:opacity-30 transition-opacity"
                >
                  <UIcon name="i-lucide-award" class="w-12 h-12" />
                </div>
                <span
                  class="text-[10px] font-black uppercase tracking-[0.2em] text-primary-500"
                  >Senior Project</span
                >
                <h4
                  class="text-lg font-bold text-slate-800 dark:text-slate-200 mt-1 uppercase italic"
                >
                  Arabic Talking Head
                </h4>
                <p
                  class="text-sm md:text-[15px] text-slate-600 dark:text-slate-400 mt-2 leading-relaxed"
                >
                  Developed an AI-powered virtual companion capable of
                  interacting in Arabic, integrating speech recognition,
                  NLP-based chatbot functionality, and text-to-speech
                  technologies. Built using
                  <strong>Python, Flutter, Flask,</strong> and
                  <strong>Firebase</strong>.
                </p>
              </div>

              <div
                class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
              >
                <span
                  class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"
                  >Junior Project</span
                >
                <h4
                  class="text-lg font-bold text-slate-800 dark:text-slate-200 mt-1"
                >
                  Smart Chatbot
                </h4>
                <p
                  class="text-sm md:text-[15px] text-slate-600 dark:text-slate-400 mt-2 leading-relaxed"
                >
                  Developed an intelligent chatbot designed to assist Ubuntu
                  users and support HR recruitment processes. Implemented using
                  <strong>Python</strong>, <strong>Android</strong>, and
                  <strong>Django REST</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative pl-10 md:pl-16 group">
          <div
            class="absolute left-0 top-0 w-8 h-8 md:w-12 md:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center z-10 border border-slate-200 dark:border-slate-700"
          >
            <UIcon
              name="i-lucide-code-2"
              class="w-4 h-4 md:w-6 md:h-6 text-slate-500"
            />
          </div>
          <div
            class="w-full border border-slate-200 dark:border-white/10 bg-white/40 dark:bg-slate-900/20 p-6 md:p-8 rounded-[1.5rem] md:rounded-4xl transition-all duration-500 hover:border-primary-500/20"
          >
            <h3
              class="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 uppercase tracking-tight mb-6"
            >
              ACM International Collegiate Programming Contest (ICPC)
            </h3>

            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div
                  class="h-10 w-10 shrink-0 rounded-lg bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20"
                >
                  <UIcon name="i-lucide-zap" class="text-yellow-600 w-5 h-5" />
                </div>
                <div>
                  <p
                    class="text-sm md:text-base text-slate-700 dark:text-slate-300 font-bold"
                  >
                    PSCPC: "Extreme" Achievement
                  </p>
                  <p class="text-sm md:text-[15px] text-slate-500">
                    Recognized for being the first team to successfully solve a
                    problem during the Private Syrian Collegiate Programming
                    Contest.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div
                  class="h-10 w-10 shrink-0 rounded-lg bg-primary-500/10 flex items-center justify-center border border-primary-500/20"
                >
                  <UIcon
                    name="i-lucide-trophy"
                    class="text-primary-600 w-5 h-5"
                  />
                </div>
                <div>
                  <p
                    class="text-sm md:text-base text-slate-700 dark:text-slate-300 font-bold"
                  >
                    SCPC – 1st Place Among Private Universities
                  </p>
                  <p class="text-sm md:text-[15px] text-slate-500">
                    Achieved first place among private universities in the
                    Syrian Collegiate Programming Contest, demonstrating strong
                    algorithmic and problem-solving skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
