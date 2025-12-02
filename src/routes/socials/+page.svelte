<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { Github, Twitter, Linkedin, Mail, Globe, Code } from "@lucide/svelte";


  onMount(() => {
  gsap.fromTo(
    ".social-card",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "transform,opacity" }
  );
});
  const socials = [
    {
      name: "GitHub",
      handle: "@arkagme",
      url: "https://github.com/arkagme",
      icon: Github,
      color: "text-rosepine-text",
    },
    {
      name: "Twitter",
      handle: "@arka_gme",
      url: "https://twitter.com/arka_gme",
      icon: Twitter,
      color: "text-rosepine-foam",
    },
    {
      name: "LinkedIn",
      handle: "@arkagme",
      url: "https://linkedin.com/in/arkagme",
      icon: Linkedin,
      color: "text-rosepine-iris",
    },
    {
      name: "Email",
      handle: "codearka2002",
      url: "codearka2002@gmail.com",
      icon: Mail,
      color: "text-rosepine-rose",
    },
  ];
</script>

<svelte:head>
  <title>Socials | Arkaprava Gaine</title>
</svelte:head>

<div class="max-w-xl mx-auto px-4 py-12">
  <div class="mb-8 text-center">
    <h1 class="text-3xl font-bold text-rosepine-text mb-2">Connect with me</h1>
    <p class="text-rosepine-subtle">Find me on the internet</p>
  </div>

  <div class="space-y-4">
    {#each socials as social}
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        class="social-card flex items-center mb-8 gap-4 p-5 rounded-xl  bg-rosepine-surface shadow-md hover:border-rosepine-iris hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
      >
        <div
          class="p-3 rounded-lg bg-rosepine-overlay/50 group-hover:bg-rosepine-overlay transition-colors"
        >
          <svelte:component
            this={social.icon}
            size={29}
            class={social.color}
          />
        </div>
        <div class="flex-1 ">
          <h3 class="text-lg font-bold text-rosepine-text group-hover:text-rosepine-iris transition-colors">
            {social.name}
          </h3>
          <span class="text-sm text-rosepine-subtle pb-9">{social.handle}</span>
        </div>
      </a>
    {/each}
  </div>
</div>
