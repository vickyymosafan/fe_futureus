<template>
  <section
    id="fitur"
    class="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark"
  >
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2
          class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white"
        >
          6 Fitur <span class="text-primary">Utama</span>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Feature 1: Target Tabungan (Big) -->
        <div
          class="md:col-span-2 bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-card-border p-8 hover:border-primary/50 transition-all hover:shadow-xl group relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"
          >
            <span class="material-symbols-outlined text-[10rem] text-primary"
              >savings</span
            >
          </div>
          <div class="relative z-10 flex flex-col h-full justify-between">
            <div>
              <div
                class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-background-dark transition-colors"
              >
                <span class="material-symbols-outlined text-3xl">savings</span>
              </div>
              <h3
                class="text-2xl font-bold text-gray-900 dark:text-white mb-3"
              >
                Target Tabungan
              </h3>
              <p
                class="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-md"
              >
                Buat target bersama, track setoran masing-masing, dan
                visualisasikan progress bar menuju impian kalian.
              </p>
            </div>
          </div>
        </div>

        <!-- Feature 2: Mood Tracker (Small) -->
        <div
          class="md:col-span-1 bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-card-border p-8 hover:border-pink-500/50 transition-all hover:shadow-xl group"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors"
          >
            <span class="material-symbols-outlined text-3xl">mood</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Mood Tracker Duo
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Update mood harian dan lihat mood pasangan. Bantu kalian lebih peka.
          </p>
        </div>

        <!-- Feature 3: To-Do List (Small) -->
        <div
          class="md:col-span-1 bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-card-border p-8 hover:border-yellow-500/50 transition-all hover:shadow-xl group"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors"
          >
            <span class="material-symbols-outlined text-3xl">check_box</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            To-Do List Bersama
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Jangan ada yang lupa. Catat belanjaan atau tugas rumah dalam satu
            list.
          </p>
        </div>

        <!-- Feature 4: Timeline (Big) -->
        <div
          class="md:col-span-2 bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-card-border p-8 hover:border-blue-500/50 transition-all hover:shadow-xl group relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"
          >
            <span class="material-symbols-outlined text-[10rem] text-blue-500"
              >history_edu</span
            >
          </div>
          <div class="relative z-10">
            <div
              class="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors"
            >
              <span class="material-symbols-outlined text-3xl"
                >history_edu</span
              >
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Relationship Timeline
            </h3>
            <p
              class="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-md"
            >
              Rekam jejak perjalanan kalian. Dari first date, jadian, sampai
              momen-momen kecil yang berkesan.
            </p>
          </div>
        </div>

        <!-- Feature 5: Mode Privat (Small) -->
        <div
          class="md:col-span-1 bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-card-border p-8 hover:border-purple-500/50 transition-all hover:shadow-xl group"
        >
          <div
            class="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors"
          >
            <span class="material-symbols-outlined text-3xl">lock</span>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Mode Privat
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
            Data kalian terenkripsi. Privasi adalah prioritas utama kami.
          </p>
        </div>

        <!-- Feature 6: Challenge (Big - spans 2 cols to complete the pattern) -->
        <div
          class="md:col-span-2 bg-white dark:bg-card-dark rounded-3xl border border-gray-100 dark:border-card-border p-8 hover:border-orange-500/50 transition-all hover:shadow-xl group relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"
          >
            <span class="material-symbols-outlined text-[10rem] text-orange-500"
              >trophy</span
            >
          </div>
          <div class="relative z-10">
            <div
              class="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors"
            >
              <span class="material-symbols-outlined text-3xl">trophy</span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Challenge Bulanan
            </h3>
            <p
              class="text-gray-500 dark:text-gray-400 text-base leading-relaxed max-w-md"
            >
              Seru-seruan bareng dengan tantangan bulanan yang dirancang untuk
              mempererat bonding kalian.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
