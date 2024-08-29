export const renderItems = (data) => {
  
  const newUl = document.createElement("ul");

  data.forEach((element) => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `
      <div>Nombre: ${element.name}</div>
      <p>Descripción Corta: ${element.shortDescription}</p>
      <img src="${element.imageUrl}" alt="">
      `
    newUl.appendChild(newLi);
  })

  return newUl;
};

