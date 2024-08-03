
import axios from 'axios';


const guardar = async (vehiculo) => {
    const data  = (await axios.post(`http://localhost:8081/API/v1.0/Concesionario/vehiculos`, vehiculo)).
    then((response) => response.data);
    return data;
}

const actualizar = async (id, vehiculo) => {
    const data = await axios.put(`http://localhost:8081/API/v1.0/Concesionario/vehiculos/${id}`, vehiculo).
    then((response) => response.data);
    return data;
}

const eliminar = async (id) => {
    const data = (await axios.delete(`http://localhost:8081/API/v1.0/Concesionario/vehiculos/${id}`)).
    then((response) => response.data);
    return data;
}

const obtenerPorid = async (id) => {
    const data = await axios.get(`http://localhost:8081/API/v1.0/Concesionario/vehiculos/${id}`)
    .then((response) => response.data);
    return data;
}

const obtenerPorPlaca = async (placa) => {
    const data = await axios.get(`http://localhost:8081/API/v1.0/Concesionario/vehiculos/${placa}`)
    .then((response) => response.data);
    return data;
}

const listar = async () => {
    const data = await axios.get(`http://localhost:8081/API/v1.0/Concesionario/vehiculos`)
    .then((response) => response.data);
    return data;
}

export const guardarFachada = async (vehiculo) => {
    guardar(vehiculo);
}

export const actualizarFachada = async (id, vehiculo) => {
    actualizar(id, vehiculo);
}

export const eliminarFachada = async (id) => {
    eliminar(id);
}

export const obtenerPoridFachada = async (id) => {
    obtenerPorid(id);
}

export const obtenerPorPlacaFachada = async (placa) => {
    obtenerPorPlaca(placa);
}

export const listarFachada = async () => {
    listar();
}