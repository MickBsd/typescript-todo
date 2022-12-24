console.log('Hello World!');

//fetch('/.netlify/functions/config').then((response) => });

const userAction = async () => {
    const response = await fetch('/.netlify/functions/config');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    // do something with myJson
  }

//   // fetch('https://www.cityscan.fr/api/evaluations')
//   // .then((response) => response.json())
//   // .then((data) => console.log(data));

// getTotalEval();

// async function getTotalEval() {
//   const url = "https://www.cityscan.fr/api/evaluations";

//   await fetch(url, {
//       method: "GET",
//       headers: {
//           "Content-Type": "application/json",
//           "ApiKey": "Db}2]uWrY5TS@*Q"
//       }
//   })
//   .then((response) => 
//       response.json())
//   .then((data) => {
//       console.log(data)
//       nbEval = data.content.results.pagination.totalItems
//       console.log(nbEval);
//       return nbEval;
//   });
// }