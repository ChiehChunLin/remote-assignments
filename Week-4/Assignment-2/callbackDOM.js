function ajax(src, callback) {
  fetch(src)
    .then((res) => res.json())
    .then((data) => {
      data.map((product) => {
        callback(product);
      });
    });
}
function render(data) {
  // your code here
  const body = document.querySelector("body");
  const section = document.createElement("section");
  body.appendChild(section);
  section.innerHTML = `
          <h1>${data.name}</h1>
          <span>&dollar;${data.price}</span>
          <p>${data.description}</p>
        `;
  // document.createElement() and appendChild() methods are preferred.
}
ajax(
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page
