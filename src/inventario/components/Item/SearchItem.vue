<template>
  <main id="main" class="main">
    <div class="col-12">
      <div>
        <div class="row">
          <div class="col-md-6">
            <label class="form-label" :for="`form-id`">ID:</label>
            <input
              type="number"
              class="form-control"
              v-model="form.id"
              :id="`form-id`"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div class="col-md-6">
            <label class="form-label" :for="`form-autore`"
              >Autore (AUTN):</label
            >
            <input
              type="text"
              class="form-control"
              v-model="form.autore"
              :id="`form-autore`"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label class="form-label" :for="`form-ubicazione`"
              >Ubicazione</label
            >

            <select
              class="form-select"
              aria-label="Collezione"
              v-model="form.ubicazione"
              :id="'form-ubicazione'"
            >
              <option
                v-for="(col, index) in ubicazione"
                :key="index"
                :value="col"
              >
                {{ col }}
              </option>
            </select>
          </div>
          <div class="col-md-6">
            <label class="form-label" :for="`form-invn`"
              >Inventario (INVN):</label
            >
            <input
              type="text"
              class="form-control"
              v-model="form.invn"
              :id="`form-invn`"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <label class="form-label" :for="`form-mtc`">Materia:</label>
            <input
              type="text"
              class="form-control"
              v-model="form.mtc"
              :id="`form-mtc`"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div class="col-md-6">
            <label class="form-label" :for="`form-ogtd`">Oggetto (OGTD):</label>
            <input
              type="text"
              class="form-control"
              v-model="form.ogtd"
              :id="`form-ogtd`"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12"></div>
        </div>
      </div>

      <br />
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="fetchData('all')"
      >
        Cerca
      </button>
      &nbsp
      <button type="button" class="btn btn-outline-danger" @click="clearData()">
        Annulla
      </button>
      <hr />
      <!-- Mostra:
      <input
        type="number"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value="50"
        id="limit"
        @input="infoQty()"
      /> -->
<div class="d-flex align-items-center">
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-primary dropdown-toggle"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      Mostra: {{ resultLimit }}
    </button>
    <ul class="dropdown-menu">
      <li @click="infoQty(5)">5</li>
      <li @click="infoQty(10)">10</li>
      <li @click="infoQty(25)">25</li>
      <li @click="infoQty(50)">50</li>
      <li @click="infoQty(100)">100</li>
    </ul>
  </div>
  &nbsp;
  {{ totalResult }} schede trovate


  <div class="ml-auto" style="margin-left: auto; 
margin-right: 0;"> 
    <button type="button" class="btn btn-light">Advanced search</button>

  </div>
