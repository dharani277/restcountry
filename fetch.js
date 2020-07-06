fetch("https://restcountries.eu/rest/v2/all")
  .then(function (response) {
    if (response.status !== 200) {
      console.log(respone.status);
      return;
    }
    response.json().then(function (data) {
      console.log(data);
    });
  })
  .catch(function (err) {
    console.log("Error");
  });
