<template>
  <div id="registrados">
    <nav>
      <button id="buttonlk">
        <RouterLink to="/" class="link">REGISTRAR</RouterLink>
      </button>
    </nav>
    <h1>registrados</h1>
    <!-- <div>{{ navbar }}</div> -->
    <button class="btoncrud" type="button" onclick="console.log('oi')">
      Excluir
    </button>
    <button class="btoncrud" onclick="console.log('oi')">Atualizar</button>
    <button class="btoncrud" onclick="console.log('oi')">Editar</button>

    <!-- <div class="lista">
      
      <div v-for="item in titlesStore" :key="item.id"></div> 
    </div> -->
  </div>
  <div class="panel">registrados recentemente</div>
</template>

<script>
// import navbar from "../components/NavBar.vue";
</script>

<style>
#registrados {
  margin-left: 400px;
}

#buttonlk {
  border-radius: 3px;
  border: none;
  margin-top: 50px;
  width: 140px;
  height: 50px;
}

.link {
  margin-top: 70px;
  text-decoration: none;
  list-style: none;
  list-style-type: none;
}

.btoncrud {
  margin-left: 100px;
  width: 100px;
  height: 50px;
  background-color: rgb(199, 242, 250);
  border-color: rgb(4, 0, 255);
}

.panel {
  width: 250px;
  height: 800px;
  margin-right: 1050px;
  margin-top: 0px;
  background-color: rgb(233, 230, 227);
}
</style>
