<template>
  <nav
    class="sticky top-0 z-50 w-full border-b border-primary-200/20 bg-[var(--ui-bg)]/80 backdrop-blur-md"
  >
    <UContainer class="flex h-16 items-center justify-between">
      <div class="flex items-center gap-4 group select-none">
        <SharedAppLogo
          class="h-10 w-10 text-primary-900 dark:text-primary-50"
        />
        <div class="flex flex-col leading-none ml-2">
          <span class="logo-font text-2xl text-slate-900 dark:text-white">
            Luna
          </span>

          <span class="logo-sub text-primary-500 dark:text-primary-300">
            Marzouk
          </span>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-8">
        <div class="flex items-center gap-6 text-sm font-medium">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="hover:text-primary-500 transition-all"
          >
            {{ link.label }}
          </NuxtLink>
        </div>
        <UButton
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          variant="ghost"
          @click="isDark = !isDark"
        />
      </div>

      <div class="md:hidden flex items-center gap-2">
        <UButton
          :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
          variant="ghost"
          @click="isDark = !isDark"
        />
        <UButton
          :icon="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          variant="ghost"
          color="primary"
          @click="isOpen = !isOpen"
        />
      </div>
    </UContainer>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isOpen"
        class="md:hidden absolute top-full left-0 w-full bg-white/90 dark:bg-slate-900/90 border-b border-primary-200/20 shadow-xl"
      >
        <UContainer class="py-6 flex flex-col gap-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-lg font-medium p-2 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
            @click="isOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <UButton
            color="primary"
            to="#contact"
            label="Contact Me"
            block
            size="lg"
            class="mt-2 rounded-xl"
          />
        </UContainer>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const colorMode = useColorMode();
const isOpen = ref(false);

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Experience", path: "#experience" },
  { label: "Projects", path: "#projects" },
  { label: "Education", path: "#education" },
];
</script>
