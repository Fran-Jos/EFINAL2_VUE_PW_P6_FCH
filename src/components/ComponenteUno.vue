<template>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>placa</th>
          <th>marca</th>
          <th>modelo</th>
          <th>Accion1</th>
          <th>Accion2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vehiculo in vehiculos" :key="vehiculo.id">
          <td>{{ vehiculo.placa }}</td>
          <td>{{ vehiculo.marca }}</td>
          <td>{{ vehiculo.modelo }}</td>
          <td>
            <button @click="$emit('objetovehiculo', { link: vehiculo.links })">
              ver
            </button>
          </td>
          <td>
            <button
              @click="$emit('vehiculoEliminar', { placa: vehiculo.placa })"
            >
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    vehiculos: {
      type: Array,
      required: true,
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

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
</style>