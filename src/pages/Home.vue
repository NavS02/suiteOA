<template>
  <div class="container" style="margin-left:25%">
      <img src="/logoopaSiena.png" alt=""  style="width:20%;margin-left:40%"/>

    <div class="options">
      <div class="card" @click="onOptionClicked('inventario')">
        <div class="card-header">
          <font-awesome-icon :icon="['fa-solid', 'fa-boxes-stacked']" />
        </div>
        <div class="card-body">
          <h5 class="card-title">Inventario</h5>
        </div>
      </div>
      &nbsp;

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
import { authentication } from "../API";
import { useRouter, useRoute } from "vue-router";

export default {
  setup(props, context) {
    const router = useRouter();
    const route = useRoute();

    const email = ref("");
    const password = ref("");
    let program = ref(null);

    function onOptionClicked(option) {
      console.log(option);
      router.push({ name: "login", params: { program: option } });
    }

    return {
      email,
      password,
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
</style>
