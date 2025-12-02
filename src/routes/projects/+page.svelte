<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  export let data;

  onMount(() => {
    gsap.from(".project-card", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  });
</script>

<svelte:head>
  <title>Projects | Arkaprava Gaine</title>
</svelte:head>

<div class="max-w-5xl mx-auto">
  <h1 class="text-4xl font-bold mb-8 text-rosepine-foam">All Projects</h1>

  <div class="grid md:grid-cols-2 gap-8">
    {#each data.projects as project}
      <div class="project-card">
        <ProjectCard {...project} />
      </div>
    {/each}
  </div>
</div>
