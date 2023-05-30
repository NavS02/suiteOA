<template>
  <main id="main" class="main">
    <div class="col-12">
      <!-- Search Form -->
      <keep-alive>
        <searchForm />
      </keep-alive>
      <br />
      
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="fetchData()"
      >
        Cerca
      </button>
      &nbsp
      <button type="button" class="btn btn-outline-danger" @click="clearData()">
        Annulla
      </button>
      <hr />
      Mostra:
      <input
        type="number"
        aria-label="Small"
        aria-describedby="inputGroup-sizing-sm"
        value="50"
        id="limit"
        @input="infoQty()"
      />
      &nbsp
      {{ totalResult }} schede trovate
      <div class="form-check" style="float: right">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDisabled"
          id="flexRadioDefault1"
          v-model="selectedOption"
          value="list"
        />
        <label class="form-check-label" for="flexRadioDefault1"> Lista </label>
      </div>
      <div class="form-check" style="float: right">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDisabled"
          id="flexRadioDefault2"
          v-model="selectedOption"
          value="card"
        />
        <label class="form-check-label" for="flexRadioDefault2"> Carta </label>
      </div>

      <div class="card gradient-dark-grey" style="margin-top: 30px">
        <div class="card-header">
          <div class="">
            <header class="mb-2"></header>
          </div>
        </div>
        <div class="card-body" v-if="selectedOption === 'list'">
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
                    title="delete"
                    class="btn btn-sm btn-light text-danger"
                    @click="onDeleteClicked(item)"
                  >
                    <font-awesome-icon icon="fa-solid fa-trash" fixed-width />
                  </button>
                </div>
              </template>
            </Table>
          </div>
        </div>
        <div class="card-body" v-if="selectedOption === 'card'">
          <div class="row">
            <div class="col-12">
              <div class="row">
                <div
                  v-for="(item, index) in items"
                  :key="index"
                  class="card mb-3 col-md-2"
                  style="margin-bottom: 20px"
                >
                  <div class="card-body">
                    <h4 class="text-center">num {{ item.id }}</h4>

                    <div
                      class="text-center"
                      style="
                        border: 1px solid #999999;
                        width: 200px;
                        height: 200px;
                        margin: 0 auto;
                        margin-top: 15px;
                      "
                    >
                      <img
                        :src="imageurl"
                        alt=""
                        style="max-width: 200px; ax-height: 200px"
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
              v-if="totalPages > 0"
            >
              <a class="page-link" v-if="currentPage - 1 !== 0">
                <span>{{ currentPage - 1 }}</span>
              </a>
            </li>
            <li
              class="page-item"
              @click="skipPage('current')"
              :id="'tablePage-'"
              v-if="totalPages > 0"
            >
              <a class="page-link">{{ currentPage }}</a>
            </li>
            <li
              class="page-item"
              @click="skipPage('pass')"
              :id="'tablePage-'"
              v-if="totalPages > 0"
            >
              <a class="page-link" v-if="currentPage + 1 !== totalPages + 1">
                {{ currentPage + 1 }}</a
              >
            </li>
            <!-- <li
              v-for="index in totalPages"
              :key="index"
              class="page-item"
              @click="skipPage(index)"
              :id="'tablePage-' + index"
            >
              <a class="page-link">{{ index }}</a>
            </li> -->
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
  </main>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { directus } from "../../API/";
import * as settings from "../../settings";
import Table from "../common/Table/Table.vue";
import store from "../../store";
import searchForm from "./searchForm.vue";

