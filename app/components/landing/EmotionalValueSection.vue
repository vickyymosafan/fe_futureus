<template>
  <section
    class="py-24 px-4 md:px-10 bg-[#112217] dark:bg-black text-white relative overflow-hidden"
  >
    <!-- Decorative Background -->
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(19,236,91,0.1),transparent_50%)]"
    ></div>
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]"
    ></div>

    <div
      class="max-w-[1280px] mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12"
    >
      <div class="flex-1 space-y-6">
        <h2 class="text-3xl md:text-5xl font-black leading-tight">
          Bukan cuma aplikasi.<br />
          Ini
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400"
            >ruang aman</span
          >
          kalian.
        </h2>

        <div class="flex flex-col gap-4 pt-4">
          <div class="flex items-center gap-4">
            <span class="material-symbols-outlined text-primary text-2xl"
              >lock</span
            >
            <span class="text-lg font-medium">Privasi penuh dua akun</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="material-symbols-outlined text-primary text-2xl"
              >visibility_off</span
            >
            <span class="text-lg font-medium">Tidak ada penilaian publik</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="material-symbols-outlined text-primary text-2xl"
              >chat_bubble_outline</span
            >
            <span class="text-lg font-medium">Fokus ke komunikasi sehat</span>
          </div>
        </div>
      </div>

      <div class="flex-1 flex justify-center">
        <div class="relative w-full max-w-sm">
          <div
            class="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
          ></div>
          <div
            class="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center space-y-6"
          >
            <div
              class="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center text-3xl"
            >
              ❤️
            </div>
            <p class="text-xl font-medium italic">
              "Komunikasi adalah kunci. FutureUs adalah rumah kuncinya."
            </p>
            <div class="h-0.5 w-12 bg-primary mx-auto"></div>
            <p class="text-sm text-white/50">
              Misi kami untuk 1 juta pasangan Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
