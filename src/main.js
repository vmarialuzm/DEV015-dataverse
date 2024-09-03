import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

const sectionContainer = document.getElementById("root");
sectionContainer.appendChild(renderItems(data));

const selectFilter = document.querySelector("select[name='country']");

selectFilter.addEventListener("input", () => {
    const option = selectFilter.value;
    const country = 'country';
    const result = filterData(data, country, option);
    sectionContainer.replaceChildren(renderItems(result));
})