<template>
  <div class="container">
    <div class="datos">
      <label for="placa">PLACA: </label>
      <input type="text" v-model="vehiculo.placa" />
      <label for="marca">MARCA: </label>
      <input type="text" v-model="vehiculo.marca" />
      <label for="modelo">MODELO: </label>
      <input type="text" v-model="vehiculo.modelo" />
      <label for="color">COLOR: </label>
      <input type="text" v-model="vehiculo.color" />
      <label for="precio">PRECIO: </label>
      <input type="number" v-model="vehiculo.precio" />
    </div>
  </div>
</template>

<script>

export default {
  props: {
    vehiculo: {
      type: Object,
      required: true
    }
  },
  methods: {

  }
}
</script>

<style>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


</style>