<template>
  <div>
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from "vue-router";
export default {
  components: { RouterView },
};
</script>

<style>
html {
  font-family: Verdana, Tahoma, sans-serif;
  background-color: #fdfbfd;
}

#app {
  display: grid;
  justify-content: center;
  background-color: #fbfbfb;
  color: #323232;
  margin: 0px;
}

li {
  list-style-type: none;
}

hr {
  border: 0px;
}

/*INDEX2*/

#tp {
  margin-left: 60px;
  left: 70px;
  height: 50;
  color: #7088e9;
  font-size: large;
}

#editar {
  margin-left: 700px;
  height: 50;
  color: #7088e9;
  font-size: large;
}

.panel {
  background-color: #204bfc;
  margin: 0px;
  margin-top: 0px;
  margin-left: 0px;
  margin-right: 0px;
  padding: 20px;
  width: 97%;
  box-shadow: 0 3px 6px rgb(0, 0, 0.15);
  text-align: center;
  height: 50px;
}

.body2 {
  background-color: #7088e9;
}

.container {
  background-color: #7088e9;
}

#app2 {
  display: grid;
  justify-content: center;
  background-color: #7088e9;
  color: #323232;
  margin: 0px;
}
</style>
