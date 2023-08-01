// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-graphql-client", "@nuxtjs/tailwindcss"],
  devServer: { port: 4000 },
  runtimeConfig: {
    public: {
      GQL_HOST: "http://localhost:3000/graphql",
    },
  },
});
