<template>
  <section id="projects" class="py-24 overflow-x-hidden">
    <UContainer>
      <div class="mb-16 px-2 text-center md:text-left">
        <h2
          class="text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tighter"
        >
          Projects
        </h2>
        <div
          class="mt-2 h-2 w-32 bg-primary-500 underline decoration-wavy opacity-80 mx-auto md:mx-0"
        ></div>
        <p
          class="text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-4 font-medium leading-relaxed max-w-2xl"
        >
          A showcase of engineered solutions, from enterprise systems to
          high-performance mobile apps.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-primary-500/30 hover:-translate-y-2"
        >
          <div
            class="relative h-48 md:h-56 overflow-hidden bg-slate-100 dark:bg-slate-800"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div
              v-else
              class="w-full h-full flex items-center justify-center bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900"
            >
              <UIcon
                :name="project.icon"
                class="w-12 h-12 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 transition-colors"
              />
            </div>
            <div
              class="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-60"
            ></div>
          </div>

          <div class="p-6 md:p-8">
            <h3
              class="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 uppercase tracking-tight mb-3"
            >
              {{ project.title }}
            </h3>

            <p
              class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium md:line-clamp-none line-clamp-5"
            >
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
import { projects } from "@/data/projects/index";
</script>
