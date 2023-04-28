<template>
  <div class="container">
    <img src="/logoopaSiena.png" alt="Logo" class="logo"/>

    <div class="options">
      <div class="card" @click="onOptionClicked('inventario')">
        <div class="card-header">
          <font-awesome-icon :icon="['fa-solid', 'fa-boxes-stacked']" />
        </div>
        <div class="card-body">
          <h5 class="card-title">Inventario</h5>
        </div>
      </div>
      
      <div class="card" @click="onOptionClicked('archivio')">
        <div class="card-header">
          <font-awesome-icon :icon="['fa-solid', 'fa-paintbrush']" />
        </div>
        <div class="card-body">
          <h5 class="card-title">Archivio</h5>
        </div>
      </div>
    </div>

    <div class="credits">
      Progettato da <a href="https://www.ambientinarratividigitali.it/" target="_blank">AND Srl</a>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  setup(props, context) {
    const router = useRouter();
    const route = useRoute();

  

    function onOptionClicked(option) {
      console.log(option);
      router.push({ name: "login", params: { program: option } });
    }

    return {
      onOptionClicked,
    };
  },
};
</script>

<style scoped>
.card:hover {
  border-color: rgb(139, 218, 220);
  border-width: 0.2rem;
  transform: scale(1.1);
}
.container {
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 20px;
}

.logo {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}

.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

.card {
  width: 200px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.card-header {
  padding: 20px 0;
  background-color: #f2f2f2;
}

.card-title {
  margin-top: 10px;
  font-weight: bold;
}

.credits {
  margin-top: 20px;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  .card {
    width: 45%;
  }
}

@media only screen and (max-width: 480px) {
  .card {
    width: 90%;
  }
}
</style>
