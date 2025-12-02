<script lang="ts">
  import { ExternalLink } from "@lucide/svelte";

  export let company: string;
  export let role: string;
  export let date: string;
  export let description: string;
  export let tags: string[];
  export let link: string;
</script>

<div
  class="relative p-6 rounded-xl bg-rosepine-surface/50 border border-rosepine-highlightLow hover:border-rosepine-highlightMed transition-all group"
>
  <div class="flex justify-between items-start mb-4">
    <div>
      <h3
        class="text-xl font-bold text-rosepine-text group-hover:text-rosepine-love transition-colors"
      >
        {company}
      </h3>
      <div
        class="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1"
      >
        <span class="text-rosepine-subtle font-medium">{role}</span>
        <span class="hidden sm:inline text-rosepine-muted">•</span>
        <span class="text-rosepine-muted text-sm">{date}</span>
      </div>
    </div>

    <!-- <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      class="p-2 rounded-lg bg-rosepine-base text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-overlay transition-colors"
      aria-label="View {company}"
    >
      <ExternalLink size={20} />
    </a> -->
  </div>

  <p class="text-rosepine-text/80 leading-relaxed mb-6">
    {description}
  </p>

  <div class="flex flex-wrap gap-2">
    {#each tags as tag}
      <span
        class="px-3 py-1 text-xs font-medium rounded-full bg-rosepine-overlay text-rosepine-subtle border border-rosepine-highlightLow"
      >
        {tag}
      </span>
    {/each}
  </div>
</div>
