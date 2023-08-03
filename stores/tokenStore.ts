import { defineStore } from "pinia";

export const useTokenStore = defineStore("tokens", {
  state: () => ({ token: '', authorId: 0 }),
  getters: {
    getToken: (state) => state.token,
  },
  actions: {
    reset() {
      this.token = '';
    },
  },
});
