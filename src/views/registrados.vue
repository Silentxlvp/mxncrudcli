<template>
  <nav>
    <div class="logo">RsF</div>
    <div class="links">
      <ul class="nav-itens">
        <li><a>Home</a></li>
        <li><a>About us</a></li>
        <li><a>Preços</a></li>
        <li><a>Suporte</a></li>
      </ul>
    </div>
    <div class="btn">
      <button class="login">Login</button>
      <RouterLink to="/" class="cadastro">Registrar</RouterLink>
      <RouterLink to="/todolist" class="o">todolist</RouterLink>
    </div>
  </nav>
  <main class="cards">
    <section class="card roxo" v-for="item in getPosttt" :key="item.titulo">
      <h3>Titulo:{{ item.titulo }}</h3>
      <span>Sinopse: {{ item.sinopse }}</span>
      <button>Nota:{{ item.nota }}</button>
    </section>
  </main>
</template>

<script>
import { mapState } from "pinia";
import { defineComponent, ref } from "vue";
import { titlesStore } from "../Store/titles";
export default defineComponent({
  setup() {
    const posttt = ref({});
    return {
      posttt,
    };
  },
  computed: {
    ...mapState(titlesStore, {
      getPosttt: "getPosttt",
    }),
  },
  mounted() {
    console.log(this.getPosttt);
    this.posttt = this.getPosttt;
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Poppins:wght@100;200;300;400;500;600;700&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

nav {
  display: flex;
  justify-content: space-around;
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  align-items: center;
  color: #202020;
}

.logo {
  font-weight: 800;
  font-size: 25px;
}

.nav-itens {
  list-style: none;
  display: flex;
}

.nav-itens > li > a {
  padding-left: 20px;
  color: #202020;
  text-decoration: none;
}

.login {
  padding: 10px 40px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  color: #202020;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
}

.cadastro {
  padding: 10px 40px;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  color: #fff;
  background-color: #202020;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transition: 1s background;
  text-decoration: none;
}

.cadastro:hover {
  background-color: #3d3d3d;
  transition: 1s background;
}

main.cards {
  display: flex;
  padding: 32px;
}

main.cards section.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  max-height: 468px;
  margin-left: 32px;
}

main.cards section.card h3 {
  font-size: 100%;
  margin: 16px 0;
  max-width: 240px;
}

main.cards section.card span {
  font-weight: 300;
  max-width: 240px;
  font-size: 80%;
  margin-bottom: 16px;
}

main.cards section.card button {
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  border-radius: 32px;
  border: 0;
  cursor: pointer;
  font-size: 80%;
  font-weight: 500;
  color: #fff;
  margin-bottom: 16px 0;
}

main.cards section.card.roxo button {
  background: linear-gradient(to right, #9f66ff, #dfcbff);
}
main.cards section.card.azul button {
  background: linear-gradient(to right, #3e8aff, #bbdeff);
}
main.cards section.card.rosa button {
  background: linear-gradient(to right, #fe5f8f, #ffc7d9);
}

main.cards section.card.roxo {
  box-shadow: 20px 20px 50px -30px #dbc4ff;
}
main.cards section.card.azul {
  box-shadow: 20px 20px 50px -30px #afd6ff;
}
main.cards section.card.rosa {
  box-shadow: 20px 20px 50px -30px #ffc1d5;
}
</style>
