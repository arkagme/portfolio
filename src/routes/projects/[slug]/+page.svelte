<script lang="ts">
  import { Github, ExternalLink, Star } from "@lucide/svelte";
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title} | Arkaprava Gaine</title>
</svelte:head>

<div class="max-w-3xl mx-auto">
  <a
    href="/projects"
    class="text-rosepine-subtle hover:text-rosepine-text mb-8 inline-block transition-colors"
    >&larr; Back to Projects</a
  >

  <header class="mb-12">
    <div class="flex items-center gap-4 mb-4">
      <h1 class="text-4xl font-bold text-rosepine-foam">{data.meta.title}</h1>
      {#if data.meta.stars}
        <div
          class="flex items-center gap-1 text-rosepine-gold bg-rosepine-gold/10 px-3 py-1 rounded-full text-sm"
        >
          <Star size={14} fill="currentColor" />
          {data.meta.stars}
        </div>
      {/if}
    </div>

    <p class="text-xl text-rosepine-text/80 mb-6">{data.meta.description}</p>

    <div class="flex flex-wrap gap-4">
      {#if data.meta.repoLink}
        <a
          href={data.meta.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-rosepine-surface border border-rosepine-highlightLow hover:border-rosepine-highlightMed transition-colors text-rosepine-text"
        >
          <Github size={18} />
          Repository
        </a>
      {/if}

      {#if data.meta.liveLink}
        <a
          href={data.meta.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 px-4 py-2 rounded-lg bg-rosepine-love text-rosepine-base font-bold hover:bg-rosepine-rose transition-colors"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
      {/if}
    </div>
  </header>

  <article class="prose prose-invert prose-rosepine max-w-none">
    <svelte:component this={data.content} />
  </article>
</div>
