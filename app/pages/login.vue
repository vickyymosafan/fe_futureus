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
            
            <!-- 3D Secure Shield Image -->
            <div class="absolute inset-0 flex items-center justify-center z-10">
               <img 
                src="/images/secure_shield.png" 
                alt="Secure Shield Heart" 
                class="w-full h-full object-cover drop-shadow-[0_0_30px_rgba(74,222,128,0.3)] animate-float mix-blend-screen opacity-90"
               />
            </div>
            
             <!-- Floating Badge -->
            <div class="absolute top-6 right-6 p-2 pr-4 bg-black/40 backdrop-blur-xl rounded-full border border-primary/30 flex items-center gap-3 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-primary/60 transition-colors animate-fade-in delay-500">
               <div class="relative flex items-center justify-center size-8">
                 <div class="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                 <div class="relative w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(74,222,128,1)]"></div>
               </div>
               <span class="text-xs font-bold text-white/90 tracking-wider uppercase">Sistem Aman</span>
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
