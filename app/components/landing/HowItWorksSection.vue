<template>
  <section
    class="py-20 px-4 md:px-10 bg-white dark:bg-background-dark border-y border-gray-100 dark:border-card-border"
  >
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2
          class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white"
        >
          Cara Pakai
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Connecting Line (Desktop) -->
        <div
          class="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 dark:bg-card-border -z-10"
        ></div>

        <!-- Step 1 -->
        <div class="flex flex-col items-center text-center">
          <div
            class="w-24 h-24 rounded-full bg-white dark:bg-card-dark border-4 border-primary/20 flex items-center justify-center mb-6 shadow-lg relative z-10"
          >
            <div
              class="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-background-dark font-black text-2xl"
            >
              1
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Daftar & Hubungkan
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
            Buat akun dan kirim undangan email ke pasanganmu. Verifikasi untuk
            mulai terhubung.
          </p>
        </div>

        <!-- Step 2 -->
        <div class="flex flex-col items-center text-center">
          <div
            class="w-24 h-24 rounded-full bg-white dark:bg-card-dark border-4 border-blue-500/20 flex items-center justify-center mb-6 shadow-lg relative z-10"
          >
            <div
              class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-black text-2xl"
            >
              2
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Atur Target & Plan
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
            Diskusikan dan input target tabungan, agenda penting, dan milestone
            yang ingin dicapai.
          </p>
        </div>

        <!-- Step 3 -->
        <div class="flex flex-col items-center text-center">
          <div
            class="w-24 h-24 rounded-full bg-white dark:bg-card-dark border-4 border-pink-500/20 flex items-center justify-center mb-6 shadow-lg relative z-10"
          >
            <div
              class="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white font-black text-2xl"
            >
              3
            </div>
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
            Isi Harian & Evaluasi
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm max-w-xs">
            Update mood, checklist to-do, dan tabungan. Review progress kalian
            setiap minggu.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
