<script lang="ts">
  import "../app.css";
  import "@fontsource/figtree";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { onMount } from "svelte";
  import Lenis from "@studio-freight/lenis";
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  onMount(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  // run analytics in browser only
  if (typeof window !== 'undefined') {
    inject({ mode: dev ? 'development' : 'production' });
  }
</script>

<div
  class="min-h-screen flex flex-col bg-rosepine-base text-rosepine-text selection:bg-rosepine-highlightMed"
>
  <Navbar />
  <main class="flex-grow px-8 max-w-4xl mx-auto w-full">
    <slot />
  </main>
  <Footer />
</div>
