<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";

  export let data;

onMount(() => {
  gsap.fromTo(
    ".blog-card",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "transform,opacity" }
  );
});

</script>

<svelte:head>
  <title>Blog | Arkaprava Gaine</title>
</svelte:head>

<div class="max-w-3xl">
  <h1 class="text-4xl font-bold mb-8 text-rosepine-rose">Blog</h1>

  <div class="grid gap-6">
    {#each data.posts as post}
      <a
        href="/blog/{post.slug}"
        class="blog-card block p-6 border border-rosepine-highlightMed rounded-lg hover:border-rosepine-love hover:bg-rosepine-surface transition-all group"
      >
        <h2
          class="text-2xl font-bold mb-2 text-rosepine-text group-hover:text-rosepine-love transition-colors"
        >
          {post.meta.title}
        </h2>
        <p class="text-rosepine-subtle mb-4">{post.meta.description}</p>
        <span class="text-sm text-rosepine-muted">{post.meta.date}</span>
      </a>
    {/each}
  </div>
</div>
