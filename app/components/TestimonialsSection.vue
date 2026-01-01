<template>
  <div class="py-12 bg-background-dark border-y border-border-dark">
    <div class="px-4 md:px-10 max-w-[1280px] mx-auto">
      <h2 class="text-center text-white text-2xl font-bold mb-8">Apa Kata Pasangan Lain?</h2>
      <div class="flex overflow-x-auto pb-4 gap-6 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        
        <!-- Card 1 -->
        <div class="snap-center shrink-0 w-[85vw] md:w-[350px] flex flex-col gap-4 items-center text-center p-6 rounded-xl bg-surface-dark border border-border-dark">
          <div class="size-20 bg-center bg-no-repeat bg-cover rounded-full border-2 border-primary" 
               data-alt="Young couple laughing together outdoors" 
               style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmTS1ZLzsPNnDHth3Zo4E_1D38ClQyBrep5ruRsaRbd855D18nAFvNNnxnOyNCrXnTZ_xw_aago3PhFh_TbzPyeyzzOrnpJJui3bpujrWX14C6ItUUrRHy0Q3m2CtmuhoqDyZMojHPs_PUuerlfWDUQgdydil_wSVvfZK1H9CQfU43O3OI5BSVHkvMC3TNT3PkjT4xhQCNKBcLSbn-t2NG7yUwuc7LjD4Q_lIxXPzJkfrGxapD-s9n3Wg_7iP3o4VQL3PpxTX90eo");'></div>
          <div class="flex flex-col gap-2">
            <p class="text-white text-lg font-bold">Budi & Sari</p>
            <p class="text-text-secondary text-sm leading-relaxed italic">"Aplikasi ini mengubah cara kami merencanakan liburan dan mengatur keuangan! Sangat mudah digunakan."</p>
          </div>
          <div class="flex text-primary text-sm gap-1">
            <span v-for="i in 5" :key="i" class="material-symbols-outlined text-[18px] fill">star</span>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="snap-center shrink-0 w-[85vw] md:w-[350px] flex flex-col gap-4 items-center text-center p-6 rounded-xl bg-surface-dark border border-border-dark">
          <div class="size-20 bg-center bg-no-repeat bg-cover rounded-full border-2 border-primary" 
               data-alt="Couple sitting in a cafe looking at a phone" 
               style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAKKmKnDniH1KZKjoDL9-D094sdLbi4NIhOaQuqB74xqwGpz_WYQxG2w2k8fGhwWgjg-itVQ2HhPG_Uipleqrm0a-DATIlZILS5tjNlYOKwx6FpbU-zT0zMIe9VbWPANYBDnlmXTYK8wuycy9xTqgFcY-HECJKgmAnUt_fxNRQEP1Io3QZKD4NN-MzxPHUnpHOpNlqF2areMNwO-JMh68zsVotQLdZfmgiGRk7F9Lprjhaa79W9LR0CQtYaFtLmyT0nJMPnM4GW_FA");'></div>
          <div class="flex flex-col gap-2">
            <p class="text-white text-lg font-bold">Andi & Citra</p>
            <p class="text-text-secondary text-sm leading-relaxed italic">"Fitur tabungan bersama sangat membantu kami mencapai target pernikahan tanpa drama keuangan."</p>
          </div>
          <div class="flex text-primary text-sm gap-1">
            <span v-for="i in 5" :key="i" class="material-symbols-outlined text-[18px] fill">star</span>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="snap-center shrink-0 w-[85vw] md:w-[350px] flex flex-col gap-4 items-center text-center p-6 rounded-xl bg-surface-dark border border-border-dark">
          <div class="size-20 bg-center bg-no-repeat bg-cover rounded-full border-2 border-primary" 
               data-alt="Couple hiking and taking a selfie" 
               style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVRRVxgxZTx0sXD03qW_01wQKdus2D9AzBNlgJw3GDUqPcHM1eOaLoRMMzhDnz5nHGbPSEkcwcCuWR11YTujlKhLIGjDtFncYkjmiUMM0IrmgZP4XtY10TxtH2Y4igZz7kJRgNkAaN6Owy8S7pmX1082Bl5_VzpPlWRxNuZI4hyb3Vg8TOpxRMhbe39T5duyWgHaPP2w6VBDFWyUNLQGIy8Ssilzg3zgVkHOkNu9PZXDEzwrRmlnJKOK4RqB44ldRUV5Ilydrz1nM");'></div>
          <div class="flex flex-col gap-2">
            <p class="text-white text-lg font-bold">Reza & Maya</p>
            <p class="text-text-secondary text-sm leading-relaxed italic">"Kami suka sekali melihat kembali kenangan kami di timeline yang rapi. Rasanya seperti album digital pribadi."</p>
          </div>
          <div class="flex text-primary text-sm gap-1">
            <span v-for="i in 5" :key="i" class="material-symbols-outlined text-[18px] fill">star</span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
