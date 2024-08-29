import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const sectionContainer = document.getElementById("root");
sectionContainer.appendChild(renderItems(data));
