<template>
  <div class="py-16 px-4 md:px-10 flex justify-center w-full">
    <div class="max-w-[960px] flex flex-col gap-10 w-full">
      <div class="flex flex-col gap-4 text-center md:text-left">
        <h2 class="text-white text-3xl md:text-4xl font-bold leading-tight">
          Fitur Unggulan
        </h2>
        <p class="text-text-secondary text-lg font-normal leading-normal max-w-[720px]">
          Semua yang Anda butuhkan untuk membangun hubungan yang langgeng dan harmonis.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Feature 1 -->
        <div class="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors group">
          <div class="text-primary p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-background-dark transition-colors">
            <span class="material-symbols-outlined" style="font-size: 32px;">calendar_month</span>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-white text-xl font-bold leading-tight">Kalender Bersama</h3>
            <p class="text-text-secondary text-sm font-normal leading-relaxed">
              Sinkronisasi jadwal kencan, ulang tahun, dan acara penting agar tidak ada momen berharga yang terlewat.
            </p>
          </div>
        </div>
        <!-- Feature 2 -->
        <div class="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors group">
          <div class="text-primary p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-background-dark transition-colors">
            <span class="material-symbols-outlined" style="font-size: 32px;">savings</span>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-white text-xl font-bold leading-tight">Tabungan Impian</h3>
            <p class="text-text-secondary text-sm font-normal leading-relaxed">
              Atur target finansial bersama secara transparan untuk mewujudkan rencana liburan, pernikahan, atau rumah impian.
            </p>
          </div>
        </div>
        <!-- Feature 3 -->
        <div class="flex flex-col gap-4 rounded-xl border border-border-dark bg-surface-dark p-6 hover:border-primary/50 transition-colors group">
          <div class="text-primary p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary group-hover:text-background-dark transition-colors">
            <span class="material-symbols-outlined" style="font-size: 32px;">photo_library</span>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-white text-xl font-bold leading-tight">Jejak Kenangan</h3>
            <p class="text-text-secondary text-sm font-normal leading-relaxed">
              Simpan foto dan cerita momen berharga dalam lini masa digital yang privat, aman, dan hanya untuk kalian berdua.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
