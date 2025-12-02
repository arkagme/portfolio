<script lang="ts">
  import { onMount } from "svelte";
  import gsap from "gsap";
  import { Github, Twitter, Mail, Linkedin, Globe } from "@lucide/svelte";

  onMount(() => {
    gsap.from(".animate-item", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    });
  });
</script>

<svelte:head>
  <title>About | Arkaprava Gaine</title>
</svelte:head>

<div class="max-w-5xl mx-auto px-4 py-12">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    
    <!-- Text Column (Order: Last on Mobile, First on Desktop) -->
    <div class="order-last md:order-first space-y-8">
      <!-- Header / Intro -->
      <section class="animate-item">
        <p class="text-lg font-bold text-rosepine-text mb-1">
          Hi, I'm Arkaprava 
          <a href="/socials" class="inline-block text-lg font-medium text-rosepine-rose underline hover:text-rosepine-love transition-colors mb-4">
           [ @arkagme ]
        </a>
        </p>

        <p class="text-lg text-rosepine-subtle leading-relaxed">
          I'm a Backend Developer who loves building things that have real impact. I find it exciting to work on
          systems that solve a problem while scaling and performing efficiently under pressure.
        </p>
      </section>

      <!-- Social Links -->
      <section class="animate-item flex gap-4">
        <a
          href="https://github.com/arkagme"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-lg bg-rosepine-overlay/50 text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-highlightLow transition-all"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://x.com/arka_gme"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-lg bg-rosepine-overlay/50 text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-highlightLow transition-all"
          aria-label="Twitter"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://linkedin.com/in/arkagme"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-lg bg-rosepine-overlay/50 text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-highlightLow transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:codearka2002@gmail.com"
          class="p-2 rounded-lg bg-rosepine-overlay/50 text-rosepine-subtle hover:text-rosepine-text hover:bg-rosepine-highlightLow transition-all"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </section>

      <!-- Narrative Content -->
      <section class="animate-item space-y-6 text-rosepine-text leading-relaxed">
        <p>
          I have been passionate about technology since I was kid and it was something that always fascinated me, tinkering with Turtle , HTML , Visual Basic etc. 
          That curiosity was also the reason why I chose to pursue Computer Science & Engineering as my major.
        </p>
        
        <p>
          Over the years I've worked in different domains of technology ranging from <span class="text-rosepine-iris">APIs</span> , <span class="text-rosepine-iris">ML and DL</span> to <span class="text-rosepine-iris">AR experiences</span> and <span class="text-rosepine-iris">GenAI</span>. But most of my experience lies in building backend systems and full stack products 
          like <a href="https://email.arkagme.me" class="text-rosepine-foam">Inbox Insight</a> , <a href="https://qr.arkagme.me" class="text-rosepine-foam">Dynamic QR Tool</a>
        </p>

        <p>
        I have also worked as a <span class="text-rosepine-iris">Backend Developer intern </span> in the founding engineering team of an early stage startup where I translated problem statement into <span class="text-rosepine-iris">DB schemas</span> , <span class="text-rosepine-iris">System Architecture</span> , User flows and translated that into API endpoints with <span class="text-rosepine-foam">Typescript</span> and <span class="text-rosepine-foam">PostgreSQL.</span>
        I have also won top 5 positions in two national level hackathons : <span class="text-rosepine-iris">3rd position</span> in <a href="https://www.intel.com/content/www/us/en/developer/tools/oneapi/overview.html" class="text-rosepine-foam">Intel OneAPI</a> Hackathon and <span class="text-rosepine-iris">4th position</span> in <a href="https://xathon.mettl.com/event/visionary-hackathon" class="text-rosepine-foam"> Visionary AR Hackathon </a> hosted by <a href="https://xathon.mettl.com/" class="text-rosepine-foam">Mercer|Mettl</a>
        </p>

        <p>
          When I'm not coding, you can find me working on my creative side , building animations on Blender , exploring AR experiences . trying to emulate cool stuff I find on the internet , working on hardware , reading about space exploration or trying to brew the perfect cup of coffee.
        </p>
      </section>

      <!-- Webrings / Footer-like content -->
      <section class="animate-item border-t border-rosepine-highlightLow pt-8">
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="/blog" class="text-rosepine-love hover:underline">Read my blog</a>
          <a href="/projects" class="text-rosepine-love hover:underline">Check out my projects</a>
          <a href="/rss.xml" class="text-rosepine-love hover:underline">RSS Feed</a>
        </div>
      </section>
    </div>

    <!-- Image Column (Order: First on Mobile, Last on Desktop) -->
    <div class="order-first md:order-last animate-item">
      <div class="relative aspect-[3/4] md:aspect-auto md:h-[600px] w-full overflow-hidden rounded-2xl bg-rosepine-highlightLow shadow-lg group">
        <img 
          src="/picture.webp" 
          alt="Profile Pic" 
          class="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-rosepine-base/90 to-transparent md:hidden">
          <p class="text-sm font-medium text-rosepine-subtle">Just me speaking in an event</p>
        </div>
      </div>
    </div>

  </div>
</div>
