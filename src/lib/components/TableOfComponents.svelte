<script lang="ts">
  import { onMount } from "svelte";

  let headings: { id: string; text: string; level: number }[] = [];
  let activeId = "";

  onMount(() => {
    // Find all h2 and h3 elements in the article
    const elements = document.querySelectorAll(".prose h2, .prose h3");
    headings = Array.from(elements).map((el) => ({
      id: el.id,
      text: el.textContent || "",
      level: parseInt(el.tagName.substring(1)),
    }));

    // Intersection Observer for active state
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeId = entry.target.id;
          }
        });
      },
      { rootMargin: "-100px 0px -66% 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
</script>

<nav
  class="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto hidden xl:block w-64 p-4"
>
  <h4
    class="text-rosepine-subtle font-bold uppercase tracking-wider text-xs mb-4"
  >
    On this page
  </h4>
  <ul class="space-y-2 text-sm">
    {#each headings as heading}
      <li class={heading.level === 3 ? "pl-4" : ""}>
        <a
          href="#{heading.id}"
          class="block transition-colors duration-200 {activeId === heading.id
            ? 'text-rosepine-rose font-medium'
            : 'text-rosepine-muted hover:text-rosepine-text'}"
        >
          {heading.text}
        </a>
      </li>
    {/each}
  </ul>
</nav>
