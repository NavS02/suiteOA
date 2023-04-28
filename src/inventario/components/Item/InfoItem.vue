<template>
  <main id="main" class="main">
    <section class="section profile" id="element">
      <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div
              class="card-body profile-card pt-4 d-flex flex-column align-items-center"
            >
              <img :src="imgurl" />
              <br />
              <div class="social-links mt-2">
                <a @click="onPrintClicked" class="twitter"
                  ><i class="bi bi-printer"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card">
            <div
              class="tab-content pt-2 tab-pane profile-overview card-body profile-card pt-4 d-flex flex-column"
            >
              <div class="row">
                <!-- Display a table with data from the response object -->
                <template v-for="(value, field) in response" :key="field">
                  <!-- If the value is not an array, display it as text -->
                  <div v-if="value" class="col-lg-3 col-md-4 label">
                    {{ field }}
                  </div>

                  <div
                    v-if="!Array.isArray(value) && value"
                    id="itemName"
                    class="col-lg-9 col-md-8"
                  >
                    {{ value }}
                  </div>
                  <!-- If the value is an array, display each item as a list with its fields -->
                </template>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-12">
          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <ul class="nav nav-tabs nav-tabs-bordered" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    @click="greet"
                    class="nav-link active"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-overview"
                    aria-selected="true"
                    role="tab"
                  >
                    Oggetto
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-edit"
                    aria-selected="false"
                    tabindex="-1"
                    role="tab"
                  >
                    Materia
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#iscrizione"
                    aria-selected="false"
                    tabindex="-1"
                    role="tab"
                  >
                    Stima
                  </button>
                </li>

                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#ambito"
                    aria-selected="false"
                    tabindex="-1"
                    role="tab"
                  >
                    Ubicazione
                  </button>
                </li>
              </ul>
              <div class="tab-content pt-2">
                <div
                  class="tab-pane fade show active profile-overview"
                  id="profile-overview"
                  role="tabpanel"
                >
                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->
                    <div v-if="field === 'inv_oggetto'">
                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div
                        class="row"
                        v-for="(item, index) in value"
                        :key="index"
                      >
                        <template
                          v-for="(itemValue, itemField) in item"
                          :key="itemField"
                        >
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9">
                              : {{ itemValue }}
                            </span>
                          </li>
                        </template>
                      </div>
                    </div>
                  </span>
                </div>

                <div
                  class="tab-pane fade profile-overview pt-3"
                  id="profile-edit"
                  role="tabpanel"
                >
                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->

                    <div v-if="field === 'inv_materia'">
                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div
                        class="row"
                        v-for="(item, index) in value"
                        :key="index"
                      >
                        <template
                          v-for="(itemValue, itemField) in item"
                          :key="itemField"
                        >
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9">
                              : {{ itemValue }}
                            </span>
                          </li>
                        </template>
                      </div>
                    </div>
                  </span>
                </div>

                <div
                  class="tab-pane profile-overview fade pt-3"
                  id="profile-settings"
                  role="tabpanel"
                >
                  <div
                    v-for="(item, index) in response?.inv_stima"
                    :key="index"
                  >
                    <h4>{{ index }}</h4>
                    <ul>
                      <li v-for="(value, field) in item" :key="field">
                        <span>{{ field }}:</span>
                        <span>{{ value }}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="tab-pane fade pt-3" id="ambito" role="tabpanel">
                  <!-- Change Password Form -->
                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->

                    <div v-if="field === 'inv_ubicazione'">
                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div
                        class="row"
                        v-for="(item, index) in value"
                        :key="index"
                      >
                        <template
                          v-for="(itemValue, itemField) in item"
                          :key="itemField"
                        >
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9">
                              : {{ itemValue }}
                            </span>
                          </li>
                        </template>
                      </div>
                    </div>
                  </span>
                </div>

                <div
                  class="tab-pane profile-overview fade pt-3"
                  id="iscrizione"
                  role="tabpanel"
                >
                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->

                    <div v-if="field === 'inv_stima'">
                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div
                        class="row"
                        v-for="(item, index) in value"
                        :key="index"
                      >
                        <template
                          v-for="(itemValue, itemField) in item"
                          :key="itemField"
                        >
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9">
                              : {{ itemValue }}
                            </span>
                          </li>
                        </template>
                      </div>
                    </div>
                  </span>
                </div>

                <div
                  class="tab-pane profile-overview fade pt-3"
                  id="stemmi"
                  role="tabpanel"
                >
                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->

                    <div v-if="field === 'stemmi'">
                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div
                        class="row"
                        v-for="(item, index) in value"
                        :key="index"
                      >
                        <template
                          v-for="(itemValue, itemField) in item"
                          :key="itemField"
                        >
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9">
                              : {{ itemValue }}
                            </span>
                          </li>
                        </template>
                      </div>
                    </div>
                  </span>
                </div>

                <div
                  class="tab-pane profile-overview fade pt-3"
                  id="fonte"
                  role="tabpanel"
                >
                  <span v-for="(value, field) in response" :key="field">
                    <!-- If the value is not an array, display it as text -->

                    <div v-if="field === 'fonte'">
                      <!-- If the value is an array, display each item as a list with its fields -->

                      <div
                        class="row"
                        v-for="(item, index) in value"
                        :key="index"
                      >
                        <template
                          v-for="(itemValue, itemField) in item"
                          :key="itemField"
                        >
                          <!-- Check if the field name is "author" -->
                          <li class="row" v-if="itemValue">
                            <span v-if="itemValue" class="col-lg-1 label">
                              {{ itemField }}
                            </span>

                            <span v-if="itemValue" class="col-lg-9">
                              : {{ itemValue }}
                            </span>
                          </li>
                        </template>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <!-- End Bordered Tabs -->
            </div>
          </div>
        </div>
        <!--  -->
      </div>
    </section>
    <div
      class="modal fade show"
      id="ExtralargeModal"
      tabindex="-1"
      style="display: block"
      aria-modal="true"
      role="dialog"
      v-if="showAlert"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Select print type</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeAlert"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <!-- Contenido de la primera carta -->
                <div class="card cardSelector">
                  <div class="card-body">
                    <h5 class="card-title">Type 1</h5>
                    <img
                      src="/option1.png"
                      style="width: 100%"
                      @click="print()"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <!-- Contenido de la segunda carta -->
                <div class="card cardSelector">
                  <div class="card-body">
                    <h5 class="card-title">Type 2</h5>
                    <img
                      src="/option1.png"
                      style="width: 100%"
                      @click="print()"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, watch, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { directus } from "../../API";
