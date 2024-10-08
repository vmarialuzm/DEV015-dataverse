export const renderItems = (data) => {
  
  const newUl = document.createElement("ul");

  data.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.setAttribute('itemscope', '');
    newLi.setAttribute('itemtype', 'TouristSites')

    newLi.classList.add('tourist-site-item');

    newLi.innerHTML = `
      <img src="${element.imageUrl}" alt="">
      <div itemprop="name">Nombre: ${element.name}</div>
      <p itemprop="country"><strong>País:</strong> ${element.facts.country}</p>
      <p itemprop="shortDescription"><strong>Descripción Corta:</strong> ${element.shortDescription}</p>
      `
    newUl.appendChild(newLi);
  })

  return newUl;
};

