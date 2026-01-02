<template>
  <div class="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/80 backdrop-blur-md">
    <div class="px-4 md:px-10 py-3 max-w-[1280px] mx-auto">
      <header class="flex items-center justify-between whitespace-nowrap">
        <div class="flex items-center gap-4 text-white">
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
        </div>
        <!-- Desktop Menu -->
        <div class="hidden md:flex flex-1 justify-end gap-8 items-center">
          <div class="flex items-center gap-9">
            <a href="#fitur" class="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Fitur</a>
            <a href="#cara-kerja" class="text-white hover:text-primary transition-colors text-sm font-medium leading-normal">Cara Kerja</a>
          </div>
          <div class="flex gap-2">
            <NuxtLink to="/register" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold hover:bg-[#0fd650] transition-colors">
              <span class="truncate">Daftar</span>
            </NuxtLink>
            <NuxtLink to="/login" class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-surface-dark border border-border-dark text-white text-sm font-bold hover:bg-border-dark transition-colors">
              <span class="truncate">Masuk</span>
            </NuxtLink>
          </div>
        </div>
        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle menu"
        >
          <span class="material-symbols-outlined text-2xl">{{ isMenuOpen ? 'close' : 'menu' }}</span>
        </button>
      </header>
    </div>

    <!-- Mobile Menu Overlay -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="isMenuOpen" 
          class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] md:hidden"
          @click="closeMenu"
        ></div>
      </Transition>

      <!-- Mobile Menu Drawer -->
      <Transition name="slide">
        <div 
          v-if="isMenuOpen" 
          class="fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-background-dark/95 backdrop-blur-2xl border-l border-white/10 z-[10000] md:hidden shadow-2xl flex flex-col"
        >
          <!-- Drawer Header -->
          <div class="flex items-center justify-between p-6 border-b border-white/5">
            <h3 class="text-white font-bold text-xl tracking-tight">Menu</h3>
            <button 
              class="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-xl transition-all active:scale-95"
              @click="closeMenu"
              aria-label="Close menu"
            >
              <span class="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          
          <!-- Drawer Links -->
          <nav class="flex-1 p-6 space-y-4 overflow-y-auto">
            <div class="stagger-1">
              <a 
                href="#fitur" 
                class="flex items-center gap-4 p-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all group border border-transparent hover:border-white/5"
                @click="closeMenu"
              >
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <span class="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                </div>
                <div class="flex flex-col">
                  <span class="font-bold text-lg">Fitur Utama</span>
                  <span class="text-xs text-gray-500">Apa yang bisa dilakukan?</span>
                </div>
              </a>
            </div>

            <div class="stagger-2">
              <a 
                href="#cara-kerja" 
                class="flex items-center gap-4 p-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all group border border-transparent hover:border-white/5"
                @click="closeMenu"
              >
                <div class="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <span class="material-symbols-outlined text-blue-500 text-xl">play_circle</span>
                </div>
                 <div class="flex flex-col">
                  <span class="font-bold text-lg">Cara Kerja</span>
                  <span class="text-xs text-gray-500">Langkah mudah memulai</span>
                </div>
              </a>
            </div>
          </nav>

          <!-- Drawer Actions (Thumb Friendly) -->
          <div class="p-6 border-t border-white/5 space-y-4 bg-black/10">
            <div class="stagger-3">
               <NuxtLink 
                to="/register" 
                class="flex items-center justify-center gap-2 rounded-2xl h-14 px-4 bg-primary text-background-dark font-black text-lg hover:bg-[#0fd650] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(19,236,91,0.2)] w-full"
                @click="closeMenu"
              >
                <span>Daftar Gratis</span>
                <span class="material-symbols-outlined text-xl">arrow_forward</span>
              </NuxtLink>
            </div>
            <div class="stagger-4">
              <NuxtLink 
                to="/login" 
                class="flex items-center justify-center rounded-2xl h-14 px-4 bg-transparent border border-white/20 text-white font-bold text-lg hover:bg-white/5 active:scale-[0.98] transition-all w-full"
                @click="closeMenu"
              >
                Masuk
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

// Lock body scroll when menu is open
watch(isMenuOpen, (open) => {
  if (import.meta.client) {
    document.body.style.overflow = open ? 'hidden' : ''
  }
})
</script>

<style scoped>
/* Fade transition for overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition for drawer */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Staggered Animations */
.slide-enter-active .stagger-1 { transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s; }
.slide-enter-active .stagger-2 { transition: opacity 0.4s ease 0.15s, transform 0.4s ease 0.15s; }
.slide-enter-active .stagger-3 { transition: opacity 0.4s ease 0.2s, transform 0.4s ease 0.2s; }
.slide-enter-active .stagger-4 { transition: opacity 0.4s ease 0.25s, transform 0.4s ease 0.25s; }

.slide-enter-from .stagger-1,
.slide-enter-from .stagger-2,
.slide-enter-from .stagger-3,
.slide-enter-from .stagger-4 {
  opacity: 0;
  transform: translateX(20px);
}
</style>
