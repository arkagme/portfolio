<script lang="ts">
  import { Star, Users } from "@lucide/svelte"

  export let title: string;
  export let description: string;
  export let tags: string[];
  export let slug: string;
  export let stars: number = 0;
  export let contributors: number = 0;
  export let repoLink: string = "";
</script>

<a
  href="/projects/{slug}"
  class="block group relative overflow-hidden rounded-xl bg-rosepine-surface border border-rosepine-highlightLow hover:border-rosepine-highlightMed hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-rosepine-highlightLow/20"
>
  <!-- Window Header -->
  <div
    class="px-4 py-3 bg-rosepine-base/50 border-b border-rosepine-highlightLow flex items-center justify-between"
  >
    <div class="flex gap-1.5">
      <div class="w-3 h-3 rounded-full bg-rosepine-love/80"></div>
      <div class="w-3 h-3 rounded-full bg-rosepine-gold/80"></div>
      <div class="w-3 h-3 rounded-full bg-rosepine-foam/80"></div>
    </div>
    <div class="flex items-center gap-2 text-xs text-rosepine-muted">
      {#if stars > 0}
        <span class="flex items-center gap-1">
          {stars}
          <Star size={10} fill="currentColor" />
        </span>
      {/if}
    </div>
  </div>

  <!-- Content -->
  <div class="p-6">
    <div class="flex items-center gap-2 mb-4">
      <span class="text-rosepine-love font-mono text-sm">user</span>
      <span class="text-rosepine-muted">/</span>
      <h3
        class="text-xl font-bold text-rosepine-foam font-mono group-hover:text-rosepine-rose transition-colors"
      >
        {title.toLowerCase()}
      </h3>
    </div>

    <p class="text-rosepine-text/90 mb-8 min-h-[3rem]">
      {description}
    </p>

    <div class="flex items-end justify-between">
      <div class="flex flex-wrap gap-2">
        {#each tags.slice(0, 3) as tag}
          <span
            class="px-2 py-1 text-xs font-mono rounded bg-rosepine-overlay text-rosepine-subtle"
          >
            {tag}
          </span>
        {/each}
        {#if tags.length > 3}
          <span
            class="px-2 py-1 text-xs font-mono rounded bg-rosepine-overlay text-rosepine-subtle"
          >
            +{tags.length - 3}
          </span>
        {/if}
      </div>

      {#if contributors > 0}
        <div class="text-xs text-rosepine-muted flex items-center gap-1">
          {contributors} Contributors
        </div>
      {/if}
    </div>
  </div>
</a>
