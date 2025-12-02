<script lang="ts">
  import { GitCommit, ExternalLink } from "@lucide/svelte";

  export let data: any;

  // Handle the specific JSON structure provided by the user
  $: commits = data?.commits || [];
  $: languages = data?.languages || [];
  $: totalSize = languages.reduce(
    (acc: number, lang: any) => acc + lang.size,
    0
  );

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }

  function getPercentage(size: number) {
    if (totalSize === 0) return "0.0";
    return ((size / totalSize) * 100).toFixed(1);
  }
</script>

<div
  class="w-full h-full bg-rosepine-surface rounded-xl border border-rosepine-highlightLow p-6 flex flex-col gap-6 hover:border-rosepine-highlightMed transition-colors"
>
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-2 text-rosepine-text">
      <GitCommit size={20} class="text-rosepine-foam" />
      <h3 class="font-bold text-lg">Recent Commits</h3>
    </div>
    <!-- <span class="text-xs text-rosepine-subtle font-mono">[info]</span> -->
  </div>

  <!-- Commits List -->
  <div class="flex-1 flex flex-col gap-3 overflow-hidden min-h-[180px]">
    {#if commits.length > 0}
      {#each commits.slice(0, 5) as commit}
        <a
          href={commit.commitUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-between gap-4 text-sm hover:bg-rosepine-overlay/50 p-2 rounded-md transition-colors -mx-2"
        >
          <div class="flex flex-col gap-0.5 min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-rosepine-foam font-mono text-xs"
                >{commit.repo.split("/")[1]}</span
              >
              <span class="text-rosepine-subtle text-xs">•</span>
              <span class="text-rosepine-muted text-xs"
                >{formatDate(commit.committedDate)}</span
              >
            </div>
            <p
              class="text-rosepine-text truncate font-mono text-xs group-hover:text-rosepine-rose transition-colors max-w-[200px] md:max-w-[150px]"
            >
              {commit.messageHeadline}
            </p>
          </div>
          <div class="flex items-center gap-2 text-xs font-mono shrink-0">
            <span class="text-rosepine-foam">+{commit.additions}</span>
            <span class="text-rosepine-subtle">/</span>
            <span class="text-rosepine-love">-{commit.deletions}</span>
          </div>
        </a>
      {/each}
    {:else}
      <div
        class="flex items-center justify-center h-full text-rosepine-muted text-sm"
      >
        No commits found
      </div>
    {/if}
  </div>

  <!-- Language Bar -->
  <div class="flex flex-col gap-2">
    <div class="flex items-center justify-between text-xs text-rosepine-subtle">
      <span>View on GitHub</span>
      <ExternalLink size={12} />
    </div>
    <div class="h-3 w-full flex rounded-full bg-rosepine-overlay relative">
      {#each languages as lang, i}
        <div
          class="h-full transition-all duration-300 hover:opacity-80 relative group {i ===
          0
            ? 'rounded-l-full'
            : ''} {i === languages.length - 1 ? 'rounded-r-full' : ''}"
          style="width: {getPercentage(
            lang.size
          )}%; background-color: {lang.color};"
        >
          <!-- Tooltip -->
          <div
            class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-rosepine-base border border-rosepine-highlightLow px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-lg"
          >
            <span class="font-bold" style="color: {lang.color}"
              >{lang.name}</span
            >
            <span class="text-rosepine-text ml-1"
              >{getPercentage(lang.size)}%</span
            >
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
