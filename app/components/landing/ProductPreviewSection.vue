<template>
  <section class="py-20 px-4 md:px-10 bg-background-light dark:bg-background-dark overflow-hidden">
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
          Intip <span class="text-primary">Masa Depan Kalian</span>
        </h2>
        <p class="text-text-secondary text-lg">
          Tampilan antarmuka yang bersih dan intuitif, dirancang khusus untuk pasangan modern.
        </p>
      </div>

      <!-- Mockup Carousel / Static for MVP -->
      <div class="relative w-full max-w-5xl mx-auto">
        <!-- Main Dashboard Mockup -->
        <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 dark:border-card-border bg-white dark:bg-black">
          <div class="aspect-video w-full bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtKvnAg9lNYbEYR7nj-t3XNmhsDCrq-alqsKv7StfKRUinwSZPB_DBI5jLbTRHdHyYXolwiYcEzXRJgTzZy9IXiUcXi5RTNh__gVcbVZx63Iyapc6KHDAkPzgAPowJOabiyQd3FCZ8zSB6RA4Pei_jDDZox97MvgsVdwEGepY0WrolKYMlh4et4wNRHWLsOMPIV3Ua_uNTGwSTHlkgiboG2u2ZY0HqQqdSVm6YeFguGMZTY7lTj3K283gmE5hdqiGNBFMqO7WGNFQ')"></div>
          
          <!-- Mockup Frame UI -->
          <div class="absolute top-0 left-0 right-0 h-8 bg-gray-100 dark:bg-card-border flex items-center px-4 gap-2">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute -bottom-10 -left-10 w-48 p-4 bg-white dark:bg-card-dark rounded-xl shadow-xl border border-gray-100 dark:border-card-border hidden md:block animate-pulse">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-8 h-8 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center">
              <span class="material-symbols-outlined text-sm">favorite</span>
            </div>
            <span class="font-bold text-sm text-gray-900 dark:text-white">Love Streak!</span>
          </div>
          <p class="text-xs text-text-secondary">7 hari berturut-turut check-in emosi.</p>
        </div>

        <div class="absolute -top-10 -right-10 w-56 p-4 bg-white dark:bg-card-dark rounded-xl shadow-xl border border-gray-100 dark:border-card-border hidden md:block animate-bounce" style="animation-duration: 3s">
          <div class="flex items-center gap-3 mb-2">
            <div class="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
              <span class="material-symbols-outlined text-sm">savings</span>
            </div>
            <span class="font-bold text-sm text-gray-900 dark:text-white">Tabungan Nikah</span>
          </div>
          <div class="w-full bg-gray-200 dark:bg-black/40 rounded-full h-2 overflow-hidden">
            <div class="bg-primary h-2 rounded-full" style="width: 75%"></div>
          </div>
          <p class="text-right text-xs font-bold text-primary mt-1">75% Terkumpul</p>
        </div>
      </div>
    </div>
  </section>
</template>
