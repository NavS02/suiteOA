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
    <keep-alive>
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div style="width: 100%; margin-top: 100px">
              <div class="text-center"><h2>Ubicazione</h2></div>
              <canvas id="ubicazioneGp"></canvas>
            </div>
          </div>
          <div class="col-md-4">
            <div style="width: 100%; margin-top: 50px">
              <div class="text-center"><h2>Sale</h2></div>
              <canvas id="salaGp"></canvas>
            </div>
          </div>
        </div>
      </div>
    </keep-alive>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import { directus } from "../API/";
import Chart from "chart.js/auto";
import { Colors } from "chart.js";
import { useRoute, useRouter } from "vue-router";

export default {
  setup() {
    let totalInventario = ref(0);
    const route = useRoute();
    const router = useRouter();
    onMounted(async () => {
      const responseIscriz = await directus.items("inventario").readByQuery({
        fields: ["COUNT(*)"],
        limit: -1,
      });
      totalInventario.value = responseIscriz.data.length;
      ubicazioneGraph();
      salaGraph();
    });
    async function salaGraph() {
      let totalSchede = 0;

      const response = await directus
        .items("inv_sala")
        .readByQuery({ limit: -1, sort: "inv_sala", fields: "inv_sala" });
      const myUbis = response.data.map((item) => item.inv_sala);

      const chartData = [];
      const promises = [];

      for (const ubicazione of myUbis) {
        const privateDataPromise = directus.items("inv_sala").readByQuery({
          filter: {
            inv_sala: {
              _eq: ubicazione,
            },
          },
          limit: -1,
          fields: "id",
        });

        promises.push(privateDataPromise);
      }

      const privateDataResults = await Promise.all(promises);

      for (let i = 0; i < myUbis.length; i++) {
        const ubicazione = myUbis[i];
        const privateData = privateDataResults[i];

        const ubiID = privateData.data.map(({ id }) => id);
        const query = {
          filter: {
            inv_sala: {
              _in: ubiID,
            },
          },
          fields: ["COUNT(*)"],
          limit: -1,
        };
        const Qtty = await directus.items("inventario").readByQuery(query);
        const totalItems = Qtty.data.length;
        totalSchede += totalItems;
        chartData.push({ ubicazione, count: totalItems });
      }
      // chartData.push({
      //   ubicazione: "Non ubicato",
      //   count: totalInventario.value - totalSchede,
      // });

      Chart.register(Colors);

      const canvas = document.getElementById("salaGp");
      const ctx = canvas.getContext("2d");
      const chart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: chartData.map((row) => row.ubicazione),
          datasets: [
            {
              label: "Schede",
              data: chartData.map((row) => row.count),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            colors: {
              forceOverride: true,
            },
          },
        },
      });
      canvas.onclick = (evt) => {
        const res = chart.getElementsAtEventForMode(
          evt,
          "nearest",
          { intersect: true },
          true
        );
        if (res.length === 0) {
          return;
        }
        const myFilter = {
          filter: {
            inv_sala: {
              _eq: chart.data.labels[res[0].index],
            },
          },
          limit: -1,
        };
        const jsonString = JSON.stringify(myFilter);
        router.push({ name: "searchInv", params: { query: jsonString } });
      };
    }
    async function ubicazioneGraph() {
      let totalSchede = 0;

      const response = await directus.items("inv_ubicazione").readByQuery({
        limit: -1,
        sort: "inv_ubicazione",
        fields: "inv_ubicazione",
      });
      const myUbis = response.data.map((item) => item.inv_ubicazione);

      const chartData = [];
      for (const ubicazione of myUbis) {
        const privateData = await directus.items("inv_ubicazione").readByQuery({
          filter: {
            inv_ubicazione: {
              _eq: ubicazione,
            },
          },
          limit: -1,
        });

        const ubiID = privateData.data.map(({ id }) => id);
        const query = {
          filter: {
            inv_ubicazione: {
              _in: ubiID,
            },
          },
          fields: ["COUNT(*)"],
          limit: -1,
        };
        const Qtty = await directus.items("inventario").readByQuery(query);
        const totalItems = Qtty.data.length;
        totalSchede += totalItems;
        chartData.push({ ubicazione, count: totalItems });
      }
      // chartData.push({
      //   ubicazione: "Non ubicato",
      //   count: totalInventario.value - totalSchede,
      // });

      Chart.register(Colors);
      const canvas = document.getElementById("ubicazioneGp");
      const ctx = canvas.getContext("2d");
      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: chartData.map((row) => row.ubicazione),
          datasets: [
            {
              label: "Schede",
              data: chartData.map((row) => row.count),
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
            colors: {
              forceOverride: true,
            },
          },
        },
      });
      canvas.onclick = (evt) => {
        const res = chart.getElementsAtEventForMode(
          evt,
          "nearest",
          { intersect: true },
          true
        );
        if (res.length === 0) {
          return;
        }
        const myFilter = {
          filter: {
            inv_ubicazione: {
              _eq: chart.data.labels[res[0].index],
            },
          },
          limit: -1,
        };
        const jsonString = JSON.stringify(myFilter);
        router.push({ name: "searchInv", params: { query: jsonString } });
      };
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
