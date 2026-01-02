<template>
  <section class="py-24 px-4 md:px-10 bg-primary/10 dark:bg-primary/5">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
        Siap mulai <span class="text-primary">bareng?</span>
      </h2>
      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        Bergabung dengan ribuan pasangan lain yang sudah merencanakan masa depan mereka dengan lebih baik.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <NuxtLink 
          to="/register" 
          class="flex w-full sm:w-auto items-center justify-center rounded-xl h-16 px-10 bg-primary text-background-dark text-xl font-bold hover:bg-[#0fd650] hover:scale-105 transition-all shadow-xl shadow-green-900/20"
        >
          Daftar Gratis Sekarang
        </NuxtLink>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-4 sm:mt-0 sm:ml-6">
          <span class="block font-bold">Free Forever</span>
          untuk fitur dasar. Tanpa kartu kredit.
        </p>
      </div>
    </div>
  </section>
</template>
