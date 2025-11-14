<template>
  <div class="font-display bg-background-dark text-white antialiased selection:bg-primary selection:text-background-dark min-h-screen flex w-full">
    <!-- Navbar -->
    <header class="fixed top-0 w-full flex items-center justify-between whitespace-nowrap border-b border-white/5 px-6 lg:px-10 py-4 bg-background-dark/80 backdrop-blur-xl z-50 transition-all duration-300">
      <NuxtLink to="/" class="flex items-center gap-3 text-white group">
        <div class="size-8 text-primary group-hover:scale-110 transition-transform duration-300">
          <svg class="w-full h-full drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
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
      <div class="flex items-center gap-6">
        <span class="hidden sm:inline text-sm text-gray-400 font-medium">Belum punya akun?</span>
        <NuxtLink to="/register" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-5 bg-white/5 hover:bg-white/10 text-primary border border-primary/20 hover:border-primary/50 text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] active:scale-95">
          <span class="truncate">Daftar</span>
        </NuxtLink>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex flex-1 justify-center items-center py-20 lg:py-12 px-4 min-h-screen relative overflow-hidden">
      <!-- Background Patterns -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div class="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse-slow"></div>
        <div class="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] opacity-30 animate-pulse-slow delay-1000"></div>
      </div>

      <div class="layout-content-container flex flex-col md:flex-row max-w-[1100px] w-full gap-12 lg:gap-24 items-center relative z-10">
        <!-- Left Column: Visual/Welcome Message -->
        <div class="hidden md:flex flex-1 flex-col gap-8 relative stagger-container">
          <div class="relative z-10 opacity-0 animate-fade-in-down delay-100">
            <h1 class="text-white text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] mb-6 drop-shadow-xl">
              Kembali <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Terhubung.</span>
            </h1>
            <p class="text-gray-400 text-lg font-normal leading-relaxed max-w-[450px]">
              Lanjutkan perencanaan masa depan Anda bersama pasangan. Semua data tersimpan aman.
            </p>
          </div>
          
          <!-- Glass Card Visual -->
          <div class="mt-4 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative aspect-[16/9] w-full bg-white/5 backdrop-blur-md group hover:border-primary/30 transition-all duration-500 opacity-0 animate-scale-in delay-300 hover:-translate-y-2">
            <!-- Abstract Gradient/Visual -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/40 z-0"></div>
            <div class="absolute inset-0 flex items-center justify-center z-20">
              <div class="relative">
                <div class="absolute inset-0 bg-primary/30 blur-2xl rounded-full"></div>
                <span class="material-symbols-outlined text-white/90 text-7xl relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500">favorite</span>
              </div>
            </div>
            
             <!-- Floating Elements -->
            <div class="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 flex gap-3 animate-float">
               <div class="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,1)]"></div>
               <span class="text-xs font-bold text-white/80">Sistem Aman</span>
            </div>
          </div>
        </div>

        <!-- Right Column: Login Form -->
        <div class="flex flex-col w-full max-w-[480px] flex-1">
           <div class="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl stagger-form">
            <!-- Form Header -->
            <div class="flex flex-col gap-2 mb-10">
              <p class="text-white text-4xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">Selamat Datang</p>
              <p class="text-gray-400 text-base font-normal">Masuk untuk melanjutkan perjalanan cinta Anda.</p>
            </div>

            <form class="flex flex-col gap-6" @submit.prevent="handleLogin">
              <!-- Email Input -->
              <div class="space-y-2 group">
                <label class="text-xs font-bold text-gray-500 group-focus-within:text-primary transition-colors ml-1 uppercase tracking-wider">Alamat Email</label>
                <div class="relative">
                  <div class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors pointer-events-none">
                    <span class="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <input 
                    v-model="email"
                    class="w-full h-16 rounded-2xl border bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 placeholder-gray-600 px-6 pl-14 text-lg font-medium text-white transition-all outline-none" 
                    placeholder="nama@email.com" 
                    type="email" 
                    autocomplete="email"
                  />
                </div>
              </div>

              <!-- Password Input -->
              <div class="space-y-2 group">
                <div class="flex justify-between items-center">
                  <label class="text-xs font-bold text-gray-500 group-focus-within:text-primary transition-colors ml-1 uppercase tracking-wider">Kata Sandi</label>
                  <button type="button" class="text-primary/80 hover:text-primary text-xs font-bold transition-colors hover:underline decoration-primary/50 underline-offset-4">Lupa Kata Sandi?</button>
                </div>
                <div class="relative flex w-full items-center rounded-lg">
                  <div class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors pointer-events-none">
                    <span class="material-symbols-outlined text-2xl">lock</span>
                  </div>
                  <input 
                    v-model="password"
                    class="w-full h-16 rounded-2xl border bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 placeholder-gray-600 px-6 pl-14 pr-14 text-lg font-medium text-white transition-all outline-none" 
                    placeholder="Masukan kata sandi" 
                    :type="showPassword ? 'text' : 'password'" 
                    autocomplete="current-password"
                  />
                  <button 
                    class="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-white/5" 
                    type="button"
                    @click="showPassword = !showPassword"
                  >
                    <span class="material-symbols-outlined text-xl">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                  </button>
                </div>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-14 bg-primary hover:bg-[#0fd651] active:scale-[0.98] transition-all text-background-dark text-lg font-black leading-normal tracking-wide mt-2 shadow-[0_0_25px_rgba(19,236,91,0.3)] hover:shadow-[0_0_35px_rgba(19,236,91,0.5)] group disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="isLoading"
              >
                 <span v-if="!isLoading" class="flex items-center gap-2">
                  Masuk
                   <span class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">login</span>
                </span>
                <span v-else class="material-symbols-outlined animate-spin">progress_activity</span>
              </button>

              <!-- Divider -->
              <div class="relative flex py-2 items-center">
                <div class="flex-grow border-t border-white/10"></div>
                <span class="flex-shrink mx-4 text-gray-500 text-xs font-bold tracking-widest uppercase">atau lanjutkan dengan</span>
                <div class="flex-grow border-t border-white/10"></div>
              </div>

              <!-- Google Login -->
              <button class="flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-2xl h-14 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:bg-white/15 transition-all text-white text-base font-bold leading-normal group" type="button">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4"></path>
                  <path d="M12.24 24.0008C15.4765 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.24 24.0008Z" fill="#34A853"></path>
                  <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.5166C-0.18551 10.0056 -0.18551 14.0004 1.5166 17.3912L5.50253 14.3003Z" fill="#FBBC05"></path>
                  <path d="M12.24 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.24 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50253 9.70575C6.45064 6.86173 9.10947 4.74966 12.24 4.74966Z" fill="#EA4335"></path>
                </svg>
                <span>Google</span>
              </button>
            </form>

            <div class="mt-8 text-center md:hidden">
              <p class="text-gray-400 text-sm">
                Belum punya akun? <NuxtLink to="/register" class="text-primary font-bold hover:underline decoration-primary/50 underline-offset-4">Daftar Sekarang</NuxtLink>
              </p>
            </div>
           </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false // Using independent layout as it is a complete page design
})

useHead({
  title: 'Masuk - FutureUs'
})

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  console.log('Login attempt', { email: email.value, password: password.value })
  
  // Simulate API Delay
  await new Promise(resolve => setTimeout(resolve, 1500))

  // TODO: Add actual login logic here
  // On successful login, redirect to connect page
  router.push('/connect')
  isLoading.value = false
}
</script>

<style scoped>
/* Custom Animations (Shared with Register) */
@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes pulseSlow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.1); }
}

.animate-fade-in-down { animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-scale-in { animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }

.stagger-form > * {
  opacity: 0;
  animation: fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.stagger-form > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-form > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-form > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-form > *:nth-child(4) { animation-delay: 0.4s; }
.stagger-form > *:nth-child(5) { animation-delay: 0.5s; }
</style>
