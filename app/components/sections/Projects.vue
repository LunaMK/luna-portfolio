<template>
  <section
    id="projects"
    class="py-16 sm:py-24 overflow-x-hidden"
  >
    <UContainer>
      <SharedSectionHeader
        title="Projects"
        subtitle="A showcase of engineered solutions, from enterprise systems to high-performance mobile apps."
      />

      <div
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
      >
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          v-reveal
          :style="{ transitionDelay: `${Math.min(index * 80, 500)}ms` }"
          class="group relative flex flex-col bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-primary-500/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/10"
        >
          <div
            class="relative h-44 sm:h-48 md:h-56 shrink-0 overflow-hidden"
            :class="gradients[index % gradients.length]"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            >
            <div
              v-else
              class="w-full h-full flex items-center justify-center"
            >
              <UIcon
                :name="project.icon"
                class="w-14 h-14 md:w-16 md:h-16 text-white/70 drop-shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:text-white"
              />
            </div>
            <div
              class="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            />
            <UIcon
              :name="project.icon"
              class="absolute bottom-3 right-3 w-8 h-8 text-white/40 group-hover:text-white/80 transition-all duration-500"
            />
          </div>

          <div class="relative flex flex-col flex-1 p-6 md:p-8">
            <h3
              class="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 uppercase tracking-tight mb-3"
            >
              {{ project.title }}
            </h3>

            <p
              class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium line-clamp-4 md:line-clamp-5 flex-1"
            >
              {{ project.description }}
            </p>

            <div
              v-if="projectLinks(project).length"
              class="flex flex-wrap gap-2 mb-6"
            >
              <NuxtLink
                v-for="link in projectLinks(project)"
                :key="link.label"
                :to="link.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-black uppercase tracking-widest bg-primary-500/10 text-primary-600 dark:text-primary-300 border border-primary-500/20 hover:bg-primary-500 hover:text-white transition-colors"
              >
                <UIcon
                  :name="link.icon"
                  class="w-3.5 h-3.5"
                />
                {{ link.label }}
              </NuxtLink>
            </div>

            <div class="mt-2 flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
              <span
                v-for="tech in project.stack"
                :key="tech"
                class="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 transition-colors group-hover:border-primary-500/30"
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
import { projects } from '@/data/projects/index'

type ProjectLink = {
  label: string
  icon: string
  url: string
}

const gradients = [
  'bg-linear-to-br from-primary-500/60 to-primary-700/70',
  'bg-linear-to-br from-primary-400/60 to-primary-600/70',
  'bg-linear-to-br from-primary-600/60 to-primary-800/70',
  'bg-linear-to-br from-brand-400 to-brand-600'
]

function projectLinks(project: (typeof projects)[number]): ProjectLink[] {
  const links: ProjectLink[] = []
  if (project.github) {
    links.push({ label: 'Code', icon: 'i-lucide-github', url: project.github })
  }
  if (project.live) {
    links.push({ label: 'Live', icon: 'i-lucide-external-link', url: project.live })
  }
  if (project.appStore) {
    links.push({ label: 'App Store', icon: 'i-lucide-smartphone', url: project.appStore })
  }
  return links
}
</script>
