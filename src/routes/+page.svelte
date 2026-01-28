<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
  import ExperienceCard from "$lib/components/ExperienceCard.svelte";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import LocationCard from "$lib/components/LocationCard.svelte";
  import GithubCard from "$lib/components/GithubCard.svelte";
  import LatestPostsCard from "$lib/components/LatestPostsCard.svelte";
  import { ArrowRight ,  Github,
    Linkedin,
    Twitter,
    FileText, MoveRight } from "@lucide/svelte"

  export let data;
  let github = data.github

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    // Hero Animations
    tl.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    })
      .from(
        ".hero-sub",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        ".cta-btn",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

    // Delayed section animations
    setTimeout(() => {
      gsap.utils.toArray(".section-header").forEach((header: any) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      // Card animations
      gsap.utils.toArray(".reveal-card").forEach((card: any, i) => {
        gsap.from(card, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.5 + i * 0.1,
          ease: "power3.out",
        });
      });
    }, 100);

    // fire-and-forget client refresh of GitHub data
    fetch("/api/github-latest")
      .then((res) => (res.ok ? res.json() : null))
      .then((fresh) => {
        if (fresh) {
          github = fresh;
        }
      })
      .catch(() => {
        // swallow errors; keep fallback data
      });
  });


</script>

<svelte:head>
  <title>Arkaprava Gaine | Portfolio</title>
  <meta
    name="description"
    content="Portfolio of Arkaprava Gaine, Backend Developer."
  />
</svelte:head>

<!-- Hero Section -->
<section class="min-h-[58vh] flex flex-col justify-center items-start mb-20">
  <h1 class="hero-text text-2xl md:text-4xl font-bold mb-4 text-rosepine-text">
    Hey👋 I'm 
    <span class="text-rosepine-rose">Arkaprava Gaine</span>
  </h1>

  <div
    class="hero-sub text-xl md:text-xl text-rosepine-subtle mb-5 max-w-3xl leading-relaxed"
  >
    <p class="mb-4">
      A curious engineer and <span class="text-rosepine-text font-semibold"
        >backend developer</span
      >
      passionate about building efficient and scalable systems.
      <!-- <span class="text-rosepine-text font-semibold">
        Founder
      </span> -->
      <!-- <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-rosepine-love hover:text-rosepine-rose underline decoration-rosepine-love/30 hover:decoration-rosepine-rose transition-all"
        >ThryveDesign
      </a>. -->
    </p>
    <p class="mb-4">
      I love building cool products
      <!-- <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-rosepine-love hover:text-rosepine-rose underline decoration-rosepine-love/30 hover:decoration-rosepine-rose transition-all"
        >Ultra (YC W24)
        </a> -->
      and tinkering with things that spark my curiosity !! I also write
      <a
        href="/blog"
        rel="noopener noreferrer"
        class="text-rosepine-love hover:text-rosepine-rose underline decoration-rosepine-love/30 hover:decoration-rosepine-rose transition-all"
        >blogs.
      </a>
      <!-- <a
        href="https://react.dev"
        target="_blank"
        rel="noopener noreferrer"
        class="text-rosepine-love hover:text-rosepine-rose underline decoration-rosepine-love/30 hover:decoration-rosepine-rose transition-all"
        >React
      </a>,
      <a
        href="https://tailwindcss.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-rosepine-love hover:text-rosepine-rose underline decoration-rosepine-love/30 hover:decoration-rosepine-rose transition-all"
        >Tailwind CSS
      </a> -->
      Currently a final year CS undergrad at 
      <a
        href="https://sastra.edu"
        target="_blank"
        rel="noopener noreferrer"
        class="text-rosepine-love hover:text-rosepine-rose underline decoration-rosepine-love/30 hover:decoration-rosepine-rose transition-all"
        >Sastra University
      </a>
      and a Research Intern at 
      <a
        href="https://precog.iiit.ac.in"
        target="_blank"
        rel="noopener noreferrer"
        class="text-rosepine-love hover:text-rosepine-rose underline decoration-rosepine-love/30 hover:decoration-rosepine-rose transition-all"
        >Precog Labs
      </a>
      @
      <a
        href="https://www.iiit.ac.in/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-rosepine-love hover:text-rosepine-rose underline decoration-rosepine-love/30 hover:decoration-rosepine-rose transition-all"
        >IIIT Hyderabad
      </a>
    </p>
    <p>
      <a
        href="/about"
        rel="noopener noreferrer"
        class="text-rosepine-love hover:text-rosepine-rose underline decoration-rosepine-love/30 hover:decoration-rosepine-rose transition-all"
        >More about me <MoveRight size={23} class="inline-block ml-1" />
      </a>
    </p>
  </div>

  <!-- Social Links -->
  <div class="cta-btn flex gap-6 items-center">
    <a
      href="https://github.com/arkagme"
      target="_blank"
      rel="noopener noreferrer"
      class="text-rosepine-subtle hover:text-rosepine-text transition-colors hover:scale-110 transform duration-200"
      aria-label="GitHub"
    >
      <Github size={28} />
    </a>
    <a
      href="https://linkedin.com/in/arkagme"
      target="_blank"
      rel="noopener noreferrer"
      class="text-rosepine-subtle hover:text-rosepine-text transition-colors hover:scale-110 transform duration-200"
      aria-label="LinkedIn"
    >
      <Linkedin size={28} />
    </a>
    <a
      href="https://x.com/arka_gme"
      target="_blank"
      rel="noopener noreferrer"
      class="text-rosepine-subtle hover:text-rosepine-text transition-colors hover:scale-110 transform duration-200"
      aria-label="X (Twitter)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-7"  viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"/></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z"/></clipPath></defs></g></svg>
    </a>
    <a
      href="/Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-rosepine-subtle hover:text-rosepine-text transition-colors group ml-2"
    >
      <FileText size={24} />
      <span class="font-medium group-hover:underline text-lg"
        >Resume</span
      >
    </a>
  </div>
