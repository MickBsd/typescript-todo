// console.log('Hello World!');

// const userAction = async () => {
//     const response = await fetch('/.netlify/functions/config');
//     const myJson = await response.json(); //extract JSON from the http response
//     alert(myJson);
//   }

  fetch('/netlify/functions/config')
  .then((response) => {
    response.json();
  }).then((myJson)=> {  
    console.log(myJson);
  });