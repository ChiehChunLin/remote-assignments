function avg(data) {
  const priceList = data.products.map((product) => product.price);
  return (
    priceList.reduce((total, price) => total + price, 0) / priceList.length
  ).toFixed(2);
}

console.log(
  avg({
    size: 3,
    products: [
      {
        name: "Product 1",
        price: 100,
      },
      {
        name: "Product 2",
        price: 700,
      },
      {
        name: "Product 3",
        price: 250,
      },
    ],
  })
); // should print the average price of all products
