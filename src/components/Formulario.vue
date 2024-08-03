<template>
  <div class="container">
    <div>
      <h1>Formulario</h1>
    </div>

    <div class="datos">
      <label for="placa">PLACA: </label>
      <input type="text" v-model="placa" />
      <label for="marca">MARCA: </label>
      <input type="text" v-model="marca" />
      <label for="modelo">MODELO: </label>
      <input type="text" v-model="modelo" />
      <label for="color">COLOR: </label>
      <input type="text" v-model="color" />
      <label for="precio">PRECIO: </label>
      <input type="number" v-model="precio" />
    </div>
    <button @click="guardarVehiculo">GUARDAR</button>
  </div>
</template>

<script>
import { guardarFachada } from "@/clients/VehiculoCliente.js";
export default {
  data() {
    return {
      placa: null,
      marca: null,
      modelo: null,
      color: null,
      precio: 0,
    };
  },

  methods: {
    async guardarVehiculo() {
      const vehiculo = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        precio: this.precio,
      };
      await guardarFachada(vehiculo);
      if (vehiculo != null) {
        this.mensaje = "vehiculo guardada";
        alert("vehiculo guardada");
      } else {
        this.mensaje = "Error al guardar la vehiculo";
        alert("Error al guardar la vehiculo");
      }
      this.reiniciarDatos();
    },

    reiniciarDatos() {
      this.placa = null;
      this.marca = null;
      this.modelo = null;
      this.color = null;
      this.precio = 0;
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.datos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 5px;
}

button {
  margin: 10px;
}
</style>