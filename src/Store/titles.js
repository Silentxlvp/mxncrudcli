import { defineStore } from "pinia";
export const titlesStore = defineStore("titles", {
  state: () => ({
    posttt: [],
  }),
  getters: { getPosttt: (state) => state.posttt },
  actions: {
    async savePost(payload) {
      if (this.posttt.length > 0) {
        this.posttt.push({ ...payload });
      } else {
        this.posttt = [{ ...payload }];
      }
    },
  },
});
