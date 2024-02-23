import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    // '@fortawesome/fontawesome-free/css/all.css',
    '~/assets/main.scss'
  ],
  // vite: {
  //     css: {
  //         preprocessorOptions: {
  //             scss: {
  //               additionalData: '@use "@/assets/global.scss" as *;'
  //             }
  //         }
  //     }
  // },
});
