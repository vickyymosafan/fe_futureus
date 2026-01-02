<template>
  <div class="relative flex h-full min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-white antialiased overflow-x-hidden">
    <!-- Navbar -->
    <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-border-green px-6 lg:px-10 py-4 bg-surface-dark/95 backdrop-blur-sm sticky top-0 z-50">
      <NuxtLink to="/" class="flex items-center gap-3 text-white">
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
        <h2 class="text-white text-xl font-bold leading-tight tracking-[-0.015em]">FutureUs</h2>
      </NuxtLink>
      <div class="flex items-center gap-4">
        <span class="hidden sm:inline text-sm text-text-secondary font-medium">Belum punya akun?</span>
        <NuxtLink to="/register" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-sm font-bold transition-colors">
          <span class="truncate">Daftar</span>
        </NuxtLink>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex flex-1 justify-center py-8 lg:py-12 px-4">
      <div class="layout-content-container flex flex-col md:flex-row max-w-[1000px] w-full gap-8 lg:gap-16 items-center">
        <!-- Left Column: Visual/Welcome Message -->
        <div class="hidden md:flex flex-1 flex-col gap-6 relative">
          <div class="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
          <div class="relative z-10">
            <h1 class="text-white text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
              Membangun <span class="text-primary">Masa Depan</span> Bersama.
            </h1>
            <p class="text-text-secondary text-lg font-normal leading-relaxed max-w-[400px]">
              Platform terpercaya untuk merencanakan, mengelola, dan merayakan setiap langkah perjalanan cinta Anda.
            </p>
          </div>
          <div class="mt-8 rounded-xl overflow-hidden shadow-2xl border border-border-green/50 relative aspect-video w-full bg-surface-dark">
            <!-- Abstract Gradient/Visual -->
            <div class="absolute inset-0 bg-gradient-to-br from-background-dark via-surface-dark to-input-bg z-0"></div>
            <div class="absolute inset-0 opacity-40" style="background-image: radial-gradient(#326744 1px, transparent 1px); background-size: 20px 20px;"></div>
            <div class="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background-dark to-transparent z-10"></div>
            <div class="absolute inset-0 flex items-center justify-center z-20">
              <span class="material-symbols-outlined text-primary text-6xl opacity-80">favorite</span>
            </div>
            <img alt="" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay" data-alt="Abstract visualization of connection and growth with glowing nodes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPb1RWE1nXp54L59SLxzj_foF_RqafqClQHe6UZ6O5onlQKvz9AcG3vakIHUOiCX_A98k6X_fHJry9az4vvl-e9BV14ahV51CHN54xjuSenc6obvr4xXPscKLHDqtGSh_XY997z9eA13dHC-V7NNh_fzFo1C6o033LbL9UgPgYAZ26Si2gtaXZxvbiDl-xsD854DVIrAgb2lQx7hNS6RuZn-u5Yc_apDbYqb4xjhMOpQHyQzGeIzrB61C10ipnGj1sm294ms4ayEw"/>
          </div>
        </div>

        <!-- Right Column: Login Form -->
        <div class="flex flex-col w-full max-w-[480px] flex-1 bg-surface-dark border border-border-green rounded-2xl p-6 sm:p-8 shadow-xl">
          <!-- Form Header -->
          <div class="flex flex-col gap-2 mb-8">
            <p class="text-white text-3xl font-bold leading-tight tracking-[-0.033em]">Selamat Datang</p>
            <p class="text-text-secondary text-base font-normal">Masuk untuk melanjutkan perjalanan cinta Anda.</p>
          </div>

          <form class="flex flex-col gap-5" @submit.prevent="handleLogin">
            <!-- Email Input -->
            <label class="flex flex-col w-full gap-2">
              <span class="text-white text-sm font-semibold leading-normal">Alamat Email</span>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary z-10 pointer-events-none text-[20px]">mail</span>
                <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-green bg-input-bg focus:border-primary h-12 placeholder:text-text-secondary/50 pl-11 pr-4 text-base font-normal leading-normal transition-all" placeholder="nama@email.com" type="email" autocomplete="email"/>
              </div>
            </label>

            <!-- Password Input -->
            <label class="flex flex-col w-full gap-2">
              <div class="flex justify-between items-center">
                <span class="text-white text-sm font-semibold leading-normal">Kata Sandi</span>
                <button type="button" class="text-primary text-xs font-semibold hover:underline">Lupa Kata Sandi?</button>
              </div>
              <div class="relative flex w-full items-center rounded-lg">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary z-10 pointer-events-none text-[20px]">lock</span>
                <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-green bg-input-bg focus:border-primary h-12 placeholder:text-text-secondary/50 pl-11 pr-12 text-base font-normal leading-normal transition-all" placeholder="Masukan kata sandi" type="password" autocomplete="current-password"/>
                <button class="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center text-text-secondary hover:text-white transition-colors" type="button">
                  <span class="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </label>

            <!-- Submit Button -->
            <button type="submit" class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary hover:bg-[#0fd651] active:scale-[0.98] transition-all text-background-dark text-base font-bold leading-normal tracking-[0.015em] mt-2 shadow-[0_0_15px_rgba(19,236,91,0.2)]">
              <span class="truncate">Masuk</span>
            </button>

            <!-- Divider -->
            <div class="relative flex py-2 items-center">
              <div class="flex-grow border-t border-border-green"></div>
              <span class="flex-shrink mx-4 text-text-secondary text-sm">atau lanjutkan dengan</span>
              <div class="flex-grow border-t border-border-green"></div>
            </div>

            <!-- Google Login -->
            <button class="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-lg h-12 bg-transparent border border-border-green hover:bg-white/5 active:bg-white/10 transition-colors text-white text-sm font-medium leading-normal" type="button">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
                <path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853"></path>
                <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.5166C-0.18551 10.0056 -0.18551 14.0004 1.5166 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path>
                <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50253 9.70575C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335"></path>
              </svg>
              <span>Google</span>
            </button>
          </form>

          <div class="mt-6 text-center md:hidden">
            <p class="text-text-secondary text-sm">
              Belum punya akun? <NuxtLink to="/register" class="text-primary font-bold hover:underline">Daftar</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Subtle Footer Pattern -->
    <footer class="h-2 w-full bg-gradient-to-r from-background-dark via-border-green to-background-dark opacity-30"></footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false // Using independent layout as it is a complete page design
})

useHead({
  title: 'Halaman Login - FutureUs'
})

const router = useRouter()

const handleLogin = () => {
  console.log('Login attempt')
  // TODO: Add actual login logic here
  // On successful login, redirect to connect page
  router.push('/connect')
}
</script>
