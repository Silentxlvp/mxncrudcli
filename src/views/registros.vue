<template>
  <div class="header">
    <h1 class="h1">REGISTROS</h1>
  </div>
  <form @submit="addPost()" class="registros">
    <!-- aqui tem um "$event =>"-->
    <label for="titulo">Insira o título</label>
    <input
      placeholder="insira o título"
      v-model="titulo"
      id="titulo"
      type="text"
    />
    <hr />
    <label for="nota">Insira a nota do título</label>
    <input placeholder="insira a nota" v-model="nota" id="nota" type="text" />
    <hr />
    <label for="sin">Insira a sinopse</label>
    <input
      placeholder="insira a sinopse"
      v-model="sinopse"
      id="sinopse"
      type="text"
    />
    <input type="submit" class="botao" />
  </form>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { defineComponent, ref } from "vue";
import { titlesStore } from "../Store/titles";
export default defineComponent({
  setup() {
    const titulo = ref("");
    const sinopse = ref("");
    const nota = ref("");
    const posttt = ref({});
    return {
      posttt,
      titulo,
      sinopse,
      nota,
    };
  },
  computed: {
    ...mapState(titlesStore, {
      getPosttt: "getPosttt",
    }),
  },

  watch: {
    título() {
      console.log(this.titulo);
    },
    nota() {
      console.log(this.nota);
    },
    sinopse() {
      console.log(this.sinopse);
    },
  },
  methods: {
    ...mapActions(titlesStore, {
      savePost: "savePost",
    }),
    addPost() {
      if (this.titulo && this.nota && this.sinopse) {
        console.log("entrou");
        this.savePost({
          titulo: this.titulo,
          nota: this.nota,
          sinopse: this.sinopse,
        });

        this.$router.push({
          name: "registrados",
        });
      }
    },
  },
});
</script>

<style>
.header {
  text-align: left;
  font-family: popins, sans-serif;
}

.h1 {
  font-size: 43px;
  color: #202020;
  margin-top: 110px;
}

.registros input {
  border-radius: 5px;
  padding: 5px;
  border: 2px solid #d8d8d8;
  height: 40;
  width: 100%;
  outline: none;
}

.registros input:hover,
.registros input:focus {
  border: 2px solid rgb(0, 0, 0);
  outline: none;
  transition: 1s;
}

.botao {
  color: blue;
  margin: auto;
  padding: 10px;
  box-shadow: 0 0.5px 2.5px rgb(0, 0, 0.15);
  background-color: rgb(232, 243, 233);
  width: 300;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  display: grid;
  vertical-align: auto;
  margin-top: 25px;
  text-decoration: none;
}
</style>
