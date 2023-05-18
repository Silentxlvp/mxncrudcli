<template>
  <div id="app" class="container">
    <h1>Todo List</h1>

    <div v-if="!isEditing">
      <input type="text" v-model="todo" />
      <input type="submit" value="Add" @click="storeTodo" />
    </div>
    <div v-else>
      <input type="text" v-model="todo" />
      <input type="submit" value="Update" @click="updateTodo" />
    </div>

    <ol>
      <li v-for="(todo, index) in todos" :key="(todo, index).todos">
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
    const todo = ref("");
    const todos = ref({});
    return {
      todos,
      todo,
    };
  },
  computed: {
    ...mapState(todoStore, {
      getTodos: "getTodos",
    }),
  },
  mounted() {
    console.log(this.getTodos);
    this.todos = this.getTodos;
  },
});

// setup(){
//   el: "#app",

//   data: function() {
// return {
//     isEditing: false,
//     todo: "",
//     todos: [],
//     selectedTodo: null,
//   };
// },

//   computed: {
//     storeTodo() {
//       this.todos.push(this.todo);
//       this.todo = "";
//     },

//     removeTodo(index) {
//       this.todos.splice(index, 1);
//     },

//     updateTodo() {
//       this.todos.splice(this.selectedIndex, 1, this.todo);
//       this.todo = "";
//       this.isEditing = false;
//     },

//     editTodo(index, todo) {
//       this.isEditing = true;
//       this.todo = todo;
//       this.selectedIndex = index;
//     },
//   },
// });
</script>

<style>
.container {
  max-width: 960px;
  margin: 0 auto;
}
h1 {
  padding-top: 40px;
}
</style>
