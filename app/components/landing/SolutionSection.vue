<template>
  <section
    class="py-20 px-4 md:px-10 bg-white dark:bg-card-dark overflow-hidden"
  >
    <div class="max-w-[1280px] mx-auto">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <!-- Left Content -->
        <div class="flex-1 space-y-8">
          <div class="space-y-4">
            <h2
              class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white leading-tight"
            >
              Satu tempat untuk semua
              <span class="text-primary">hal penting.</span>
            </h2>
          </div>

          <div class="space-y-6">
            <!-- Point 1 -->
            <div class="flex gap-4 items-start">
              <div
                class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0"
              >
                <span class="material-symbols-outlined"
                  >account_balance_wallet</span
                >
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-1"
                >
                  Keuangan Bersama
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Atur target tabungan, catat pengeluaran, dan pantau progress
                  tanpa ribet.
                </p>
              </div>
            </div>

            <!-- Point 2 -->
            <div class="flex gap-4 items-start">
              <div
                class="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 mt-1 shrink-0"
              >
                <span class="material-symbols-outlined">favorite</span>
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-1"
                >
                  Check-in Emosi Harian
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Pahami perasaan pasangan setiap hari lewat fitur mood tracker
                  sederhana.
                </p>
              </div>
            </div>

            <!-- Point 3 -->
            <div class="flex gap-4 items-start">
              <div
                class="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mt-1 shrink-0"
              >
                <span class="material-symbols-outlined">edit_calendar</span>
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-1"
                >
                  Planning Terukur
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Ubah wacana jadi rencana nyata dengan deadline dan evaluasi
                  berkala.
                </p>
              </div>
            </div>

            <!-- Point 4 -->
            <div class="flex gap-4 items-start">
              <div
                class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mt-1 shrink-0"
              >
                <span class="material-symbols-outlined">timeline</span>
              </div>
              <div>
                <h3
                  class="text-xl font-bold text-gray-900 dark:text-white mb-1"
                >
                  Timeline Rapih
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Simpan momen penting dan milestone hubungan dalam satu
                  timeline indah.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Visual -->
        <div class="flex-1 w-full relative">
          <div
            class="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 dark:bg-background-dark/50 border border-gray-200 dark:border-card-border shadow-2xl"
          >
            <!-- Abstract Dashboard Representation -->
            <div
              class="absolute inset-0 bg-cover bg-center"
              style="
                background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtKvnAg9lNYbEYR7nj-t3XNmhsDCrq-alqsKv7StfKRUinwSZPB_DBI5jLbTRHdHyYXolwiYcEzXRJgTzZy9IXiUcXi5RTNh__gVcbVZx63Iyapc6KHDAkPzgAPowJOabiyQd3FCZ8zSB6RA4Pei_jDDZox97MvgsVdwEGepY0WrolKYMlh4et4wNRHWLsOMPIV3Ua_uNTGwSTHlkgiboG2u2ZY0HqQqdSVm6YeFguGMZTY7lTj3K283gmE5hdqiGNBFMqO7WGNFQ');
              "
            ></div>

            <!-- Overlay Elements to Simulate UI -->
            <div
              class="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg"
            >
              <div class="flex items-center gap-4">
                <div
                  class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
                >
                  <span class="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <p class="font-bold text-gray-900 dark:text-white">
                    Goal Tercapai!
                  </p>
                  <p class="text-xs text-text-secondary">
                    Tabungan Liburan ke Bali
                  </p>
                </div>
                <div class="ml-auto font-black text-primary">100%</div>
              </div>
            </div>
          </div>

          <!-- Decorative Blurs -->
          <div
            class="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"
          ></div>
          <div
            class="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
