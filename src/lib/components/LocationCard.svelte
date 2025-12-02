<script lang="ts">
  import { onMount } from "svelte";
  import locationData from "$lib/data/location.json";

  let time = "";

  function updateTime() {
    const now = new Date();
    time = now.toLocaleTimeString("en-US", {
      timeZone: locationData.timezone,
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  onMount(() => {
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  });
</script>

<div
  class="relative w-full h-full min-h-[300px] bg-rosepine-surface rounded-xl overflow-hidden border border-rosepine-highlightLow group hover:border-rosepine-highlightMed transition-colors"
>
  <!-- Map Background (Yandex Static Map) -->
  <div
    class="absolute inset-0 z-0 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
  >
    <img
      src={`https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${locationData.lng},${locationData.lat}&z=11&l=map&size=600,450`}
      alt={`Map of ${locationData.city}`}
      class="w-full h-full object-cover"
    />
  </div>

  <!-- Content Overlay -->
  <div
    class="relative z-10 p-6 h-full flex flex-col justify-between pointer-events-none"
  >
    <div
      class="bg-rosepine-base/80 backdrop-blur-sm p-3 rounded-lg inline-block self-start border border-rosepine-highlightLow"
    >
      <h3
        class="text-rosepine-subtle font-medium mb-1 text-xs uppercase tracking-wider"
      >
        Currently In
      </h3>
      <div class="flex items-center gap-2">
        <div class="relative w-3 h-3">
          <div
            class="w-3 h-3 bg-rosepine-love rounded-full animate-ping absolute inset-0 opacity-75"
          ></div>
          <div class="w-3 h-3 bg-rosepine-love rounded-full relative"></div>
        </div>
        <p class="text-lg font-bold text-rosepine-text">
          {locationData.city}, {locationData.country}
        </p>
      </div>
    </div>

    <div
      class="flex items-center gap-3 mt-auto bg-rosepine-base/80 backdrop-blur-sm p-3 rounded-lg self-start border border-rosepine-highlightLow"
    >
      <div class="w-2 h-2 bg-rosepine-gold rounded-full animate-pulse"></div>
      <p class="text-2xl font-mono font-bold text-rosepine-text tracking-wider">
        {time}
      </p>
    </div>
  </div>
</div>
