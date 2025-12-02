<script lang="ts">
  import TableOfContents from "$lib/components/TableOfComponents.svelte";
  import { ArrowLeft, Calendar, Tag, User } from "@lucide/svelte";
  import "katex/dist/katex.min.css"; // Import Katex CSS for math rendering


  export let data;

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }
</script>

<svelte:head>
  <title>{data.meta.title} | Arkaprava Gaine</title>
  <meta name="description" content={data.meta.description} />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <!-- Back Link -->
  <a
    href="/blog"
    class="inline-flex items-center gap-2 text-rosepine-subtle hover:text-rosepine-text mb-8 transition-colors group"
  >
    <ArrowLeft
      size={16}
      class="group-hover:-translate-x-1 transition-transform"
    />
    <span>Back to Blog</span>
  </a>

  <div class="grid grid-cols-1 xl:grid-cols-4 gap-12">
    <!-- Main Content -->
    <div class="xl:col-span-3">
      <!-- Hero Section -->
      <header class="mb-12 border-b border-rosepine-highlightLow pb-8">
        <div class="flex flex-wrap gap-4 mb-6 text-sm text-rosepine-subtle">
          <div class="flex items-center gap-1.5">
            <Calendar size={14} />
            <time>{formatDate(data.meta.date)}</time>
          </div>
          {#if data.meta.author}
            <div class="flex items-center gap-1.5">
              <User size={14} />
              <span>{data.meta.author}</span>
            </div>
          {/if}
                  <!-- Header Banner -->
        {#if data.meta.headerImage}
          <div class="rounded-xl overflow-hidden shadow-xl">
            <img
              src={data.meta.headerImage}
              alt={data.meta.title}
              class="w-full h-auto object-cover"
            />
          </div>
        {/if}
        </div>

        <h1
          class="text-3xl md:text-5xl font-bold text-rosepine-text mb-6 leading-tight"
        >
          {data.meta.title}
        </h1>

        {#if data.meta.tags}
          <div class="flex flex-wrap gap-2">
            {#each data.meta.tags as tag}
              <span
                class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-rosepine-overlay/50 text-rosepine-text text-sm border border-rosepine-highlightLow"
              >
                <Tag size={12} />
                {tag}
              </span>
            {/each}
          </div>
        {/if}
      </header>

      <!-- Article Content -->
      <article
        class="prose prose-invert prose-rosepine max-w-none
        prose-headings:scroll-mt-24
        prose-headings:font-bold
        prose-h1:text-3xl prose-h1:text-rosepine-text
        prose-h2:text-2xl prose-h2:text-rosepine-foam prose-h2:border-b prose-h2:border-r-rosepine-subtle prose-h2:pb-2 prose-h2:mt-12
        prose-h3:text-xl prose-h3:text-rosepine-gold prose-h3:mt-8
        prose-p:text-rosepine-text prose-p:leading-relaxed
        prose-a:text-rosepine-love prose-a:no-underline 
        prose-blockquote:border-l-rosepine-iris prose-blockquote:bg-rosepine-overlay/20 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
        prose-code:text-rosepine-rose prose-code:bg-rosepine-overlay/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
        prose-img:rounded-xl prose-img:shadow-lg 
        prose-table:border-collapse prose-table:w-full
        prose-th:border-b prose-th:border-rosepine-highlightMed prose-th:text-left prose-th:p-2 prose-th:text-rosepine-text
        prose-td:border-b prose-td:border-rosepine-highlightLow prose-td:p-2 prose-td:text-rosepine-subtle
      "
      >
        <svelte:component this={data.content} />
      </article>
    </div>

    <!-- Sidebar (TOC) -->
    <aside class="hidden xl:block xl:col-span-1">
      <TableOfContents />
    </aside>
  </div>
</div>
