<template>
  <section
    class="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark"
  >
    <div class="max-w-[1280px] mx-auto flex flex-col items-center gap-12">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto">
        <h2
          class="text-3xl md:text-4xl font-black tracking-tight text-gray-900 dark:text-white"
        >
          Masalah umum <span class="text-red-500">pasangan</span>
        </h2>
      </div>

      <!-- Problem Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        <!-- Card 1 -->
        <div
          class="bg-white dark:bg-card-dark border border-gray-100 dark:border-card-border p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden hover:border-red-500/30"
        >
          <div
            class="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity"
          >
            <span class="material-symbols-outlined text-[7rem] text-red-500"
              >savings</span
            >
          </div>
          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform"
            >
              <span class="material-symbols-outlined text-2xl">savings</span>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Susah nabung bareng
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Uang sering kepakai hal lain karena nggak ada target bersama yang
              jelas.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div
          class="bg-white dark:bg-card-dark border border-gray-100 dark:border-card-border p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden hover:border-orange-500/30"
        >
          <div
            class="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity"
          >
            <span class="material-symbols-outlined text-[7rem] text-orange-500"
              >sentiment_dissatisfied</span
            >
          </div>
          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-2xl bg-orange-50 dark:bg-orange-500/10 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform"
            >
              <span class="material-symbols-outlined text-2xl"
                >sentiment_dissatisfied</span
              >
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Salah paham
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Jarang ngobrol jujur soal perasaan harian, akhirnya meledak.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div
          class="bg-white dark:bg-card-dark border border-gray-100 dark:border-card-border p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden hover:border-yellow-500/30"
        >
          <div
            class="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity"
          >
            <span class="material-symbols-outlined text-[7rem] text-yellow-500"
              >event_busy</span
            >
          </div>
          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-2xl bg-yellow-50 dark:bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition-transform"
            >
              <span class="material-symbols-outlined text-2xl"
                >event_busy</span
              >
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Planning cuma wacana
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              "Mau liburan" atau "mau nikah" cuma jadi omongan tanpa action plan.
            </p>
          </div>
        </div>

        <!-- Card 4 -->
        <div
          class="bg-white dark:bg-card-dark border border-gray-100 dark:border-card-border p-6 rounded-3xl shadow-sm hover:shadow-xl transition-all group relative overflow-hidden hover:border-blue-500/30"
        >
          <div
            class="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity"
          >
            <span class="material-symbols-outlined text-[7rem] text-blue-500"
              >imagesmode</span
            >
          </div>
          <div class="relative z-10">
            <div
              class="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4 group-hover:scale-110 transition-transform"
            >
              <span class="material-symbols-outlined text-2xl"
                >imagesmode</span
              >
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Kenangan tercecer
            </h3>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Foto dan momen penting hilang tertimbun ribuan chat gak penting.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
