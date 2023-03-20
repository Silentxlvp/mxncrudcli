<template>
  <!-- <span>{{ titlesStore }}</span> -->
  <div class="header">
    <h1 class="h1">REGISTROS</h1>
  </div>
  <form @submit="addPost()" class="registros">
    <!-- aqui tem um "$event =>"-->
    <label for="título">Insira o título</label>
    <input
      placeholder="insira o título"
      v-model="título"
      id="título"
      type="text"
    />
    <hr />
    <label for="nota">Insira a nota do título</label>
    <input placeholder="insira a nota" v-model="nota" id="nota" type="text" />
    <hr />
    <label for="sin">Insira a sinopse do título</label>
    <input
      placeholder="insira a sinopse"
      v-model="sinopse"
      id="sinopse"
      type="text"
    />

    <button id="buttonlk">
      <RouterLink to="/registrados" class="link">REGISTRADOS</RouterLink>
    </button>
    <input type="submit" class="botao" />
  </form>
</template>

<script>
import { mapActions, mapState } from "pinia";
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

  watch: {
    título() {
      console.log(this.título);
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
      this.savePost({
        titulo: this.titulo,
        nota: this.nota,
        sinopse: this.sinopse,
      });

      this.$router.push({
        name: "registrados",
      });
    },
  },
});
</script>

<style>
.header {
  text-align: left;
}

h1 {
  font-size: 43px;
  color: #204bfc;
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
  border: 2px solid #204bfc;
  outline: none;
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