</section>

<!-- Experience Section -->
<section class="mb-32">
  <h2
    class="section-header text-3xl font-bold mb-12 text-rosepine-gold flex items-center gap-4"
  >
    <span class="w-12 h-[1px] bg-rosepine-gold/50"></span>
    Current + Previous Work Experience
  </h2>

  <div class="grid gap-6 max-w-4xl">
    {#each data.experience as job}
      <div class="reveal-card">
        <ExperienceCard {...job} />
      </div>
    {/each}
  </div>
</section>

<!-- Featured Projects Section -->
<section class="mb-32">
  <div class="flex justify-between items-end mb-12 section-header">
    <h2 class="text-3xl font-bold text-rosepine-foam flex items-center gap-4">
      <span class="w-12 h-[1px] bg-rosepine-foam/50"></span>
      Featured Projects
    </h2>
    <a
      href="/projects"
      class="text-rosepine-subtle hover:text-rosepine-text flex items-center gap-1 transition-colors group"
    >
      View all <ArrowRight
        size={16}
        class="group-hover:translate-x-1 transition-transform"
      />
    </a>
  </div>

  <div class="grid md:grid-cols-2 gap-8">
    {#if data?.projects && data.projects.length > 0}
      {#each data.projects as project}
        <div class="reveal-card">
          <ProjectCard {...project} />
        </div>
      {/each}
    {/if}
  </div>
</section>

<!-- Bento Grid Section -->
<section class="mb-32">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Location Card -->
    <div class="reveal-card md:col-span-2 h-full">
      <LocationCard />
    </div>

    <!-- Github Card -->
    <div class="reveal-card md:col-span-1 h-full">
      <GithubCard data={github} />
    </div>

    <!-- Latest Posts Card -->
    <div class="reveal-card md:col-span-1 h-full">
      <LatestPostsCard posts={data.posts} />
    </div>
  </div>
</section>
