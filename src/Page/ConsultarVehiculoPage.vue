<template>
  <button @click="consultarVehiculos">CONSULTAR</button>
  <comp1
    @vehiculoEliminar="eliminarVehiculo($event)"
    @objetovehiculo="vehiculoXlink($event)"
    :vehiculos="vehiculos"
  />
  <comp2 :vehiculo="vehiculo" />
</template>

<script>
import comp1 from "../components/ComponenteUno.vue";
import comp2 from "../components/ComponenteDos.vue";
import {
    listarFachada,
  eliminarFachada,
} from "../clients/VehiculoCliente.js";

import axios from 'axios';

export default {
  components: {
    comp1,
    comp2
  },
  data() {
    return {
      vehiculos: [],

      vehiculo: {type: Object},
    };
  },
  methods: {
    async consultarVehiculos() {
      
        this.vehiculos = await listarFachada();
        console.log(this.vehiculo);
  
    },

    async eliminarVehiculo(data) {
      let placa = data.placa;
      try {
        await eliminarFachada(placa);
        alert("vehiculo eliminado correctamente");
        this.consultarProductos();
      } catch (error) {
        console.error("Error al eliminar el vehiculo:", error);
        alert("Error al eliminar el vehciulo: " + error.message);
      }
    },
    async vehiculoXlink(data) {
      let url = data.link[0].href;
      console.log(url);

      const response = await axios.get(url);
      console.log(response.data);
      this.vehiculo = response.data;
      console.log(this.vehiculo);

    },
  },
};
</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .datos {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    input {
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
    }
</style>