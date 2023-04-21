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
                  {{ totalInv }}
                </div>
              </div>
              <div class="col-auto">
                <i class="bi bi-inboxes"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { directus } from "../API/";
import * as settings from "../settings/";

export default {
  setup() {
    let totalInv = ref();

    fetchDashboard();
    async function fetchDashboard() {
      const responseOp = await directus
        .items("inventario")
        .readByQuery({ limit: -1 });
      totalInv.value = responseOp.data.length;
    }
    return {
      totalInv,
    };
  },
};
</script>

<style scoped>
.bi {
  font-size: 3.5rem;
}
</style>
