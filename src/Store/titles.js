import { defineStore } from "pinia";
// import posttt from '../views/registros'
export const titlesStore = defineStore("titles", {
  state: () => ({
    posttt: [
      {
        título: "",
        nota: "",
        sinopse: "",
      },
    ],
  }),
  getters: { getPosttt: (state) => state.posttt },
  actions: {
    async savePost(payload) {
      this.posttt = await { ...payload };
    },
  },
});
