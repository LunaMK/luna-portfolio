<template>
  <div class="mb-16">
    <h2
      class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tighter leading-tight"
    >
      <slot name="title">
        {{ title }}
      </slot>
    </h2>
    <div
      class="mt-4 h-2 w-32 bg-primary-500 underline decoration-wavy opacity-80 rounded-full"
    />
    <p
      v-if="subtitle || $slots.subtitle"
      class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mt-6 font-medium leading-relaxed max-w-2xl"
    >
      <slot name="subtitle">
        {{ subtitle }}
      </slot>
    </p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    subtitle?: string
  }>(),
  {
    title: '',
    subtitle: ''
  }
)
</script>
