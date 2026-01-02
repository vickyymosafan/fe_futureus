<template>
  <div class="bg-background-light dark:bg-background-dark font-display text-gray-900 dark:text-white transition-colors duration-200">
    <div class="relative min-h-screen flex flex-col">
      <!-- Navbar -->
      <header class="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-[#23482f] bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-3">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="size-8 text-primary">
              <svg class="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path clip-rule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fill-rule="evenodd"></path>
                </g>
              </svg>
            </div>
            <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">FutureUs</h1>
          </NuxtLink>
          
          <!-- Navigation Links (Desktop) -->
          <nav class="hidden md:flex items-center gap-8">
            <NuxtLink to="/dashboard" class="text-sm font-bold text-primary">Dashboard</NuxtLink>
            <button type="button" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Keuangan</button>
            <button type="button" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Jurnal</button>
            <button type="button" class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">Kalender</button>
          </nav>
          
          <!-- Profile & Action -->
          <div class="flex items-center gap-4">
            <button type="button" class="hidden sm:flex h-9 px-4 items-center justify-center rounded bg-primary hover:bg-green-400 text-background-dark text-sm font-bold transition-colors">
              Profil
            </button>
            <div 
              class="size-9 rounded-full bg-cover bg-center ring-2 ring-[#23482f]" 
              :style="{ backgroundImage: `url('${userAvatar}')` }"
            ></div>
            <!-- Mobile Menu Button -->
            <button type="button" class="md:hidden text-gray-500 dark:text-white">
              <span class="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Greeting Section -->
        <div class="mb-10">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <p class="text-3xl sm:text-4xl font-black tracking-tight mb-2">Halo, {{ userName }}! 👋</p>
              <p class="text-text-secondary text-base sm:text-lg">Siap menjalani hari ini bersama pasangan?</p>
            </div>
            <div class="text-right hidden sm:block">
              <p class="text-sm text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wider">Tanggal Hari Ini</p>
              <p class="text-xl font-bold dark:text-white">{{ formattedDate }}</p>
            </div>
          </div>
        </div>

        <!-- Dashboard Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <!-- Mood Card -->
          <div class="col-span-1 md:col-span-2 lg:col-span-7 flex flex-col group cursor-pointer">
            <div class="h-full bg-white dark:bg-[#193322] border border-gray-200 dark:border-[#23482f] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex flex-col md:flex-row gap-6">
              <div class="flex-1 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2 mb-4">
                    <span class="material-symbols-outlined text-primary">mood</span>
                    <h3 class="text-lg font-bold">Mood Hari Ini</h3>
                  </div>
                  <div class="flex flex-col gap-3">
                    <div class="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-background-dark/50 border border-gray-100 dark:border-[#23482f]/50">
                      <div class="flex items-center gap-3">
                        <div class="size-8 rounded-full bg-cover bg-center" :style="{ backgroundImage: `url('${userAvatar}')` }"></div>
                        <span class="font-medium text-sm">Kamu</span>
                      </div>
                      <div class="flex items-center gap-2 text-primary font-bold text-sm">
                        <span>😊 Bahagia</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-background-dark/50 border border-gray-100 dark:border-[#23482f]/50">
                      <div class="flex items-center gap-3">
                        <div class="size-8 rounded-full bg-cover bg-center" :style="{ backgroundImage: `url('${partnerAvatar}')` }"></div>
                        <span class="font-medium text-sm">{{ partnerName }}</span>
                      </div>
                      <div class="flex items-center gap-2 text-text-secondary font-medium text-sm">
                        <span>😴 Lelah</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-6 flex gap-3">
                  <button type="button" class="flex-1 py-2 px-4 rounded bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors">
                    Update Mood
                  </button>
                  <button type="button" class="flex-1 py-2 px-4 rounded bg-primary text-background-dark text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-[18px]">favorite</span>
                    Kirim Semangat
                  </button>
                </div>
              </div>
              <div 
                class="hidden sm:block w-full md:w-1/3 rounded-lg bg-cover bg-center relative overflow-hidden min-h-[150px]" 
                :style="moodImageStyle"
              >
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <p class="text-white text-xs font-medium">Jangan lupa istirahat yang cukup ya!</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Countdown Card -->
          <div class="col-span-1 md:col-span-2 lg:col-span-5 flex flex-col">
            <div class="h-full bg-gradient-to-br from-primary/20 to-[#193322] border border-[#23482f] rounded-xl p-6 relative overflow-hidden hover:border-primary/50 transition-all cursor-pointer">
              <div class="relative z-10 flex flex-col justify-between h-full">
                <div class="flex justify-between items-start mb-6">
                  <div>
                    <h3 class="text-lg font-bold mb-1 text-white">Anniversary ke-2</h3>
                    <p class="text-text-secondary text-sm">Hari Spesial Berikutnya</p>
                  </div>
                  <div class="bg-primary/20 p-2 rounded-full">
                    <span class="material-symbols-outlined text-primary">event_upcoming</span>
                  </div>
                </div>
                <div class="flex items-end gap-2 mt-auto">
                  <span class="text-5xl font-black text-white tracking-tighter">12</span>
                  <span class="text-xl font-bold text-primary mb-2">Hari Lagi</span>
                </div>
                <p class="text-sm text-gray-400 mt-2">15 November 2023</p>
              </div>
              <!-- Decorative Circles -->
              <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
              <div class="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
            </div>
          </div>

          <!-- Savings Progress Card -->
          <div class="col-span-1 lg:col-span-6">
            <div class="h-full bg-white dark:bg-[#193322] border border-gray-200 dark:border-[#23482f] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">savings</span>
                  <h3 class="text-lg font-bold">Tabungan Aktif</h3>
                </div>
                <span class="bg-[#23482f] text-xs font-bold px-2 py-1 rounded text-text-secondary">Prioritas</span>
              </div>
              <div class="space-y-5">
                <div>
                  <div class="flex justify-between items-end mb-2">
                    <p class="font-medium text-base">Liburan ke Bali</p>
                    <p class="text-primary font-bold">50%</p>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-black/40 rounded-full h-3 overflow-hidden">
                    <div class="bg-primary h-3 rounded-full" style="width: 50%"></div>
                  </div>
                  <div class="flex justify-between mt-2 text-sm text-text-secondary">
                    <span>Terkumpul: Rp 5.000.000</span>
                    <span>Target: Rp 10.000.000</span>
                  </div>
                </div>
                <div class="pt-4 border-t border-dashed border-[#23482f]">
                  <button type="button" class="w-full py-2 rounded border border-[#23482f] text-sm font-medium hover:bg-[#23482f]/50 transition-colors flex items-center justify-center gap-2">
                    <span class="material-symbols-outlined text-sm">add_circle</span>
                    Tambah Setoran
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Reminder Card -->
          <div class="col-span-1 lg:col-span-6">
            <div class="h-full bg-white dark:bg-[#193322] border border-gray-200 dark:border-[#23482f] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all cursor-pointer">
              <div class="flex items-center justify-between mb-6">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-primary">notifications_active</span>
                  <h3 class="text-lg font-bold">Pengingat Terdekat</h3>
                </div>
                <button type="button" class="text-xs text-primary font-bold hover:underline">Lihat Semua</button>
              </div>
              <div class="space-y-3">
                <!-- Reminder Items -->
                <div v-for="reminder in reminders" :key="reminder.id" class="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-[#23482f] group/item">
                  <div class="flex-shrink-0 size-10 rounded-full flex items-center justify-center" :class="reminder.bgClass">
                    <span class="material-symbols-outlined text-[20px]" :class="reminder.iconClass">{{ reminder.icon }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-bold truncate">{{ reminder.title }}</p>
                    <p class="text-xs text-text-secondary">{{ reminder.subtitle }}</p>
                  </div>
                  <button type="button" class="opacity-0 group-hover/item:opacity-100 p-2 hover:bg-background-dark rounded-full transition-all">
                    <span class="material-symbols-outlined text-sm text-gray-400">check</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="col-span-1 md:col-span-2 lg:col-span-12 mt-4">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button type="button" class="bg-[#193322]/50 border border-[#23482f] p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-[#193322] transition-colors cursor-pointer">
                <span class="material-symbols-outlined text-primary mb-2">add_a_photo</span>
                <span class="text-sm font-medium">Unggah Kenangan</span>
              </button>
              <button type="button" class="bg-[#193322]/50 border border-[#23482f] p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-[#193322] transition-colors cursor-pointer">
                <span class="material-symbols-outlined text-primary mb-2">edit_note</span>
                <span class="text-sm font-medium">Tulis Jurnal</span>
              </button>
              <button type="button" class="bg-[#193322]/50 border border-[#23482f] p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-[#193322] transition-colors cursor-pointer">
                <span class="material-symbols-outlined text-primary mb-2">account_balance_wallet</span>
                <span class="text-sm font-medium">Catat Pengeluaran</span>
              </button>
              <button type="button" class="bg-[#193322]/50 border border-[#23482f] p-4 rounded-lg flex flex-col items-center justify-center text-center hover:bg-[#193322] transition-colors cursor-pointer">
                <span class="material-symbols-outlined text-primary mb-2">settings</span>
                <span class="text-sm font-medium">Pengaturan</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

useHead({
  title: 'FutureUs - Dashboard Utama'
})

// User data (would come from auth in real app)
const userName = ref('Rizky')
const partnerName = ref('Ayu')
const userAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtKvnAg9lNYbEYR7nj-t3XNmhsDCrq-alqsKv7StfKRUinwSZPB_DBI5jLbTRHdHyYXolwiYcEzXRJgTzZy9IXiUcXi5RTNh__gVcbVZx63Iyapc6KHDAkPzgAPowJOabiyQd3FCZ8zSB6RA4Pei_jDDZox97MvgsVdwEGepY0WrolKYMlh4et4wNRHWLsOMPIV3Ua_uNTGwSTHlkgiboG2u2ZY0HqQqdSVm6YeFguGMZTY7lTj3K283gmE5hdqiGNBFMqO7WGNFQ'
const partnerAvatar = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn8MnxdQ_GhEU-4J5ArXD64mZbvLaJhJoHmiQC0NUK2xmYHO07vdHgs8IOwrWlT1X4_g7Ybup0lil-0iL8l2OeXETSQEgS6KoZgUG0h1ULrAj7WxU6KWI4vPlqGjH6ngfYHAERobsJiw5xD6fbb3fM-f_kLhZOGrcSgFKMbaAL8ixdSWc5z_oNVlM6ppE8pqtjxXeP9DZuTywcvuONXZ98-esnk8faPbonaJTcnms8v7UpZ8bYtOKYfkQgTl8GhT3_JU0tbSZuN6M'

const moodImageStyle = {
  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAVu_FP2Mhq_wGujbrq0jCsVjYuWhy5XqGIY1Sg3H_pwYaTLmaA0g3SaFdJMflaYdcpaa-VRiGFAMC2S_2EoVlfH0ZQHVLUaGfLEHDkFZNg2yrEx42OPkpb2zh5VVhK7AoimbTO4H8UGlsO2kHXLgOpXgrvjgUU2LQKpJvyW1ABS7UBS4GlPSfkCeboOSXiGAbdHXECBshDNIFCETzZc1J04YspaPerbutKDqK3acW808iXonpkWHzF0ZU4U5K1DkAjbwNbb2RgmE')`
}

// Format date
const formattedDate = computed(() => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date().toLocaleDateString('id-ID', options)
})

// Reminders data
const reminders = ref([
  {
    id: 1,
    icon: 'bolt',
    title: 'Bayar Tagihan Listrik',
    subtitle: 'Jatuh tempo besok',
    bgClass: 'bg-red-500/10',
    iconClass: 'text-red-500'
  },
  {
    id: 2,
    icon: 'restaurant',
    title: 'Dinner Date Night',
    subtitle: 'Sabtu, 19:00 WIB @ Henshin',
    bgClass: 'bg-primary/10',
    iconClass: 'text-primary'
  },
  {
    id: 3,
    icon: 'wifi',
    title: 'Bayar Wifi',
    subtitle: '3 Hari lagi',
    bgClass: 'bg-blue-500/10',
    iconClass: 'text-blue-500'
  }
])
</script>