</div>


      <div>
        <div class="form-check" style="float: right">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDisabled"
            id="flexRadioDefault1"
            v-model="selectedInterface"
            value="list"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Lista
          </label>
        </div>

        <div class="form-check" style="float: right">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDisabled"
            id="flexRadioDefault2"
            v-model="selectedInterface"
            value="card"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Carta &nbsp
          </label>
        </div>
      </div>
      <div class="card gradient-dark-grey" style="margin-top: 30px">
        <div class="card-header">
          <div class="">
            <header class="mb-2"></header>
          </div>
        </div>
        <div class="card-body" v-if="selectedInterface === 'list'">
          <div class="table-responsive">
            <Table
              class="table v-middle m-0"
              :items="items"
              :fields="fields"
              id="table"
            >
              <template #cell(actions)="{ item, field, value }">
                <div class="actions">
                  <button
                    title="edit"
                    class="btn btn-sm btn-light"
                    @click="onEditClicked(item)"
                  >
                    <font-awesome-icon icon="fa-solid fa-pencil" fixed-width />
                  </button>

                  <button
                    title="save"
                    class="btn btn-sm btn-light text-danger"
                    @click="onSaveClicked(item)"
                  >
                    <i class="bi bi-heart" :id="'saveButton-' + item.id"></i>
                  </button>
                  <button
                    title="delete"
                    class="btn btn-sm btn-light text-danger"
                    @click="onDeleteClicked(item)"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash" fixed-width />
                  </button>

                  <button
                    title="Info"
                    class="btn btn-sm btn-light"
                    @click="onInfoClicked(item)"
                  >
                    <i class="bi bi-printer"></i>
                  </button>
                  <!-- <button
                    title="APP"
                    class="btn btn-sm btn-light"
                    @click="createApp(item)"
                  >
                    <i class="bi bi-phone" :id="'phoneButton-' + item.id"></i>
                  </button> -->
                </div>
              </template>
            </Table>
          </div>
        </div>

        <div class="card-body" v-if="selectedInterface === 'card'">
          <div class="row">
            <div class="col-15">
              <div class="row">
                <div
                  v-for="(item, index) in items"
                  :key="index"
                  class="mb-3 col-md-3"
                  style="margin-bottom: 20px"
                >
                  <div class="card" style="height: 100%; margin: -5px">
                    <div class="card-body">
                      <h4 class="text-center">id {{ item.id }}</h4>

                      <button
                        title="save"
                        class="btn btn-sm btn-light text-danger text-center"
                        style="position: absolute; top: 10px; right: 10px"
                        @click="onSaveClicked(item)"
                      >
                        <i
                          class="bi bi-heart"
                          :id="'saveButton-' + item.id"
                        ></i>
                      </button>
                      <div
                        class="text-center"
                        style="
                          border: 1px solid #999999;
                          width: 300px;
                          height: 300px;
                          margin: 0 auto;
                          margin-top: 15px;
                        "
                      >
                        <img
                          :src="imageurl"
                          alt=""
                          style="
                            max-width: 250px;
                            max-height: 250px;
                            margin-top: 15px;
                          "
                          :id="'photo-' + index"
                        />
                      </div>
                      <div class="text-center">
                        <h5 style="margin-top: 20px">
                          {{ item.invn }}, {{ item.autore }}
                        </h5>
                        <div class="actions">
                          <button
                            title="edit"
                            class="btn btn-sm btn-light"
                            @click="onEditClicked(item)"
                          >
                            <font-awesome-icon
                              icon="fa-solid fa-pencil"
                              fixed-width
                            />
                          </button>

                          <button
                            title="delete"
                            class="btn btn-sm btn-light text-danger"
                            @click="onDeleteClicked(item)"
                          >
                            <font-awesome-icon
                              icon="fa-solid fa-trash"
                              fixed-width
                            />
                          </button>
                          <button
                            title="Info"
                            class="btn btn-sm btn-light"
                            @click="onInfoClicked(item)"
                          >
                            <i class="bi bi-printer"></i>
                          </button>
                          <!-- <button
                            title="APP"
                            class="btn btn-sm btn-light"
                            @click="createApp(item)"
                          >
                            <i
                              class="bi bi-phone"
                              :id="'phoneButton-' + item.id"
                            ></i>
                          </button> -->
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav aria-label="...">
          <ul
            class="pagination"
            style="display: flex; flex-wrap: wrap; justify-content: center"
          >
            <li
              class="page-item"
              @click="skipPage('first')"
              :id="'before'"
              v-if="totalPages > 0"
            >
              <a class="page-link">First</a>
            </li>
            <li
              class="page-item"
              @click="skipPage('substract')"
              :id="''"
              v-if="totalPages > 0 && currentPage - 1 !== 0"
            >
              <a class="page-link">
                <span>{{ currentPage - 1 }}</span>
              </a>
            </li>
            <li
              class="page-item"
              @click="skipPage('current')"
              :id="'tablePage-'"
              v-if="totalPages > 0"
            >
              <a
                class="page-link"
                style="background-color: #0a58ca; color: white"
                >{{ currentPage }}</a
              >
            </li>
            <li
              class="page-item"
              @click="skipPage('pass')"
              :id="'tablePage-'"
              v-if="totalPages > 0 && currentPage + 1 !== totalPages + 1"
            >
              <a class="page-link"> {{ currentPage + 1 }}</a>
            </li>

            <li
              class="page-item"
              @click="skipPage('last')"
              :id="'tablePage-'"
              v-if="totalPages > 0"
            >
              <a class="page-link">Last</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <Loaded v-if="!loaded" />
    <h1 class="text-center" v-if="noResult">Nessun risultato</h1>
  </main>
