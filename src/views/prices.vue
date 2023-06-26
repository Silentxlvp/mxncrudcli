<template>
  <div class="price-catalog">
    <h1>Meu Catálogo de Preços</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <div class="product">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-details">
            <h2>{{ product.name }}</h2>
            <p>{{ product.description }}</p>
            <div class="price">R$ {{ product.price }}</div>
            <button @click="addToCar(product)">Adicionar ao carrinho</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Produto 1",
          description: "Descrição do Produto 1",
          price: 19.99,
          image: "caminho/para/imagem1.jpg",
        },
        {
          id: 2,
          name: "Produto 2",
          description: "Descrição do Produto 2",
          price: 29.99,
          image: "",
        },
        // Adicione mais produtos conforme necessário
      ],
    };
  },
  methods: {
    addToCar(product) {
      // Lógica para adicionar o produto ao carrinho
    },
  },
};
</script>

<style>
.price-catalog {
  max-width: 800px;
  margin: 0 auto;
}

.product {
  display: flex;
  margin-bottom: 20px;
}

.product-image {
  flex: 0 0 150px;
  margin-right: 20px;
}

.product-details {
  flex: 1;
}

.product-details h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.product-details p {
  margin-bottom: 10px;
}

.price {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
