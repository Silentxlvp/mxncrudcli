<template>
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="login">
        <label for="username">Usuário:</label>
        <input type="text" id="username" v-model="username" required>
  
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required>
  
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useLoginStore } from '../Store/titles';
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    setup() {
    const username = ref("");
    const password = ref("");
    return {
      username,
      password,
    };
  },
    methods: {
      login() {
        const loginStore = useLoginStore();
        loginStore.login(this.username, this.password)
          .then(() => {
            this.$router.push('/registrados');
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  });
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f1f1f1;
    border-radius: 30px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
    text-align: left;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  input:hover {
    background-color: #5ef38886;
    transition: 1s;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
  }
  </style>
  