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

export const todoStore = defineStore("todo", {
  state: () => ({
    isEditing: false,
    todo: "",
    todos: [],
    selectedTodo: null,
  }),
  getters: { getTodos: (state) => state.todos },
  actions: {
    todoStore() {
      this.todos.push(this.todo);
      this.todo = "";
    },

    removeTodo(index) {
      this.todos.splice(index, 1);
    },

    updateTodo() {
      this.todos.splice(this.selectedIndex, 1, this.todo);
      this.todo = "";
      this.isEditing = false;
    },

    editTodo(index, todo) {
      this.isEditing = true;
      this.todo = todo;
      this.selectedIndex = index;
    },
  },
});
