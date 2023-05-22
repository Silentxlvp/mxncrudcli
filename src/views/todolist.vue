<template>
  <div id="app" class="container">
    <h1>Todo List</h1>

    <div v-if="!isEditing">
      <input type="text" v-model="todo" />
      <input type="submit" value="Add" @click="todoStore" />
    </div>
    <div v-else>
      <input type="text" v-model="todo" />
      <input type="submit" value="Update" @click="updateTodo" />
    </div>

    <ol>
      <li class="list" v-for="(todo, index) in todos" :key="(todo, index).todos">
        {{ todo }}
        <button @click="editTodo(index, todo)">Edit</button>
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { defineComponent, ref } from "vue";
import { todoStore } from "../Store/titles";

export default defineComponent({
  setup() {
    var isEditing = false;
    const todo = ref("");
    const todos = ref({});
    return {
      isEditing,
      todos,
      todo,
    };
  },
  computed: {
    ...mapState(todoStore, {
      getTodos: "getTodos",
    }),
  },
  methods: {
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

  mounted() {
    console.log(this.getTodos);
    this.todos = this.getTodos;
  },
});
</script>

<style>
.container {
  max-width: 960px;
  margin: 0 auto;
}
h1 {
  padding-top: 40px;
  color: #202020;
}
</style>
