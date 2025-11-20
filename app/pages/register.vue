<template>
  <div class="font-display bg-background-dark text-white antialiased selection:bg-primary selection:text-background-dark min-h-screen flex w-full">
    <!-- Left Section: Visual/Hero (Hidden on mobile) -->
    <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-background-dark items-center justify-center">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-background-dark/95 via-background-dark/60 to-background-dark/90 z-10"></div>
      <img 
        alt="Abstract dark green connections representing future" 
        class="absolute inset-0 w-full h-full object-cover opacity-60" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsV2xltUU9n2yq-ymhNQhWdTZ68JPg3txoz--UER9gZqHUX9lqpoVN6stfGmBwDVnz6wfd-y33C7emCBolkKbKPs6vj2axOKmbjuLxPyulqObtLJ5ML3TepYi4vwK8lJTyWcAT8evclMsngRZV7txCFDRPZjo-cJcYZoQiZMOi9q7NYLBkajzLnaJxIDk-igT1tR2zG1gN-fqfVCLYuUzoR3-0PlpwhOIMCSpkNUq6zYoQDO3qzL7eS8GK1aXiL6CKvpmQZz_Hgfk"
        loading="lazy"
      />
      
      <!-- Content on top of image -->
      <div class="relative z-20 max-w-lg px-12 text-center stagger-container">
        <div class="mb-8 flex justify-center opacity-0 animate-fade-in-down delay-100">
          <div class="p-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl skew-y-3">
            <span class="material-symbols-outlined text-primary text-5xl drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">volunteer_activism</span>
          </div>
        </div>
        <h2 class="text-5xl font-black text-white mb-6 leading-tight tracking-tight opacity-0 animate-fade-in delay-200">
          Membangun Masa Depan<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">Bersama-sama</span>
        </h2>
        <p class="text-gray-400 text-xl font-medium leading-relaxed mb-12 opacity-0 animate-fade-in delay-300">
          Bergabunglah dengan ribuan pasangan lain yang merencanakan tujuan hidup, keuangan, dan impian mereka di FutureUs.
        </p>
        
        <!-- Testimonial Card (Glassmorphism) -->
        <div class="text-left bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:border-primary/30 transition-all opacity-0 animate-scale-in delay-500 hover:-translate-y-1 duration-300">
          <div class="flex gap-1 mb-4">
            <span class="material-symbols-outlined text-yellow-400 text-lg">star</span>
            <span class="material-symbols-outlined text-yellow-400 text-lg">star</span>
            <span class="material-symbols-outlined text-yellow-400 text-lg">star</span>
            <span class="material-symbols-outlined text-yellow-400 text-lg">star</span>
            <span class="material-symbols-outlined text-yellow-400 text-lg">star</span>
          </div>
          <p class="text-gray-200 italic text-lg leading-relaxed mb-6 font-medium">"FutureUs membantu kami menyelaraskan visi kami sebelum menikah. Sangat direkomendasikan!"</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-emerald-600 p-[2px]">
              <div class="w-full h-full rounded-full bg-background-dark flex items-center justify-center">
                 <span class="font-bold text-primary">AS</span>
              </div>
            </div>
            <div>
              <p class="text-white text-sm font-bold tracking-wide">Andi &amp; Sarah</p>
              <p class="text-gray-500 text-xs uppercase tracking-wider font-semibold">Jakarta, Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section: Registration Form -->
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 relative bg-background-dark">
      <!-- Mobile Header (Logo) -->
      <NuxtLink to="/" class="absolute top-6 left-6 lg:top-10 lg:left-12 flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
        <div class="size-10 rounded-xl bg-gradient-to-br from-primary to-emerald-600 flex items-center justify-center text-background-dark shadow-lg shadow-primary/20">
          <span class="material-symbols-outlined text-2xl">all_inclusive</span>
        </div>
        <h2 class="text-xl font-bold tracking-tight text-white">FutureUs</h2>
      </NuxtLink>

      <div class="w-full max-w-[480px] flex flex-col gap-8 mt-20 lg:mt-0 stagger-form">
        <!-- Page Heading -->
        <div class="flex flex-col gap-3">
          <h1 class="text-4xl sm:text-5xl font-black leading-tight tracking-[-0.02em] text-white drop-shadow-lg">
            Mulai Perjalanan<span class="text-primary">.</span>
          </h1>
          <p class="text-gray-400 text-lg font-normal">
            Bangun masa depan bersama pasanganmu hari ini.
          </p>
        </div>

        <!-- Social Login -->
        <button 
          type="button"
          class="flex items-center justify-center gap-3 w-full h-16 rounded-2xl border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all bg-white/5 backdrop-blur-sm group active:scale-[0.98]"
        >
          <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
          </svg>
          <span class="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">Daftar dengan Google</span>
        </button>

        <!-- Divider -->
        <div class="relative flex items-center py-2">
          <div class="flex-grow border-t border-white/10"></div>
          <span class="flex-shrink-0 mx-4 text-gray-500 text-sm font-medium tracking-wide">ATAU DENGAN EMAIL</span>
          <div class="flex-grow border-t border-white/10"></div>
        </div>

        <!-- Form Fields -->
        <form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
          <!-- Email Field -->
          <div class="space-y-2 group">
            <label class="text-sm font-bold text-gray-400 group-focus-within:text-primary transition-colors ml-1 uppercase tracking-wider">Alamat Email</label>
            <div class="relative">
              <input 
                v-model="email"
                class="w-full h-16 rounded-2xl border bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 placeholder-gray-600 px-6 pl-14 text-lg font-medium text-white transition-all outline-none" 
                placeholder="nama@email.com" 
                type="email"
                autocomplete="email"
              />
              <div class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors pointer-events-none">
                <span class="material-symbols-outlined text-2xl">mail</span>
              </div>
            </div>
          </div>

          <!-- Password Field -->
          <div class="space-y-2 group">
            <label class="text-sm font-bold text-gray-400 group-focus-within:text-primary transition-colors ml-1 uppercase tracking-wider">Kata Sandi</label>
            <div class="relative">
              <input 
                v-model="password"
                class="w-full h-16 rounded-2xl border bg-white/5 border-white/10 focus:border-primary/50 focus:bg-white/10 focus:ring-4 focus:ring-primary/10 placeholder-gray-600 px-6 pl-14 pr-14 text-lg font-medium text-white transition-all outline-none" 
                placeholder="Minimal 8 karakter" 
                :type="showPassword ? 'text' : 'password'"
                autocomplete="new-password"
              />
              <div class="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-primary transition-colors pointer-events-none">
                <span class="material-symbols-outlined text-2xl">lock</span>
              </div>
              <button 
                class="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-white/5" 
                type="button"
                @click="showPassword = !showPassword"
              >
                <span class="material-symbols-outlined text-xl">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
              </button>
            </div>
            
            <!-- Segmented Password Strength -->
            <div class="flex gap-2 items-center mt-3 px-1">
              <div class="flex-1 flex gap-1 h-1.5">
                <div class="h-full w-full rounded-full transition-all duration-300 bg-white/10" :class="{ 'bg-red-500': passwordStrength >= 1, 'shadow-[0_0_10px_rgba(239,68,68,0.5)]': passwordStrength >= 1 }"></div>
                <div class="h-full w-full rounded-full transition-all duration-300 bg-white/10" :class="{ 'bg-yellow-500': passwordStrength >= 2, 'shadow-[0_0_10px_rgba(234,179,8,0.5)]': passwordStrength >= 2 }"></div>
                <div class="h-full w-full rounded-full transition-all duration-300 bg-white/10" :class="{ 'bg-blue-500': passwordStrength >= 3, 'shadow-[0_0_10px_rgba(59,130,246,0.5)]': passwordStrength >= 3 }"></div>
                <div class="h-full w-full rounded-full transition-all duration-300 bg-white/10" :class="{ 'bg-primary': passwordStrength >= 4, 'shadow-[0_0_10px_rgba(34,197,94,0.5)]': passwordStrength >= 4 }"></div>
              </div>
              <span class="text-xs font-bold whitespace-nowrap px-2 py-0.5 rounded-md bg-white/5 border border-white/5 min-w-[80px] text-center transition-colors duration-300" :class="passwordStrengthColor">
                {{ passwordStrengthLabel }}
              </span>
            </div>
          </div>

          <!-- Submit Button -->
          <button 
            class="mt-6 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl h-14 px-5 bg-primary hover:bg-[#0fd650] active:scale-[0.98] transition-all text-background-dark text-lg font-black leading-normal tracking-wide shadow-[0_0_30px_rgba(19,236,91,0.3)] hover:shadow-[0_0_40px_rgba(19,236,91,0.5)] disabled:opacity-50 disabled:cursor-not-allowed group" 
            type="submit"
            :disabled="isLoading"
          >
            <span v-if="!isLoading" class="flex items-center gap-2">
              Daftar Sekarang
              <span class="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </span>
            <span v-else class="material-symbols-outlined animate-spin">progress_activity</span>
          </button>
        </form>

        <!-- Footer Link -->
        <p class="text-center text-base text-gray-500">
          Sudah punya akun? 
          <NuxtLink to="/login" class="font-bold text-white hover:text-primary transition-colors underline decoration-white/20 hover:decoration-primary/50 underline-offset-4">Masuk di sini</NuxtLink>
        </p>
      </div>

      <!-- Language/Terms Footer -->
      <div class="absolute bottom-6 w-full text-center px-6">
        <p class="text-xs text-gray-600">
          Dengan mendaftar, Anda menyetujui <button type="button" class="hover:text-gray-400 transition-colors underline">Syarat &amp; Ketentuan</button> kami.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

