import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const sectionContainer = document.getElementById("root");
sectionContainer.appendChild(renderItems(data));

// Filtrar
const selectFilter = document.querySelector("select[name='country']");

selectFilter.addEventListener("change", () => {
  const result = filterData(data, 'country', selectFilter.value);
  sectionContainer.replaceChildren(renderItems(result));
})


// Ordenar
const selectSort = document.querySelector("select[name='nombre']");

selectSort.addEventListener("change", () => {

  // Aplicar primero el filtro si hay un país seleccionado
  const resultFilter = selectFilter.value ? filterData(data, 'country', selectFilter.value) : data;
    
  // Ordenar el resultado filtrado
  const result = sortData(resultFilter, 'name', selectSort.value);
  sectionContainer.replaceChildren(renderItems(result));
})


// Estadísticas
const selectEstadisticas = document.querySelector("select[name='unesco']");
const sectionEstadisticas = document.getElementById("estadisticas")

selectEstadisticas.addEventListener("change", () => {
  
  const newParrafo = document.createElement("p")
  const result = computeStats(data, selectEstadisticas.value)
  newParrafo.innerHTML = `
    <span>Porcentaje de atractivos turísticos reconocidos por la Unesco como matrimonio mundial en los años
    <strong>${selectEstadisticas.value} : ${result}</strong></span>
    `

  sectionEstadisticas.replaceChildren(newParrafo)
})


// Botón limpiar select(filtros y ordenar)
const botonLimpiar = document.querySelector("button[data-testid='button-clear']");

botonLimpiar.addEventListener("click", () => {
  selectFilter.value = "";
  selectSort.value = "";
  sectionContainer.replaceChildren(renderItems(data));
})
