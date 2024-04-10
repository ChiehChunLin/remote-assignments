//-------------------------------------
//------   DOM Event Handler ----------
//--------------------------------------
$(".mySumForm").submit(calculation);
$(".myNameForm").submit(setMyName);

function setMyName(e) {
  e.preventDefault();
  const newName = $("#myName").val();
  const url = `http://localhost:3000/trackName?name=${newName}`;
  console.log("fetch:" + url);

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, config)
    .then(checkStatus)
    .then((res) => {
      if (res.redirected) {
        location.href = res.url;
        return;
      } else {
        return res.json();
      }
    })
    .then((data) => {
      if (data) {
        const { message } = data;
        $(".msgBox").text(message);
      }
    })
    .catch((err) => {
      $(".msgBox").text(err);
      console.error("fetch error:", err);
    });
}
function calculation(e) {
  e.preventDefault();
  const number = $("#myNumber").val();
  const url = `http://localhost:3000/data?number=${number}`;
  console.log("fetch:" + url);

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, config)
    .then(checkStatus)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const { message } = data;
      $(".msgBox").text(message);
    })
    .catch((err) => {
      console.error("fetch error:", err);
    });
}
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
