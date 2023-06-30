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

export const todoStore = defineStore("tods", {
  state: () => ({
    isEditing: false,
    todos: [],
    selectedTodo: null,
  }),
  getters: { getTodos: (state) => state.todos },
  actions: {
    async savePost(payload) {
      if (this.todos.length > 0) {
        this.todos.push({ ...payload });
      } else {
        this.todos = [{ ...payload }];
      }
    },
  },
});

export const useLoginStore = defineStore('login', {
  state: () => ({
    loggedIn: false,
    user: null,
    username: ''
  }),
  actions: {
    async login(username) {
      try {
        this.loggedIn = true;
        this.user = { username }; // Substitua { username } pelos dados reais do usuário
      } catch (error) {
        // Lide com erros de autenticação, como credenciais inválidas, falha na conexão com a API, etc.
        throw new Error('Falha no login');
      }
    },
    logout() {
      this.loggedIn = false;
      this.user = null;
    },
  },
});
