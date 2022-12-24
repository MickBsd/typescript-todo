  fetch('/.netlify/functions/config')
  .then((response) => {
    return response.json();
  }).then((myJson) => {  
    console.log(myJson);
  });