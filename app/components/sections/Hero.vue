<template>
  <section
    class="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden py-16"
  >
    <div
      class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,var(--color-brand-200)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,_var(--color-brand-950)_0%,_transparent_50%)] opacity-20"
    ></div>

    <UContainer>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8 text-center lg:text-left">
          <div class="space-y-6">
            <UBadge
              variant="subtle"
              color="primary"
              size="md"
              class="rounded-full px-4 py-1 font-bold tracking-wider uppercase border border-primary-500/20"
            >
              Full Stack Developer
            </UBadge>

            <h1
              class="text-3xl md:text-5xl font-black tracking-tight text-slate-700 dark:text-slate-200 leading-tight"
            >
              I’m
              <span class="text-primary-600/90 dark:text-primary-200/90"
                >Luna Marzouk</span
              >
            </h1>

            <p
              class="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Full Stack Developer graduated with honors in Artificial
              Intelligence. Currently working at Spacetoon, where I develop
              scalable web and mobile applications using Flutter, Nuxt.js, and
              Laravel. I also participated in the ACM International Collegiate
              Programming Contest, strengthening my problem-solving and
              algorithmic skills.
            </p>
          </div>

          <div
            class="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <UButton
              to="/Luna_Marzouk_CV.pdf"
              target="_blank"
              size="xl"
              color="primary"
              label="Download CV"
              icon="i-lucide-download"
              class="rounded-xl px-8 py-4 shadow-lg shadow-primary-500/10 hover:shadow-primary-500/25 transition-all hover:-translate-y-0.5 font-bold"
            />

            <UButton
              size="xl"
              variant="ghost"
              color="primary"
              label="Contact Me"
              to="mailto:marzouk.luna@gmail.com"
              icon="i-lucide-mail"
              class="rounded-xl px-8 py-4 font-bold"
            />
          </div>
        </div>

        <div
          class="relative group hidden md:flex justify-center lg:justify-end items-end"
        >
          <div
            class="absolute inset-0 bg-primary-500/15 rounded-full blur-[100px] group-hover:bg-primary-500/25 transition-all duration-1000"
          ></div>

          <div
            class="relative z-10 w-full max-w-85 aspect-10/13 rounded-4xl border p-8 flex flex-col justify-between overflow-hidden backdrop-blur-md transition-all duration-500 bg-primary-400/10 border-brand-500/50 shadow-xl dark:bg-brand-950/80 dark:border-white/10 dark:shadow-2xl"
          >
            <div class="flex gap-1.5 mb-8">
              <div class="w-3 h-3 rounded-full bg-red-500/60"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500/60"></div>
              <div class="w-3 h-3 rounded-full bg-green-500/60"></div>
            </div>

            <div class="font-mono text-[13px] leading-relaxed grow">
              <span class="text-brand-800 dark:text-pink-400 font-bold"
                >const</span
              >
              <span class="text-brand-950 dark:text-blue-300"> developer</span>
              = {
              <div
                class="pl-4 mt-1 border-l-2 border-brand-400/20 dark:border-white/5 ml-1"
              >
                <span
                  class="text-violet-600 dark:text-slate-400 italic font-semibold"
                  >name:</span
                >
                <span class="text-emerald-600 dark:text-emerald-300 font-bold"
                  >'Luna Marzouk'</span
                >,
                <br />

                <span
                  class="text-violet-600 dark:text-slate-400 italic font-semibold"
                  >role:</span
                >
                <span class="text-emerald-600 dark:text-emerald-300 font-bold"
                  >'Full Stack'</span
                >,
                <br />

                <span
                  class="text-violet-600 dark:text-slate-400 italic font-semibold"
                  >specialty:</span
                >
                <span class="text-emerald-600 dark:text-emerald-300 font-bold"
                  >'Flutter'</span
                >,
                <br />

                <span
                  class="text-violet-600 dark:text-slate-400 italic font-semibold"
                  >frontend:</span
                >
                <span class="text-emerald-600 dark:text-emerald-300 font-bold"
                  >'Nuxt.js'</span
                >,
                <br />

                <span
                  class="text-violet-600 dark:text-slate-400 italic font-semibold"
                  >education:</span
                >
                <span class="text-emerald-600 dark:text-emerald-300 font-bold"
                  >'AI Engineering'</span
                >
              </div>
              };
            </div>

            <div class="flex justify-end items-end mt-4">
              <UIcon
                name="i-logos-flutter"
                class="text-5xl opacity-30 dark:opacity-50 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
