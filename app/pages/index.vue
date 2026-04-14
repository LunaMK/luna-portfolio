<template>
  <SectionsHero />
  <SectionsSkills />
  <SectionsExperiences />
  <SectionsProjects />
  <SectionsEducation/>
  <SectionsContact/>

</template>


<script setup lang="ts">
import { useSeo } from "~/composables/useSeo";

useSeo({
  title: "Luna Marzouk | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Flutter, Nuxt.js, and Laravel.",
});
</script>

