

<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <h5 class="card-title">ID:</h5>
        <input
          type="text"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          id="resultID"
        />
      </div>
      <div class="col-md-6">
        <h5 class="card-title">Autore:</h5>
        <input type="text"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          id="resultAutore"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h5 class="card-title">Ubicazione:</h5>
        <select
          class="form-select"
          aria-label="Select Soggetto"
          id="ubicazione"
        >
          <option value="tutte">Tutte</option>
          <option value="museo">Museo</option>
          <option value="duomo">Duomo</option>
        </select>
      </div>
      <div class="col-md-6">
        <h5 class="card-title">Inventario (INVN):</h5>
        <input
          type="text"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          id="resultInv"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h5 class="card-title">Materia:</h5>
        <input
          type="text"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          id="resultMateria"
        />
     </div>
      <div class="col-md-6">
        <h5 class="card-title">Oggetto:</h5>
        <input
          type="text"
          class="form-control"
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          id="resultOggetto"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12"></div>
    </div>
  </div>
</template>