useHead({
  title: 'Daftar Akun - FutureUs'
})

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)

// Password strength computation
const passwordStrength = computed(() => {
  const pwd = password.value
  if (!pwd) return 0
  let strength = 0
  if (pwd.length >= 8) strength++
  if (/[a-z]/.test(pwd) && /[A-Z]/.test(pwd)) strength++
  if (/\d/.test(pwd)) strength++
  if (/[^a-zA-Z\d]/.test(pwd)) strength++
  return strength
})

const passwordStrengthColor = computed(() => {
  const s = passwordStrength.value
  if (s === 0) return 'text-gray-500'
  if (s === 1) return 'text-red-400'
  if (s === 2) return 'text-yellow-400'
  if (s === 3) return 'text-blue-400'
  return 'text-primary'
})

const passwordStrengthLabel = computed(() => {
  const s = passwordStrength.value
  if (s === 0) return 'Kosong'
  if (s === 1) return 'Lemah'
  if (s === 2) return 'Sedang'
  if (s === 3) return 'Kuat'
  return 'Sangat Kuat'
})

const router = useRouter()

const handleSubmit = async () => {
  isLoading.value = true
  console.log('Register attempt:', { email: email.value, password: password.value })
  
  // Simulate API delay for UX demo
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // TODO: Add actual registration logic here
  // On successful registration, redirect to connect page
  router.push('/connect')
  isLoading.value = false
}
</script>

<style scoped>
/* Custom Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fade-in { animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-fade-in-down { animation: fadeInDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
.animate-scale-in { animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

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
