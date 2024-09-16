// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const result = data.filter((elemento)=> (elemento['facts'][filterBy] === value))
  return result;
};

export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = data.slice();

  dataCopy.sort(function (a, b) {
    if (sortOrder === 'asc'){
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      return 0;
    } else if (sortOrder === 'desc') {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    }
  });

  return dataCopy
};

export const computeStats = (data) => {
  console.log("data");
  // porcentaje de unesco por decada
};



