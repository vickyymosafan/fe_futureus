<template>
  <div class="relative flex flex-col items-center justify-center p-4 md:p-10 min-h-[600px] md:min-h-[80vh]">
    <div 
      class="w-full max-w-[1280px] rounded-xl overflow-hidden relative min-h-[500px] flex flex-col items-center justify-center text-center p-6 md:p-12 bg-cover bg-center" 
      data-alt="Happy couple smiling at each other in a warm outdoor setting at sunset" 
      :style="heroStyle"
    >
      <div class="relative z-10 flex flex-col gap-6 max-w-3xl items-center">
        <h1 class="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
          Rencanakan Masa Depan <span class="text-primary">Bersama.</span>
        </h1>
        <h2 class="text-gray-200 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
          FutureUs adalah ruang digital privat untuk pasangan mengatur impian, kenangan, dan keseharian dalam satu harmoni.
        </h2>
        <div class="flex flex-wrap gap-4 justify-center mt-4">
          <NuxtLink to="/login" class="flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold hover:bg-[#0fd650] hover:scale-105 transition-all shadow-[0_0_20px_rgba(19,236,91,0.3)]">
            <span class="truncate">Daftar Sekarang</span>
          </NuxtLink>
          <NuxtLink to="/login" class="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-base font-bold hover:bg-white/20 transition-all">
            <span class="truncate">Masuk</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroStyle = {
  backgroundImage: 'linear-gradient(rgba(16, 34, 22, 0.6) 0%, rgba(16, 34, 22, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR0boYtrRTXA9sl45rG_q95PPMIYU_gjRr62TfR16PlbGmOfGcKsK_1YHIkHa3klbT7oFXOKhFV4elWd3okEnCsKJcqwTqRjbDHdXRUuBH-pqp3AEV5wbqQ_xYZpeZQcyNeA1vQTVkrriLUhQmlSMplmEAe4sDRsn410II2JWE5uzXSLdXVUwdZopW6RfVDGlDG_wobNn3XwmrvEe9udi5502UebsXMcLv6K29cqkWPTTzNn924PdlYfil4D98GH67InX1RykS4oY")'
}
</script>
