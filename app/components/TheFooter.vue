<template>
  <footer
    class="bg-background-dark border-t border-border-dark py-12 px-4 md:px-10"
  >
    <div
      class="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
    >
      <div class="flex items-center gap-2 text-white">
        <div class="size-6 text-primary">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_footer)">
              <path
                clip-rule="evenodd"
                d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z"
                fill="currentColor"
                fill-rule="evenodd"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_footer">
                <rect fill="white" height="48" width="48"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <span class="font-bold text-lg">FutureUs</span>
      </div>
      <div class="flex gap-6 text-sm text-text-secondary">
        <NuxtLink to="#" class="hover:text-primary transition-colors"
          >Tentang Produk</NuxtLink
        >
        <NuxtLink to="#" class="hover:text-primary transition-colors"
          >Kebijakan Privasi</NuxtLink
        >
        <NuxtLink to="#" class="hover:text-primary transition-colors"
          >Kontak</NuxtLink
        >
      </div>
      <div class="text-sm text-white/40">© 2026 FutureUs Indonesia.</div>
    </div>
  </footer>
</template>
