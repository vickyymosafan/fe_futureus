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
        <button class="md:hidden text-white">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </header>
    </div>
  </div>
</template>