import * as settings from "../../settings/";
import html2pdf from "html2pdf.js";

export default {
  setup(props, context) {
    // Define some variables to use in the component
    const route = useRoute();
    const router = useRouter();
    const collection = ref("");
    const item = ref("");
    const { id } = toRefs(props);
    const response = ref(null);
    const responseArray = [];
    var loaded = false;
    let imgurl = ref("/not-found.svg");

    // Watch for changes in the route object
    watch(
      route,
      () => {
        // Infer the collection from the route parameters
        collection.value = route.params?.collection;
        if (!collection.value) return;
        // Retrieve the settings for the collection
        const itemSettings = settings[collection.value];
        // Fetch data for the collection
        getData();
      },
      { immediate: true, deep: true }
    );

    async function getData() {
      let originalResponse = {};

      try {
        if (collection.value == "inventario") {
          response.value = await directus
            .items(collection.value)
            .readOne(id.value, {
              fields: "*",
            });
          console.log(response.value);

          // INV_OGGETTO
          if (response.value.inv_oggetto !== null) {
            const invOggetto = await directus.items("inv_oggetto").readByQuery({
              filter: {
                id: { _eq: response.value.inv_oggetto },
              },
              limit: -1,
            });
            response.value.inv_oggetto = invOggetto.data;
          }

          // INV_MATERIA
          if (response.value.inv_materia.length > 0) {
            const idsMateria = response.value.inv_materia.map((item) => item);

            const invMateriaRelation = await directus
              .items("inventario_inv_materia")
              .readByQuery({
                filter: {
                  id: { _in: idsMateria },
                },
                limit: -1,
              });

            const idsArrayM = invMateriaRelation.data.map(
              (item) => item.inv_materia_id
            );

            const invMateriaItems = await directus
              .items("inv_materia")
              .readByQuery({
                filter: {
                  id: { _in: idsArrayM },
                },
                limit: -1,
              });

            response.value.inv_materia = invMateriaItems.data;
          }

          // INV_STIMA
          if (response.value.inv_stima.length > 0) {
            const idsStima = response.value.inv_stima.map((item) => item);

            const invStimmaRelation = await directus
              .items("inventario_inv_stima")
              .readByQuery({
                filter: {
                  id: { _in: idsStima },
                },
                limit: -1,
              });
            const idsArrayS = invStimmaRelation.data.map(
              (item) => item.inv_stima_id
            );
            console.log(idsArrayS);

            const invStimaItems = await directus
              .items("inv_stima")
              .readByQuery({
                filter: {
                  id: { _in: idsArrayS },
                },
                limit: -1,
              });

            response.value.inv_stima = invStimaItems.data;
          }

          // INV_UBICAZIONE
          if (response.value.inv_ubicazione !== null) {
            const invUbiRelation = await directus
              .items("inv_ubicazione")
              .readByQuery({
                filter: {
                  id: { _eq: response.value.inv_ubicazione },
                },
                limit: -1,
              });
            console.log(invUbiRelation);
            response.value.inv_ubicazione = invUbiRelation.data;
          }

          removePropierty(response.value, "user_created");
          removePropierty(response.value, "date_created");
          removePropierty(response.value, "user_updated");
          removePropierty(response.value, "date_updated");

          function removePropierty(object, propiedad) {
            for (let key in object) {
              if (typeof object[key] === "object" && object[key] !== null) {
                removePropierty(object[key], propiedad);
              } else if (key === propiedad) {
                delete object[key];
              }
            }
          }
        }
      } catch (error) {}
    }

    const inventario = [
      "invn",
      "dismesso",
      "quantita",
      "soggetto",
      "descrizione",
      "autore",
      "data",
      "misure",
      "deposito",
      "parete",
      "ubi_specifica",
      "conservazione",
      "preovenienza",
      "acquisizione",
      "restauro",
      "mostre",
      "prestito",
      "propieta",
      "note",
    ];

    return { response, loaded, inventario, imgurl };
  },
  props: {
    collection: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    onPrintClicked() {
      this.showAlert = true;
    },
    closeAlert() {
      this.showAlert = false;
    },
    print() {
      var opt = {
        margin: 1,
        filename: this.id + ".pdf",
        image: { type: "png", quality: 0.5 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
      };
      html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          console.log("PDF Generated");
        });
      this.showAlert = false;
    },
    greet(response) {
      const autore = ["auta", "autb"];
      let html = "";

      if (response && response.__v_raw) {
        const arrayObject = response.__v_raw;

        for (let i = 0; i < arrayObject.length; i++) {
          for (let j = 0; j < autore.length; j++) {
            html += `<h5 class="card-title">${arrayObject[i][autore[j]]}</h5>`;
            console.log(arrayObject[i][autore[j]]);
          }
        }
      }

      return html;
    },
  },
  data() {
    return {
      showAlert: false,
    };
  },
};
</script>