export default {
  components: { Table, searchForm },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const user = computed(() => store.user);

    // infer the collection from the route
    const collection = [];
    const items = ref([]);
    const fields = ref([]);
    var itemsFiltered = [];
    var totalResult = ref(0);
    var totalPages = ref();
    let currentPage = ref(2);
    let selectedOption = ref("list");
    const url = ref();
    let imageurl = ref("/logoopaSiena.png");
    let counter = ref(0);
    let image = ref();
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
      },
      { immediate: true, deep: true }
    );
    watch(selectedOption, () => {
     
      skipPage("first");
    });

    function infoQty() {
      try {
        let resultLimit = document.getElementById("limit").value;
        const { data = [] } = itemsFiltered;
        items.value = data.slice(0, resultLimit);

        totalResult.value = itemsFiltered.data.length;
        totalPages.value = Math.ceil(totalResult.value / resultLimit);
      } catch (error) {}
      skipPage("first");
    }
    // CHANGE PAGE
    function skipPage(page) {
      let resultLimit = document.getElementById("limit").value;
      if (page == "pass" && currentPage.value < totalPages.value) {
        currentPage.value++;
      } else if (page == "substract" && currentPage.value > 1) {
        currentPage.value--;
      } else if (page == "first") {
        currentPage.value = 1;
      } else if (page == "last") {
        currentPage.value = totalPages.value;
      }

      const { data = [] } = itemsFiltered;
      data.slice(1, 3);
      items.value = data.slice(
        (currentPage.value - 1) * resultLimit,
        currentPage.value * resultLimit
      );
        if (selectedOption.value === "card") {
        setTimeout(() => {
          fetchImg();
        }, "1000");
      }
    }
    async function fetchImg() {
      for (let index = 0; index < items.value.length; index++) {
        document.getElementById("photo-" + index).src = imageurl.value;
      }
      url.value = import.meta.env.VITE_API_BASE_URL;
      const imagesDirectory = await directus
        .items("directus_files")
        .readByQuery({ limit: -1 });
      counter.value = 0;

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
    }

    async function fetchData() {
      let resultLimit = document.getElementById("limit").value;
      let resultID = document.getElementById("resultID").value;
      let resultAutore = document.getElementById("resultAutore").value;
      let resultOggetto = document.getElementById("resultOggetto").value;
      let resultInv = document.getElementById("resultInv").value;
      let resultMateria = document.getElementById("resultMateria").value;
      let resultUbi = document.getElementById("ubicazione").value;

      let query = {
        limit: -1,
        filter: {},
      };
      try {
        if (resultID !== "") {
          query["filter"]["id"] = { _eq: resultID };
        }
        if (resultAutore !== "") {
          query["filter"]["autore"] = { _contains: resultAutore };
        }

        if (resultUbi !== "tutte") {
          const privateData = await directus
            .items("inv_ubicazione")
            .readByQuery({
              filter: {
                inv_ubicazione: {
                  _eq: resultUbi,
                },
              },
              limit: -1,
            });
          const ubiID = privateData.data.map(({ id }) => id);
          query["filter"]["inv_ubicazione"] = {
            _in: ubiID,
          };
        }

        if (resultOggetto !== "") {
          const privateData = await directus.items("inv_oggetto").readByQuery({
            filter: {
              inv_oggetto: {
                _contains: resultOggetto,
              },
            },
            limit: -1,
          });
          if (privateData.data.length > 1) {
            const oggettoID = privateData.data.map(({ id }) => id);
            query["filter"]["inv_oggetto"] = { _in: oggettoID };
          } else {
            query["filter"]["inv_oggetto"] = { _in: null };
          }
        }
        // INVENTARIO
        if (resultInv !== "") {
          query["filter"]["invn"] = { _eq: resultInv };
        }
        if (resultMateria !== "") {
          const privateData = await directus.items("inv_materia").readByQuery({
            filter: {
              inv_materia: { _contains: resultMateria },
            },
            limit: -1,
          });
          const materiaID = privateData.data.map(({ id }) => id);

          query["filter"]["inv_materia"] = {
            _in: materiaID,
          };
        }
        const response = await directus
          .items(collection.value)
          .readByQuery(query);
        itemsFiltered = response;
        const { data = [] } = response;
        if (data.length < 1) {
          items.value = null;
        } else {
          items.value = data;
        }
      } catch (error) {
        items.value = null;
      }
      // SAVED ITEMS
      infoQty();
      fetchRelations();
    }
    async function fetchRelations() {
      const opereMtc = await directus.items("opera_mtc").readByQuery({
        limit: -1,
      });
    }

    function clearData() {
      document.getElementById("resultID").value = null;
      document.getElementById("resultAutore").value = null;
      document.getElementById("resultOggetto").value = null;
      document.getElementById("resultInv").value = null;
      document.getElementById("resultMateria").value = null;
      totalResult.value = 0;
      totalPages.value = 0;
      url.value = window.location.origin;
      itemsFiltered = null;

      // CLEAR TABLE
      items.value = null;
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
    function onDeleteClicked(item) {
      const confirmed = confirm(
        "Sei sicuro di voler eliminare questo elemento?"
      );
      if (confirmed) deleteItem(item);
    }

    return {
      items,
      fields,
      totalResult,
      totalPages,
      currentPage,
      selectedOption,
      imageurl,
      onEditClicked,
      onDeleteClicked,
      fetchData,
      infoQty,
      clearData,
      skipPage,
    };
  },
};
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
</style>