</template>

<script setup>
import { debounce } from "../../../utils";
import { useSearch } from "../../../store/search";
import { useStorage } from "../../../utils/useStorage";
import { ref, computed, watch, inject, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
import { directus } from "../../API/";
import * as settings from "../../settings/";
import Table from "../common/Table/Table.vue";
import Loaded from "../common/Loader.vue";
import { onMounted } from "vue";
import { createPopper } from "@popperjs/core";

const route = useRoute();
const router = useRouter();
const modal = inject("$modalManager");

const searchStore = ref(useSearch("opera"));
const debounceQuery = debounce((value) => {}, 300);
const storageManager = useStorage("advanced-search-form");
const sti_tipo = ref([]);
const collezione = ref([]);
const showInfo = ref(false);
const page2 = ref(1);
const limit2 = ref(10);
const totalItems2 = ref(0);
const collection = [];
const items = ref(null);
const fields = ref([]);
const itemsFiltered = ref([]);
const itemsFiltered2 = ref([]);

var totalResult = ref(0);
var totalPages = ref();
let currentPage = ref(0);
let currentItem = ref();
let selectedInterface = ref("list");
const url = ref();
let imageurl = ref("/logoopaSiena.png");
const me = ref();
const showAlert = ref(false);
const counter = ref(0);
const loaded = ref(true);
const image = ref();
let noResult = ref(false);
let resultLimit = ref(50);
const randomKeyForm = ref(Math.random());
const schedeQTY = ref();
const props = defineProps({
  query: { type: String, default: "" },
});
const ubicazione = ref([]);
const { query } = toRefs(props);
const makeEmptyForm = () => ({
  id: "",
  autore: "",
  invn: "",
  ogtd: "",
  mtc: "",
  ubicazione: "",
  sala: "",
});
const form = ref(storageManager.get() ?? makeEmptyForm());
// watch the route and update data based on the collection param
watch(
  route,
  () => {
    collection.value = "inventario";
    if (!collection.value) return;
    // retrieve the settings
    const itemSettings = settings[collection.value];
    // define the subset of fields you need to view in the table
    const collectionFields = itemSettings.tableFields();
    fields.value = collectionFields;
    fetchRelationalItems();

    if (query.value !== "null") {
      if (query.value.includes("inv_ubicazione")) {
        let parsedFilter = JSON.parse(query.value);
        const myUbicazione = parsedFilter.filter.inv_ubicazione._eq;
        form.value.ubicazione = myUbicazione;
        fetchData();
        storageManager.remove();
      } else if (query.value.includes("inv_sala")) {
        let parsedFilter = JSON.parse(query.value);
        const mySala = parsedFilter.filter.inv_sala._eq;
        form.value.sala = mySala;
        fetchData();
        storageManager.remove();
      }
    }
  },
  { immediate: true, deep: true }
);
watch(selectedInterface, () => {
  skipPage("first");
});

const createLink = computed(() => ({
  name: "createItem",
  params: { collection: collection.value },
}));

async function fetchRelationalItems() {
  try {
    const response = await directus
      .items("inv_ubicazione")
      .readByQuery({ limit: -1, sort: "inv_ubicazione" });
    ubicazione.value = response.data.map((item) => item.inv_ubicazione);
    ubicazione.value.push("");
  } catch (error) {}
}

async function fetchImages() {
  if (selectedInterface.value == "card") {
    url.value = import.meta.env.VITE_API_BASE_URL;
    const imagesDirectory = await directus
      .items("directus_files")
      .readByQuery({ limit: -1 });
    counter.value = 0;
    try {
      for (let index = 0; index < items.value.length; index++) {
        let imageElement = document.getElementById("photo-" + index);
        imageElement.src = imageurl.value;
      }
      items.value.forEach((item) => {
        if (item.icona !== null) {
          imagesDirectory.data.forEach((imageItem) => {
            if (item.icona == imageItem.id) {
              image.value = imageItem.id;
            }
          });

          let imageElement = document.getElementById("photo-" + counter.value);
          const imageUrl = url.value + "/assets/" + image.value; // generates url
          fetch(imageUrl)
            .then((response) => response.blob())
            .then((blob) => {
              // CODE64 IMAGE
              const reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onloadend = () => {
                const base64data = reader.result; //code64 the url
                imageElement.src = base64data;
              };
            });
        }
        counter.value++;
      });
    } catch (error) {}
  }
}

// CHANGE PAGE
function skipPage(page) {
  if (page == "pass" && currentPage.value < totalPages.value) {
    currentPage.value++;
  } else if (page == "substract" && currentPage.value > 1) {
    currentPage.value--;
  } else if (page == "first") {
    currentPage.value = 1;
  } else if (page == "last") {
    currentPage.value = totalPages.value;
  }
  const { data = [] } = itemsFiltered.value;
  data.slice(1, 3);
  items.value = data.slice(
    (currentPage.value - 1) * resultLimit.value,
    currentPage.value * resultLimit.value
  );

  fetchIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
  fetchImages();

  // fetchRelations();
}

async function fetchData(settings) {
  storageManager.set(form.value);

  counter.value = 0;
  loaded.value = false;
  let query = {
    limit: -1,
    filter: {},
    fields: "id,invn,quantita,soggetto,autore,icona",
  };

  try {
    if (form.value.id !== "") {
      query["filter"]["id"] = { _eq: form.value.id };
    }
    if (form.value.autore !== "") {
      query["filter"]["autore"] = { _contains: form.value.autore };
    }
    if (form.value.ubicazione !== "") {
      const privateData = await directus.items("inv_ubicazione").readByQuery({
        filter: {
          inv_ubicazione: {
            _eq: form.value.ubicazione,
          },
        },
        limit: -1,
      });
      const ubiID = privateData.data.map(({ id }) => id);
      query["filter"]["inv_ubicazione"] = {
        _in: ubiID,
      };
    }
    if (form.value.sala !== "") {
      const privateData = await directus.items("inv_sala").readByQuery({
        filter: {
          inv_sala: {
            _eq: form.value.sala,
          },
        },
        limit: -1,
      });
      const salaID = privateData.data.map(({ id }) => id);
      query["filter"]["inv_sala"] = {
        _in: salaID,
      };
    }
    if (form.value.ogtd !== "") {
      const privateData = await directus.items("inv_oggetto").readByQuery({
        filter: {
          inv_oggetto: {
            _contains: form.value.ogtd,
          },
        },
        limit: -1,
      });
      if (privateData.data.length > 0) {
        const oggettoID = privateData.data.map(({ id }) => id);
        query["filter"]["inv_oggetto"] = { _in: oggettoID };
      } else {
        query["filter"]["inv_oggetto"] = { _in: null };
      }
    }
    // INVENTARIO
    if (form.value.invn !== "") {
      query["filter"]["invn"] = { _eq: form.value.invn };
    }
    if (form.value.mtc !== "") {
      const privateData = await directus.items("inv_materia").readByQuery({
        filter: {
          inv_materia: { _contains: form.value.mtc },
        },
        limit: -1,
      });
      const materiaID = privateData.data.map(({ id }) => id);

      query["filter"]["inv_materia"] = {
        _in: materiaID,
      };
    }

    itemsFiltered.value = await directus
      .items(collection.value)
      .readByQuery(query);

    const { data = [] } = itemsFiltered.value;
    if (data.length < 1) {
      items.value = null;
    } else {
      loaded.value = true;

      items.value = data;
      noResult.value = false;

      totalItems2.value = items.value.length;
    }
  } catch (error) {
    items.value = null;
  }
  // SAVED ITEMS
  if (items.value == null) {
    loaded.value = true;
    noResult.value = true;
  }
  // fetchRelations();
  infoQty();
}
function infoQty(qty) {
  try {
    if (qty !== undefined) {
      resultLimit.value = qty;
    }
    const { data = [] } = itemsFiltered.value;
    items.value = data.slice(0, resultLimit.value);

    totalResult.value = data.length;
    totalPages.value = Math.ceil(totalResult.value / resultLimit.value);
  } catch (error) {}
  // fetchRelations()
  skipPage("first");
}
async function fetchRelations() {
  counter.value = 0;
  let autoreNames = "";
  let ogtdNames = "";
  let inventarioNames = "";
  let query = {
    limit: -1,
    filter: {},
  };
  const opereAutore = await directus.items("opera_autore").readByQuery(query);
  const autoreData = await directus.items("autore").readByQuery(query);

  const ogtdData = await directus.items("ogtd").readByQuery(query);

  const opereInventario = await directus.items("opera_inv").readByQuery(query);
  const inventarioData = await directus.items("inv").readByQuery(query);
  // AUTORE
  counter.value = 0;
  itemsFiltered.value.data.forEach((item) => {
    autoreNames = "";
    if (
      Array.isArray(item.autore) &&
      (item.autore.length > 0 || item.autore !== null)
    ) {
      item.autore.forEach((itemAutore) => {
        opereAutore.data.forEach((relationalItem) => {
          if (relationalItem.id == itemAutore) {
            autoreData.data.forEach((relationalAutore) => {
              if (relationalItem.autore_id == relationalAutore.id) {
                autoreNames += relationalAutore.autn + " ";
              }
            });
            itemsFiltered.value.data[counter.value].autore = autoreNames;
          }
        });
      });

      counter.value++;
    }
  });
  // OGTD
  counter.value = 0;
  itemsFiltered.value.data.forEach((item) => {
    ogtdNames = "";
    if (item.ogtd !== null && item.ogtd !== "") {
      ogtdData.data.forEach((ogtdItem) => {
        if (ogtdItem.id == item.ogtd) {
          itemsFiltered.value.data[counter.value].ogtd = ogtdItem.ogtd;
        }
      });
    }
    counter.value++;
  });

  // INV
  counter.value = 0;
  itemsFiltered.value.data.forEach((item) => {
    inventarioNames = "";
    if (Array.isArray(item.inv) && item.inv.length > 0 && item.inv !== null) {
      item.inv.forEach((itemInv) => {
        opereInventario.data.forEach((relationalItem) => {
          if (relationalItem.id == itemInv) {
            inventarioData.data.forEach((relationalInv) => {
              if (relationalItem.inv_id == relationalInv.id) {
                inventarioNames += relationalInv.invn + " ";
              }
            });
          }
        });
      });
    }
    try {
      itemsFiltered.value.data[counter.value].inv = inventarioNames;
    } catch (error) {}

    counter.value++;
  });

  // try {
  //   url.value = import.meta.env.VITE_API_BASE_URL;
  //   const imagesDirectory = await directus
  //     .items("directus_files")
  //     .readByQuery({ limit: -1 });
  //   counter.value = 0;

  //   itemsFiltered.value.data.forEach((item) => {
  //     if (item.icona !== null) {
  //       imagesDirectory.data.forEach((imageItem) => {
  //         if (item.icona == imageItem.id) {
  //           image.value = imageItem.id;
  //         }
  //       });

  //       let imageElement = document.getElementById("photo-" + counter.value);
  //       const imageUrl = url.value + "/assets/" + image.value; // generates url
  //       // fetch(imageUrl)
  //       //   .then((response) => response.blob())
  //       //   .then((blob) => {
  //       //     // CODE64 IMAGE
  //       //     const reader = new FileReader();
  //       //     reader.readAsDataURL(blob);
  //       //     reader.onloadend = () => {
  //       //       const base64data = reader.result; //code64 the url
  //       //       imageElement.src = base64data;
  //       //     };
  //       //   });
  //     }

  //     counter.value++;
  //   });
  // } catch (error) {}
}
async function fetchIcons() {
  // SAVE BUTTON
  me.value = await directus.users.me.read();

  let query2 = {
    limit: -1,
    filter: {
      user_created: {
        _eq: me.value.id,
      },
    },
  };
  const responseSaved = await directus.items("prefI").readByQuery(query2);

  for (let x = 0; x < responseSaved.data.length; x++) {
    try {
      let iconSaved = document.getElementById(
        "saveButton-" + responseSaved.data[x].id_opera
      );

      iconSaved.className = "bi bi-heart-fill";
    } catch (error) {}
  }
  // // PHONE BUTTON
  // for (let index = 0; index < items.value.length; index++) {
  //   if (items.value[index].app !== null) {
  //     try {
  //       let iconPhone = document.getElementById(
  //         "phoneButton-" + items.value[index].id
  //       );

  //       iconPhone.className = "bi bi-phone-fill";
  //     } catch (error) {}
  //   }
  // }
}

function clearData() {
  storageManager.remove();
  form.value = makeEmptyForm();
  totalResult.value = 0;
  totalPages.value = 0;
  currentPage.value = 0;
  url.value = window.location.origin;
  items.value = null;
  itemsFiltered.value = null;
  itemsFiltered2.value = null;
  loaded.value = true;
  // CLEAR TABLEE
}

async function deleteItem(item) {
  const { id } = item;
  await directus.items(collection.value).deleteOne(id);
  fetchData();
}
function onEditClicked(item) {
  router.push({
    name: "editItemInv",
    params: { id: item.id, collection: collection.value },
  });
}
async function onDeleteClicked(item) {
  const confirmed = await modal.confirm({
    title: "Confirm",
    body: "Sei sicuro di voler eliminare questo elemento?",
  });
  if (confirmed) deleteItem(item);
}
function onInfoClicked(item) {
  router.push({
    name: "printItemI",
    params: { id: item.id, collection: "inventario" },
  });
}

async function onSaveClicked(item) {
  let iconSaved = document.getElementById("saveButton-" + item.id);
  if (iconSaved.classList.contains("bi-heart")) {
    iconSaved.className = "bi bi-heart-fill";
    await directus.items("prefI").createOne({
      id_opera: item.id,
    });
  } else {
    iconSaved.className = "bi bi-heart";

    let query = {
      limit: -1,
      filter: {
        id_opera: {
          _eq: item.id,
        },
        user_created: {
          _eq: me.value.id,
        },
      },
    };

    iconSaved.className = "bi bi-heart";
    let response = await directus.items("prefI").readByQuery(query);
    await directus.items("prefI").deleteOne(response.data[0].id);
  }
}

function closeAlert() {
  showAlert.value = false;
}
function printS() {
  router.push({
    name: "modelSan",
    params: { id: currentItem.value.id },
  });
}
function printP() {
  router.push({
    name: "modelPres",
    params: { id: currentItem.value.id },
  });
}
function printInfo() {
  router.push({
    name: "InfoItemArch",
    params: { id: currentItem.value.id, collection: "opera" },
  });
}

async function createApp(itemSelected) {
  const Myitem = await directus.items("opera").readByQuery({
    filter: {
      id: { _eq: itemSelected.id },
    },
    limit: -1,
  });
  let item = Myitem.data[0];
  let iconPhone = document.getElementById("phoneButton-" + item.id);
  if (iconPhone.classList.contains("bi-phone")) {
    const opereMtc = await directus.items("opera_mtc").readByQuery({
      filter: {
        id: { _in: item.mtc },
      },
      limit: -1,
    });
    const idOpereMTC = opereMtc.data.map(({ mtc_id }) => mtc_id);

    const mtcValueApp = await directus.items("mtc").readByQuery({
      filter: {
        id: { _in: idOpereMTC },
      },
      limit: -1,
    });
    let mtcAPP = "";
    for (let index = 0; index < mtcValueApp.data.length; index++) {
      mtcAPP += mtcValueApp.data[index].mtc + " ";
    }

    iconPhone.className = "bi bi-phone-fill";
    const MyItem = await directus.items("opera").readByQuery({
      filter: {
        id: { _eq: item.id },
      },
      limit: -1,
    });
    // TAKE AUTORE INFO
    let autaValues = "";
    let autsID = [];
    let autsValues = "";

    try {
      const autoreOpera = await directus.items("opera_autore").readByQuery({
        filter: {
          id: { _in: MyItem.data[0].autore },
        },
        limit: -1,
      });

      const autoreIds = autoreOpera.data.map((item) => item.autore_id);
      const autores = await directus.items("autore").readByQuery({
        filter: {
          id: { _in: autoreIds },
        },
        limit: -1,
      });

      for (let index = 0; index < autores.data.length; index++) {
        autaValues += autores.data[index].auta + "";
        autsID.push(autores.data[index].auts);
      }
      const autsAutore = await directus.items("auts").readByQuery({
        filter: {
          id: { _in: autsID },
        },
        limit: -1,
      });

      for (let index = 0; index < autsAutore.data.length; index++) {
        autsValues += autsAutore.data[index].auts + " ";
      }
    } catch (error) {
      autaValues = "";
      autsValues = "";
      item.autore = "";
    }
    // COLLEZIONE
    let appCollection;
    try {
      const collezione = await directus.items("collezione").readByQuery({
        filter: {
          id: { _eq: item.collezione },
        },
        limit: -1,
      });
      appCollection = collezione.data[0].collezione;
    } catch (error) {
      appCollection = "";
    }
    // Localizzazione

    let tclFinal = "";
    let prvcFinal = "";
    let prcdFinal = "";
    try {
      const locIDS = MyItem.data.map((item) => item.localizzazione);

      const locOpera = await directus
        .items("opera_localizzazione")
        .readByQuery({
          filter: {
            id: { _in: locIDS },
          },
          limit: -1,
        });
      const locFinalId = locOpera.data.map((item) => item.localizzazione_id);
      const localizzazioneFinal = await directus
        .items("localizzazione")
        .readByQuery({
          filter: {
            id: { _in: locFinalId },
          },
          limit: -1,
        });
      for (let index = 0; index < localizzazioneFinal.data.length; index++) {
        prcdFinal += localizzazioneFinal.data[index].prcd + " ";

        const prvcResult = await directus.items("prvc").readByQuery({
          filter: {
            id: { _in: localizzazioneFinal.data[index].prvc },
          },
          limit: -1,
        });
        for (let index = 0; index < prvcResult.data.length; index++) {
          prvcFinal += prvcResult.data[index].prvc + " ";
        }

        const tclResult = await directus.items("tcl").readByQuery({
          filter: {
            id: { _in: localizzazioneFinal.data[index].tcl },
          },
          limit: -1,
        });
        for (let index = 0; index < tclResult.data.length; index++) {
          tclFinal += tclResult.data[index].tcl + " ";
        }
      }
    } catch (error) {}
    const response2 = await directus.items("app").createOne({
      icona: item.icona,
      invn: item.invn,
      autn: itemSelected.autore,
      auta: autaValues,
      auts: autsValues,
      collezione: appCollection,
      ogtd: itemSelected.ogtd,
      piano: item.piano,
      materia: mtcAPP,
      prcd: prcdFinal,
      prvc: prvcFinal,
      tcl: tclFinal,
      sala: item.sala,
      parete: item.parete,
      sgti: itemSelected.sgti,
      descrizione: item.descrizione_breve,
      specifiche: item.specifiche,
      id_opera: item.id,
    });
    const response = await directus
      .items("opera")
      .updateOne(item.id, { app: response2.id });
  }
}
</script>

<style scoped>
.pagination-container {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 50px;
  overflow: auto;
}

h5 {
  font-size: 16px;
}
.resti {
  font-size: 18px;
  font-weight: 500;
  color: #012970;
  font-family: "Poppins", sans-serif;
}
.resti2 {
  font-size: 14px;
  font-weight: 500;
  color: #012970;
  font-family: "Poppins", sans-serif;
}
.acqn:checked {
  background-color: red;
}
#tooltip {
  background: #333;
  color: white;
  font-weight: bold;
  padding: 4px 8px;
  font-size: 13px;
  border-radius: 4px;
  display: none;
}

#tooltip[data-show] {
  display: block;
}

#arrow,
#arrow::before {
  position: absolute;
  width: 8px;
  height: 8px;
  background: inherit;
}

#arrow {
  visibility: hidden;
}

#arrow::before {
  visibility: visible;
  content: "";
  transform: rotate(45deg);
}

#tooltip[data-popper-placement^="top"] > #arrow {
  bottom: -4px;
}

#tooltip[data-popper-placement^="bottom"] > #arrow {
  top: -4px;
}

#tooltip[data-popper-placement^="left"] > #arrow {
  right: -4px;
}

#tooltip[data-popper-placement^="right"] > #arrow {
  left: -4px;
}
</style>
