<template>
  <div class="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen flex flex-col overflow-x-hidden">
    <!-- Navbar -->
    <nav class="w-full border-b border-gray-200 dark:border-[#23482f] px-6 py-4 bg-white dark:bg-[#112217]">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center gap-4 text-slate-900 dark:text-white">
          <div class="size-8 text-primary">
            <svg class="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_6_535)">
                <path clip-rule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fill-rule="evenodd"></path>
              </g>
              <defs>
                <clipPath id="clip0_6_535"><rect fill="white" height="48" width="48"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h2 class="text-xl font-bold leading-tight tracking-tight">FutureUs</h2>
        </NuxtLink>
        
        <div class="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div class="flex items-center gap-9">
            <NuxtLink to="/" class="text-sm font-medium hover:text-primary transition-colors">Beranda</NuxtLink>
            <a href="#fitur" class="text-sm font-medium hover:text-primary transition-colors">Fitur</a>
            <a href="#tentang" class="text-sm font-medium hover:text-primary transition-colors">Tentang Kami</a>
          </div>
          <div class="flex items-center gap-4">
            <!-- Profile Avatar -->
            <button type="button" class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#23482f] hover:bg-slate-200 dark:hover:bg-[#326744] transition-colors">
              <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <span class="material-symbols-outlined text-sm">person</span>
              </div>
              <span class="text-sm font-bold pr-1">Akun Saya</span>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu Icon -->
        <button type="button" class="md:hidden text-slate-900 dark:text-white">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 flex justify-center py-10 px-4 md:px-10">
      <div class="w-full max-w-[960px] flex flex-col gap-8">
        <!-- Page Heading & Intro -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-gray-200 dark:border-[#23482f]">
          <div class="flex flex-col gap-3 max-w-2xl">
            <h1 class="text-3xl md:text-5xl font-black leading-tight tracking-tight">
              Hubungkan <span class="text-primary">FutureUs</span> Anda
            </h1>
            <p class="text-slate-500 dark:text-[#92c9a4] text-lg font-normal leading-relaxed">
              Mulai perjalanan masa depan kalian bersama. Masukkan email pasanganmu untuk menyinkronkan impian finansial dan rencana hidup.
            </p>
          </div>
          
          <!-- Status Badge -->
          <div class="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm">
            <span class="material-symbols-outlined text-sm filled">info</span>
            <span class="text-sm font-bold">Akun Belum Terhubung</span>
          </div>
        </div>

        <!-- Main Interactive Section -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <!-- Left Column: Form -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            <!-- Connection Card -->
            <div class="bg-white dark:bg-surface-dark rounded-xl p-6 shadow-sm border border-gray-200 dark:border-[#326744]">
              <div class="flex flex-col gap-6">
                <div class="flex flex-col gap-1">
                  <h3 class="text-xl font-bold">Kirim Undangan</h3>
                  <p class="text-sm text-slate-500 dark:text-slate-400">Satu akun hanya untuk satu pasangan demi privasi maksimal.</p>
                </div>
                
                <form class="flex flex-col gap-5" @submit.prevent="handleSendInvitation">
                  <label class="flex flex-col w-full gap-2">
                    <span class="text-base font-medium">Email Pasangan</span>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <span class="material-symbols-outlined text-slate-400">mail</span>
                      </div>
                      <input 
                        v-model="partnerEmail"
                        class="w-full h-14 pl-12 pr-4 rounded-lg bg-slate-50 dark:bg-[#193322] border border-slate-200 dark:border-[#326744] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none placeholder:text-slate-400 dark:placeholder:text-[#5c8a6e] transition-all" 
                        placeholder="contoh@email.com" 
                        required
                        type="email"
                        autocomplete="email"
                      />
                    </div>
                  </label>
                  
                  <button 
                    class="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-green-400 text-black font-bold rounded-lg shadow-lg shadow-green-900/20 transition-all transform active:scale-95 flex items-center justify-center gap-2 group" 
                    type="submit"
                  >
                    <span>Kirim Undangan</span>
                    <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                  </button>
                </form>
              </div>
            </div>

            <!-- Steps/Info -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div class="flex flex-col gap-2 p-4 rounded-lg bg-slate-50 dark:bg-[#193322]/50 border border-transparent dark:border-[#23482f]">
                <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-[#23482f] flex items-center justify-center text-slate-600 dark:text-white font-bold text-sm mb-1">1</div>
                <h4 class="font-bold text-sm">Kirim Undangan</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">Masukkan email pasanganmu di form di atas.</p>
              </div>
              <div class="flex flex-col gap-2 p-4 rounded-lg bg-slate-50 dark:bg-[#193322]/50 border border-transparent dark:border-[#23482f]">
                <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-[#23482f] flex items-center justify-center text-slate-600 dark:text-white font-bold text-sm mb-1">2</div>
                <h4 class="font-bold text-sm">Tunggu Konfirmasi</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">Pasanganmu akan menerima email untuk menyetujui.</p>
              </div>
              <div class="flex flex-col gap-2 p-4 rounded-lg bg-slate-50 dark:bg-[#193322]/50 border border-transparent dark:border-[#23482f]">
                <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-[#23482f] flex items-center justify-center text-slate-600 dark:text-white font-bold text-sm mb-1">3</div>
                <h4 class="font-bold text-sm">Mulai Bersama</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400">Akses fitur perencanaan bersama setelah terhubung.</p>
              </div>
            </div>
          </div>

          <!-- Right Column: Status -->
          <div class="lg:col-span-5">
            <div class="h-full flex flex-col rounded-xl bg-slate-100 dark:bg-[#13261b] border border-dashed border-slate-300 dark:border-[#326744] p-8 items-center justify-center text-center relative overflow-hidden group">
              <!-- Decorative background -->
              <div class="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
                <div class="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
                <div class="absolute bottom-10 right-10 w-24 h-24 bg-blue-500 rounded-full blur-3xl"></div>
              </div>
              
              <!-- Status Icon -->
              <div class="w-20 h-20 rounded-full bg-slate-200 dark:bg-[#23482f] flex items-center justify-center mb-6 relative z-10">
                <span class="material-symbols-outlined text-4xl text-slate-400 dark:text-[#5c8a6e]">link_off</span>
              </div>
              
              <div class="flex flex-col gap-2 max-w-xs relative z-10">
                <h3 class="text-lg font-bold">Status Koneksi</h3>
                <p class="text-sm text-slate-500 dark:text-[#92c9a4]">
                  Belum ada undangan terkirim atau diterima. Gunakan formulir di sebelah kiri untuk memulai.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="mt-8 pt-8 border-t border-gray-200 dark:border-[#23482f]">
          <h3 class="text-lg font-bold mb-4">Pertanyaan Umum</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <details class="group bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-[#326744] open:ring-1 open:ring-primary/20">
              <summary class="flex justify-between items-center cursor-pointer p-4 font-medium select-none">
                <span>Apakah data kami aman?</span>
                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div class="px-4 pb-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Ya, privasi adalah prioritas kami. Data keuangan dan pribadi Anda dienkripsi dan hanya dapat diakses oleh Anda dan pasangan yang terhubung.
              </div>
            </details>
            <details class="group bg-white dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-[#326744]">
              <summary class="flex justify-between items-center cursor-pointer p-4 font-medium select-none">
                <span>Bagaimana jika saya salah memasukkan email?</span>
                <span class="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <div class="px-4 pb-4 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Anda dapat membatalkan undangan yang berstatus "Menunggu" kapan saja dari dashboard ini dan mengirim ulang ke alamat yang benar.
              </div>
            </details>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="py-6 text-center text-sm text-slate-500 dark:text-[#5c8a6e]">
      <p>© 2024 FutureUs. Dibuat dengan cinta untuk masa depan.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

useHead({
  title: 'Halaman Sambungkan Pasangan - FutureUs'
})

const partnerEmail = ref('')

const handleSendInvitation = () => {
  console.log('Sending invitation to:', partnerEmail.value)
  // TODO: Implement actual invitation logic
}
</script>
