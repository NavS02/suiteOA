<template>
  <main id="main">
    <div class="row d-flex">
      <div class="col-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >
                  Inventario
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                  {{ totalInventario }}
                </div>
              </div>
              <div class="col-auto">
                <i class="bi bi-box2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref } from "vue";
import { directus } from "../API/";

export default {
  setup() {
    let totalInventario = ref();

    fetchDashboard();
    async function fetchDashboard() {
        const responseIscriz = await directus.items("inventario").readByQuery({
        fields: ["COUNT(*)"],
        limit: -1,
      });
      totalInventario.value = responseIscriz.data.length;
    }
    return {
      totalInventario,
    };
  },
};
</script>

<style scoped>
.bi {
  font-size: 3.5rem;
}
</style>
