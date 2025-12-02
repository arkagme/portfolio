<script lang="ts">
  import { FileText, ExternalLink } from "@lucide/svelte";

  export let posts: any[] = [];

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }
</script>

<div
  class="w-full h-full bg-rosepine-surface rounded-xl border border-rosepine-highlightLow p-6 flex flex-col gap-6 hover:border-rosepine-highlightMed transition-colors"
>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2 text-rosepine-text">
      <FileText size={20} class="text-rosepine-gold" />
      <h3 class="font-bold text-lg">Latest Posts</h3>
    </div>
    <a
      href="/blog"
      class="text-rosepine-subtle hover:text-rosepine-text transition-colors"
    >
      <ExternalLink size={16} />
    </a>
  </div>

  <div class="flex flex-col gap-4">
    {#each posts as post}
      <a
        href="/blog/{post.slug}"
        class="group flex items-start justify-between gap-4 p-3 -mx-3 rounded-lg hover:bg-rosepine-overlay/50 transition-colors"
      >
        <div class="flex flex-col gap-1">
          <h4
            class="text-rosepine-text font-medium group-hover:text-rosepine-gold transition-colors line-clamp-2"
          >
            {post.meta.title}
          </h4>
          <p class="text-rosepine-subtle text-sm line-clamp-1">
            {post.meta.description}
          </p>
        </div>
        <span
          class="text-xs text-rosepine-muted font-mono whitespace-nowrap mt-1"
          >{formatDate(post.meta.date)}</span
        >
      </a>
    {/each}
  </div>
</div>
