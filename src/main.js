import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const sectionContainer = document.getElementById("root");
sectionContainer.appendChild(renderItems(data));

// Filtrar
const selectFilter = document.querySelector("select[name='country']");

selectFilter.addEventListener("input", () => {
    const option = selectFilter.value;
    const country = 'country';
    const result = filterData(data, country, option);
    sectionContainer.replaceChildren(renderItems(result));
})

// Ordenar
const selectSort = document.querySelector("select[name='nombre']");

selectSort.addEventListener("input", () => {
    const option = selectSort.value;
    const name = 'name';
    const result = sortData(data, name, option);
    sectionContainer.replaceChildren(renderItems(result));
})

// Botón limpiar select(filtros y ordenar)
const botonLimpiar = document.querySelector("button[data-testid='button-clear']");

botonLimpiar.addEventListener("click", () => {
    selectFilter.value = "";
    selectSort.value = "";
    sectionContainer.replaceChildren(renderItems(data));
})
