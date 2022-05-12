Promise.all([slowMath.add(6, 2)])
  .then((response) => {
    console.log(response);
    return slowMath.multiply(response, 2);
  })
  .then((response) => {
    console.log(response);
    return slowMath.divide(response, 4);
  })
  .then((response) => {
    console.log(response);
    return slowMath.subtract(response, 3);
  })
  .then((response) => {
    console.log(response);
    return slowMath.add(response, 98);
  })
  .then((response) => {
    console.log(response);
    return slowMath.remainder(response, 2);
  })
  .then((response) => {
    console.log(response);
    return slowMath.multiply(response, 50);
  })
  .then((response) => {
    console.log(response);
    return slowMath.remainder(response, 40);
  })
  .then((response) => {
    console.log(response);
    return slowMath.add(response, 32);
  })
  .then((response) => {
    console.log(`The final result is ${response}`);
  })
  .catch((err) => console.log(`An error has occurred ${err}`));
