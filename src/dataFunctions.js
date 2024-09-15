// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const result = data.filter((elemento)=> (elemento['facts'][filterBy] === value))
  return result;
};

export const sortData = (data, sortBy, sortOrder) => {
  const dataCopy = data.slice();

  if (sortOrder === 'asc'){
    dataCopy.sort(function (a, b) {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      return 0;
    });

  } else if (sortOrder === 'desc') {
    dataCopy.sort(function (x, y) {
      if (y[sortBy] > x[sortBy]) {
        return 1;
      }
      if (y[sortBy] < x[sortBy]) {
        return -1;
      }
      return 0;
    });
  }
  return dataCopy

}



