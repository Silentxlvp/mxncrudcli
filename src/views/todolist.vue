<template>
  <div id="app" class="container">
    <h1>Todo List</h1>

    <div v-if="!isEditing">
      <input type="text" v-model="todo" />
      <input class="btn" type="submit" value="Add" @click="todoStore" />
    </div>
    <div v-else>
      <input class="btn" type="text" v-model="todo" />
      <input class="btn" type="submit" value="Update" @click="updateTodo" />
    </div>

    <ol>
      <li
        class="list"
        v-for="(todo, index) in todos"
        :key="(todo, index).todos"
      >
        {{ todo }}
        <button class="btn" @click="editTodo(index, todo)">Edit</button>
        <button class="btn" @click="removeTodo(index)">Delete</button>
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
nav {
  display: flex;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  align-items: center;
  color: #202020;
}

.btn {
  width: 140px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 10px;
}

.btn:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px); 
 }
</style>
