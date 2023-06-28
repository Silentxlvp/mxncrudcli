<template>
  <div class="support-page">
    <h1 class="h1-s">Central de Suporte</h1>
    <form @submit="SendForm()">
      <div class="form-group">
        <label class="label-s" for="name">Nome:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label class="label-s" for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label class="label-s" for="message">Mensagem:</label>
        <textarea id="message" v-model="formData.message" required></textarea>
      </div>
      <input type="submit" class="botao-s" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    SendForm() {
      this.$router.push({
          name: "congrats",}) //fazer aqui o router
    },
    submitForm() {
      // Lógica para enviar o formulário
      console.log(this.formData);
      // Limpar o formulário
      this.formData.name = "";
      this.formData.email = "";
      this.formData.message = "";
    },
  },
};
</script>

<style>
 .support-page {
  max-width: 800px;
  margin: 0 auto;
}

.h1-s {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}
 
.label-s {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
} 

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>
