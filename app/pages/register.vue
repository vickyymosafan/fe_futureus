<template>
  <div class="font-display bg-background-light dark:bg-background-dark text-gray-900 dark:text-white antialiased selection:bg-primary selection:text-background-dark">
    <div class="min-h-screen flex w-full">
      <!-- Left Section: Visual/Hero (Hidden on mobile) -->
      <div class="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-background-dark items-center justify-center">
        <!-- Background Image with Overlay -->
        <div class="absolute inset-0 bg-gradient-to-br from-background-dark/90 via-background-dark/50 to-background-dark/90 z-10"></div>
        <img 
          alt="Abstract dark green connections representing future" 
          class="absolute inset-0 w-full h-full object-cover opacity-60" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsV2xltUU9n2yq-ymhNQhWdTZ68JPg3txoz--UER9gZqHUX9lqpoVN6stfGmBwDVnz6wfd-y33C7emCBolkKbKPs6vj2axOKmbjuLxPyulqObtLJ5ML3TepYi4vwK8lJTyWcAT8evclMsngRZV7txCFDRPZjo-cJcYZoQiZMOi9q7NYLBkajzLnaJxIDk-igT1tR2zG1gN-fqfVCLYuUzoR3-0PlpwhOIMCSpkNUq6zYoQDO3qzL7eS8GK1aXiL6CKvpmQZz_Hgfk"
          loading="lazy"
        />
        
        <!-- Content on top of image -->
        <div class="relative z-20 max-w-lg px-12 text-center">
          <div class="mb-8 flex justify-center">
            <div class="p-4 bg-surface-dark/50 backdrop-blur-sm rounded-full border border-border-green shadow-2xl">
              <span class="material-symbols-outlined text-primary text-5xl">volunteer_activism</span>
            </div>
          </div>
          <h2 class="text-4xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Membangun Masa Depan<br/>
            <span class="text-primary">Bersama-sama</span>
          </h2>
          <p class="text-text-secondary text-lg font-medium leading-relaxed">
            Bergabunglah dengan ribuan pasangan lain yang merencanakan tujuan hidup, keuangan, dan impian mereka di FutureUs.
          </p>
          
          <!-- Testimonial Card -->
          <div class="mt-12 text-left bg-surface-dark/60 backdrop-blur-md p-6 rounded-xl border border-border-green/50">
            <div class="flex gap-1 mb-3">
              <span class="material-symbols-outlined text-primary text-sm">star</span>
              <span class="material-symbols-outlined text-primary text-sm">star</span>
              <span class="material-symbols-outlined text-primary text-sm">star</span>
              <span class="material-symbols-outlined text-primary text-sm">star</span>
              <span class="material-symbols-outlined text-primary text-sm">star</span>
            </div>
            <p class="text-white italic text-sm mb-4">"FutureUs membantu kami menyelaraskan visi kami sebelum menikah. Sangat direkomendasikan!"</p>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">A</div>
              <div>
                <p class="text-white text-xs font-bold">Andi &amp; Sarah</p>
                <p class="text-text-secondary text-[10px]">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Section: Registration Form -->
      <div class="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 relative">
        <!-- Mobile Header (Logo) -->
        <NuxtLink to="/" class="absolute top-6 left-6 lg:top-10 lg:left-12 flex items-center gap-3">
          <div class="size-8 rounded bg-primary flex items-center justify-center text-background-dark">
            <span class="material-symbols-outlined text-xl">all_inclusive</span>
          </div>
          <h2 class="text-lg font-bold tracking-tight dark:text-white">FutureUs</h2>
        </NuxtLink>

        <div class="w-full max-w-[440px] flex flex-col gap-8 mt-12 lg:mt-0">
          <!-- Page Heading -->
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl sm:text-4xl font-black leading-tight tracking-[-0.02em] text-gray-900 dark:text-white">
              Mulai Perjalanan Kalian
            </h1>
            <p class="text-gray-600 dark:text-text-secondary text-base font-normal">
              Bangun masa depan bersama pasanganmu hari ini.
            </p>
          </div>

          <!-- Social Login -->
          <button 
            type="button"
            class="flex items-center justify-center gap-3 w-full h-14 rounded-lg border border-gray-300 dark:border-border-green hover:bg-gray-50 dark:hover:bg-surface-dark/50 transition-colors bg-white dark:bg-transparent group"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
            </svg>
            <span class="text-base font-bold text-gray-700 dark:text-white group-hover:text-gray-900 dark:group-hover:text-primary transition-colors">Daftar dengan Google</span>
          </button>

          <!-- Divider -->
          <div class="relative flex items-center py-2">
            <div class="flex-grow border-t border-gray-200 dark:border-border-green"></div>
            <span class="flex-shrink-0 mx-4 text-gray-400 dark:text-text-secondary text-sm">atau daftar dengan email</span>
            <div class="flex-grow border-t border-gray-200 dark:border-border-green"></div>
          </div>

          <!-- Form Fields -->
          <form class="flex flex-col gap-6" @submit.prevent="handleSubmit">
            <!-- Email Field -->
            <label class="flex flex-col gap-2">
              <span class="text-gray-900 dark:text-white text-base font-medium">Alamat Email</span>
              <div class="relative">
                <input 
                  v-model="email"
                  class="w-full h-14 rounded-lg border bg-white dark:bg-surface-dark border-gray-300 dark:border-border-green focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary placeholder-gray-400 dark:placeholder-text-secondary/50 px-4 pr-12 text-base font-normal text-gray-900 dark:text-white transition-all outline-none" 
                  placeholder="nama@email.com" 
                  type="email"
                  autocomplete="email"
                />
                <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-text-secondary pointer-events-none">
                  <span class="material-symbols-outlined text-xl">mail</span>
                </div>
              </div>
            </label>

            <!-- Password Field -->
            <label class="flex flex-col gap-2">
              <span class="text-gray-900 dark:text-white text-base font-medium">Kata Sandi</span>
              <div class="relative flex w-full items-stretch rounded-lg">
                <input 
                  v-model="password"
                  class="w-full h-14 rounded-lg rounded-r-none border-r-0 border bg-white dark:bg-surface-dark border-gray-300 dark:border-border-green focus:border-primary dark:focus:border-primary focus:ring-1 focus:ring-primary dark:focus:ring-primary placeholder-gray-400 dark:placeholder-text-secondary/50 px-4 text-base font-normal text-gray-900 dark:text-white transition-all outline-none" 
                  placeholder="Minimal 8 karakter" 
                  :type="showPassword ? 'text' : 'password'"
                  autocomplete="new-password"
                />
                <button 
                  class="flex items-center justify-center px-4 rounded-r-lg border border-l-0 bg-white dark:bg-surface-dark border-gray-300 dark:border-border-green text-gray-400 dark:text-text-secondary hover:text-gray-600 dark:hover:text-white transition-colors cursor-pointer group" 
                  type="button"
                  @click="showPassword = !showPassword"
                >
                  <span class="material-symbols-outlined">{{ showPassword ? 'visibility_off' : 'visibility' }}</span>
                </button>
              </div>
              
              <!-- Password Strength Indicator -->
              <div class="flex gap-2 items-center mt-1">
                <div class="h-1 w-full bg-gray-200 dark:bg-border-green rounded-full overflow-hidden">
                  <div class="h-full transition-all duration-300" :class="passwordStrengthClass" :style="{ width: passwordStrengthWidth }"></div>
                </div>
                <span class="text-xs text-gray-500 dark:text-text-secondary whitespace-nowrap">Kekuatan: {{ passwordStrengthLabel }}</span>
              </div>
            </label>

            <!-- Submit Button -->
            <button 
              class="mt-4 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-[#0fd650] transition-colors text-background-dark text-base font-bold leading-normal tracking-[0.015em] shadow-[0_0_20px_rgba(19,236,91,0.3)] hover:shadow-[0_0_25px_rgba(19,236,91,0.5)]" 
              type="submit"
            >
              <span class="truncate">Daftar Sekarang</span>
            </button>
          </form>

          <!-- Footer Link -->
          <p class="text-center text-sm text-gray-600 dark:text-text-secondary">
            Sudah punya akun? 
            <NuxtLink to="/login" class="font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Masuk di sini</NuxtLink>
          </p>
        </div>

        <!-- Language/Terms Footer -->
        <div class="absolute bottom-6 w-full text-center px-6">
          <p class="text-xs text-gray-400 dark:text-gray-600">
            Dengan mendaftar, Anda menyetujui <button type="button" class="hover:text-gray-600 dark:hover:text-gray-400 underline">Syarat &amp; Ketentuan</button> kami.
          </p>
        </div>
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

const passwordStrengthWidth = computed(() => {
  return `${(passwordStrength.value / 4) * 100}%`
})

const passwordStrengthClass = computed(() => {
  const s = passwordStrength.value
  if (s === 0) return 'bg-gray-400'
  if (s === 1) return 'bg-red-500'
  if (s === 2) return 'bg-yellow-500'
  if (s === 3) return 'bg-primary/70'
  return 'bg-primary'
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

const handleSubmit = () => {
  console.log('Register attempt:', { email: email.value, password: password.value })
  // TODO: Add actual registration logic here
  // On successful registration, redirect to connect page
  router.push('/connect')
}
</script>
