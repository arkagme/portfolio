<script lang="ts">
  import { page } from "$app/stores";
  import { Menu, X, ChevronRight } from "@lucide/svelte";
  import { onMount } from "svelte";
  import { fly, slide } from "svelte/transition";

  let isMenuOpen = false;
  let isMoreOpen = false;
  let innerWidth: number;

  const links = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" }, // Placeholder for now
    { name: "Posts", href: "/blog" },
    { name: "Resume", href: "/Resume.pdf", external: true },
  ];

  const moreLinks = [
    { name: "GitHub", href: "https://github.com/arkagme", external: true },
    {name: "Socials", href: "/socials" },
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function toggleMore() {
    isMoreOpen = !isMoreOpen;
  }

  $: breadcrumbs = $page.url.pathname.split("/").filter(Boolean);
</script>

<svelte:window bind:innerWidth />

<header
  class="sticky top-0 z-50 w-full backdrop-blur-md bg-rosepine-base/80  transition-all duration-300"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
    <div class="flex items-center justify-between h-20">
      <div class="flex items-center">
        <a
          href="/"
          class="group relative flex items-center justify-center h-9 rounded-lg transition-transform hover:scale-105 active:scale-95"
        >
          <img src="/logo.webp" alt="Logo" class="h-full w-auto object-contain" />
          <div
            class="absolute inset-0 bg-rosepine-love/10 opacity-0 "
          ></div>
        </a>

        <!-- {#if innerWidth > 640 && breadcrumbs.length > 0}
          <nav class="hidden sm:flex items-center text-sm text-rosepine-subtle">
            <span class="mx-2 text-rosepine-muted">/</span>
            {#each breadcrumbs as crumb, i}
              <span
                class="capitalize hover:text-rosepine-text transition-colors"
              >
                {crumb}
              </span>
              {#if i < breadcrumbs.length - 1}
                <span class="mx-2 text-rosepine-muted">/</span>
              {/if}
            {/each}
          </nav>
        {/if} -->

        {#if innerWidth > 640 && breadcrumbs.length > 0}
          <nav class="hidden sm:flex items-center text-sm text-rosepine-subtle">
          <span class="mx-2 text-rosepine-muted">/</span>
          {#each breadcrumbs as crumb, i}
              {#if i < breadcrumbs.length - 1}
              <!-- clickable breadcrumb -->
              <a
                  href={`/${breadcrumbs.slice(0, i + 1).join('/')}`}
                  class="capitalize hover:text-rosepine-text transition-colors"
                >
              {crumb}
              </a>
        {:else}
            <!-- last segment: current page, non-clickable or styled differently -->
            <span class="capitalize text-rosepine-text">
            {crumb}
          </span>
          {/if}
            {#if i < breadcrumbs.length - 1}
              <span class="mx-2 text-rosepine-muted">/</span>
            {/if}
            {/each}
          </nav>
        {/if}
      </div>

      <!-- Right: Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-1">
        {#each links as link}
          <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            class="px-4 py-2 rounded-md text-lg font-medium text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-surface transition-all duration-200 {$page
              .url.pathname === link.href
              ? 'text-rosepine-text bg-rosepine-surface/50'
              : ''}"
          >
            {link.name}
          </a>
        {/each}

        <!-- More Dropdown -->
        <div class="relative ml-2">
          <button
            on:click={toggleMore}
            class="px-4 py-2 rounded-md text-lg font-medium text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-surface transition-all duration-200 flex items-center gap-1"
          >
            More
            <ChevronRight
              size={14}
              class="transform transition-transform {isMoreOpen
                ? 'rotate-90'
                : ''}"
            />
          </button>

          {#if isMoreOpen}
            <div
              transition:fly={{ y: 10, duration: 200 }}
              class="absolute right-0 mt-2 w-48 bg-rosepine-surface  rounded-lg shadow-xl overflow-hidden py-1"
              on:mouseleave={() => (isMoreOpen = false)}
            >
              {#each moreLinks as link}
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  class="block px-4 py-2 text-lg text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-overlay transition-colors"
                >
                  {link.name}
                </a>
              {/each}
            </div>
          {/if}
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 rounded-md text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-surface transition-colors"
        on:click={toggleMenu}
        aria-label="Toggle menu"
      >
        {#if isMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if isMenuOpen}
    <div
      transition:slide={{ duration: 300 }}
      class="md:hidden bg-rosepine-base/95 backdrop-blur-md"
    >
      <div class="px-4 pt-2 pb-6 space-y-1">
        {#each [...links, ...moreLinks] as link}
          <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            class="block px-3 py-3 rounded-md text-base font-medium text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-surface transition-colors"
            on:click={() => (isMenuOpen = false)}
          >
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</header>
