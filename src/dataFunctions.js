// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const result = data.filter((elemento)=> (elemento['facts'][filterBy] === value))
  return result;
};


