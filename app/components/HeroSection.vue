<template>
  <div class="relative flex flex-col items-center justify-center p-4 md:p-6 min-h-[600px] md:min-h-[85vh]">
    <div 
      class="w-full max-w-[1280px] rounded-2xl overflow-hidden relative min-h-[550px] flex flex-col items-center justify-center text-center p-6 md:p-12 bg-cover bg-center shadow-2xl" 
      data-alt="Happy couple planning their future together" 
      :style="heroStyle"
    >
      <div class="relative z-10 flex flex-col gap-6 max-w-4xl items-center animate-fade-in-up">
        <h1 class="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight drop-shadow-lg">
          Rencanakan hubungan kalian. <span class="text-primary block mt-2">Bareng dan terarah.</span>
        </h1>
        <h2 class="text-gray-100/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl drop-shadow-md">
          Keuangan, emosi, planning, dan kenangan dalam satu tempat privat.
        </h2>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8 w-full sm:w-auto">
          <NuxtLink to="/register" class="flex items-center justify-center rounded-xl h-14 px-8 bg-primary text-background-dark text-lg font-bold hover:bg-[#0fd650] hover:scale-105 transition-all shadow-[0_0_30px_rgba(19,236,91,0.4)] w-full sm:w-auto">
            Mulai Bareng Pasangan
          </NuxtLink>
          <a href="#fitur" class="flex items-center justify-center rounded-xl h-14 px-8 bg-white/10 backdrop-blur-md border border-white/20 text-white text-lg font-bold hover:bg-white/20 transition-all w-full sm:w-auto">
            Lihat Fitur
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const heroStyle = {
  backgroundImage: 'linear-gradient(rgba(17, 34, 23, 0.7) 0%, rgba(17, 34, 23, 0.85) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCR0boYtrRTXA9sl45rG_q95PPMIYU_gjRr62TfR16PlbGmOfGcKsK_1YHIkHa3klbT7oFXOKhFV4elWd3okEnCsKJcqwTqRjbDHdXRUuBH-pqp3AEV5wbqQ_xYZpeZQcyNeA1vQTVkrriLUhQmlSMplmEAe4sDRsn410II2JWE5uzXSLdXVUwdZopW6RfVDGlDG_wobNn3XwmrvEe9udi5502UebsXMcLv6K29cqkWPTTzNn924PdlYfil4D98GH67InX1RykS4oY")'
}
</script>