<style>
.profile .profile-card img {
  max-width: 100%;
}

.nav-tabs-bordered .nav-link.active {
  background-color: #fff;
  color: #4154f1;
  border-bottom: 2px solid #4154f1;
}

.nav-tabs-bordered .nav-link.active {
  background-color: #fff;
  color: #4154f1;
  border-bottom: 2px solid #4154f1;
}

.nav-tabs-bordered .nav-link {
  margin-bottom: -2px;
  border: none;
  color: #2c384e;
}

.profile .profile-overview .label {
  font-weight: 600;
  color: rgba(1, 41, 112, 0.6);
  text-transform: capitalize;
  padding: 8px;
}

div#itemName {
  padding: 7px;
}

li {
  list-style: none;
  padding: 6px;
}

h3.card-title {
  text-align: center;
  text-transform: capitalize;
}

h3.card-title {
  padding: 0px;
  font-size: 18px;
  font-weight: 500;
  color: #012970;
  font-family: "Poppins", sans-serif;
}

.profile .profile-card .social-links a {
  font-size: 36px;
  display: inline-block;
  color: rgba(1, 41, 112, 0.5);
  line-height: 0;
  margin-right: 10px;
  text-align: center;
  transition: 0.3s;
}

.profile .profile-overview .row {
  margin-bottom: 0px;
  font-size: 15px;
}

/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons inside the tab */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
.cardSelector:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-35px);
  transition: all 2s ease;
  cursor: pointer;
}
</style>
