<script lang="ts">
  import { Check, Copy } from "@lucide/svelte";
  import { fade } from "svelte/transition";

  // Get all incoming props, including `class` and the default slot
  const { class: incomingClass = "", children } = $props() as {
    class?: string;
    children: () => any;
  };

  // Svelte 5 reactive state
  let copied = $state(false);
  let codeElement: HTMLElement | null = null;

  const language = $derived(
    String(incomingClass || "")
      .split(" ")
      .find((c) => c.startsWith("language-"))
      ?.replace("language-", "") ?? "text"
  );

  async function copyCode() {
    if (!codeElement) return;
    const text = codeElement.innerText;
    try {
      await navigator.clipboard.writeText(text);
      copied = true;
      setTimeout(() => (copied = false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }
</script>

<div
  class="relative my-6 rounded-lg overflow-hidden border border-rosepine-highlightLow bg-rosepine-surface shadow-lg group"
>
  <!-- Header -->
  <div
    class="flex items-center justify-between px-4 py-2 bg-rosepine-overlay/50 border-b border-rosepine-highlightLow"
  >
    <div class="flex items-center gap-2">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
        <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
        <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      </div>
    </div>

    <div class="flex items-center gap-2">
      <span
        class="text-xs font-mono text-rosepine-subtle uppercase tracking-wider"
        >{language}</span
      >
      <button
        onclick={copyCode}
        class="p-1.5 rounded-md hover:bg-rosepine-highlightLow transition-colors text-rosepine-subtle hover:text-rosepine-text focus:outline-none focus:ring-2 focus:ring-rosepine-iris"
        aria-label="Copy code"
      >
        {#if copied}
          <div in:fade={{ duration: 200 }}>
            <Check size={14} />
          </div>
        {:else}
          <div in:fade={{ duration: 200 }}>
            <Copy size={14} />
          </div>
        {/if}
      </button>
    </div>
  </div>

  <!-- Code Content -->
  <div class="relative overflow-x-auto">
    <pre
      bind:this={codeElement}
      class={`${incomingClass} !bg-transparent !m-0 !p-4 !font-mono text-sm leading-relaxed overflow-x-auto scrollbar-thin scrollbar-thumb-rosepine-highlightMed scrollbar-track-transparent`}
    >
      {@render children()}
    </pre>
  </div>
</div>

<style>
  /* Force code element to have transparent background to avoid "white highlight" effect */
  :global(.prose pre code) {
    background-color: transparent !important;
    color: inherit !important; /* Ensure text color inherits from shiki spans */
    padding: 0 !important; /* Remove any default padding */
  }
</style>
