<template>
  <section
    class="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark"
  >
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2
          class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white"
        >
          Cocok untuk
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Use Case 1 -->
        <div
          class="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark p-8 border border-gray-100 dark:border-card-border shadow-sm hover:shadow-xl transition-all hover:border-blue-500/30"
        >
          <div
            class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
          >
            <span class="material-symbols-outlined text-8xl text-blue-500"
              >flight_takeoff</span
            >
          </div>
          <h3
            class="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative z-10"
          >
            Pejuang LDR
          </h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6 relative z-10">
            Jarak bukan masalah kalau komunikasi lancar. Mood tracker dan
            countdown bikin kalian berasa dekat terus.
          </p>
          <ul class="space-y-2 relative z-10">
            <li
              class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <span class="material-symbols-outlined text-primary text-base"
                >check</span
              >
              Mood check-in harian
            </li>
            <li
              class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <span class="material-symbols-outlined text-primary text-base"
                >check</span
              >
              Countdown pertemuan
            </li>
          </ul>
        </div>

        <!-- Use Case 2 -->
        <div
          class="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark p-8 border border-gray-100 dark:border-card-border shadow-sm hover:shadow-xl transition-all hover:border-pink-500/30"
        >
          <div
            class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
          >
            <span class="material-symbols-outlined text-8xl text-pink-500"
              >diamond</span
            >
          </div>
          <h3
            class="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative z-10"
          >
            Go to Halal
          </h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6 relative z-10">
            Fokus nabung buat nikah? Kami bantu track tabungan bersama sampai
            hari H tanpa drama.
          </p>
          <ul class="space-y-2 relative z-10">
            <li
              class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <span class="material-symbols-outlined text-primary text-base"
                >check</span
              >
              Target tabungan visual
            </li>
            <li
              class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <span class="material-symbols-outlined text-primary text-base"
                >check</span
              >
              Checklist persiapan nikah
            </li>
          </ul>
        </div>

        <!-- Use Case 3 -->
        <div
          class="group relative overflow-hidden rounded-3xl bg-white dark:bg-card-dark p-8 border border-gray-100 dark:border-card-border shadow-sm hover:shadow-xl transition-all hover:border-purple-500/30"
        >
          <div
            class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"
          >
            <span class="material-symbols-outlined text-8xl text-purple-500"
              >work</span
            >
          </div>
          <h3
            class="text-2xl font-bold text-gray-900 dark:text-white mb-2 relative z-10"
          >
            Pasangan Sibuk
          </h3>
          <p class="text-gray-500 dark:text-gray-400 mb-6 relative z-10">
            Sama-sama kerja keras? Pastikan hubungan tetap terawat dengan
            manajemen waktu yang efisien.
          </p>
          <ul class="space-y-2 relative z-10">
            <li
              class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <span class="material-symbols-outlined text-primary text-base"
                >check</span
              >
              Sync kalender bersama
            </li>
            <li
              class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
            >
              <span class="material-symbols-outlined text-primary text-base"
                >check</span
              >
              Reminder date night
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
