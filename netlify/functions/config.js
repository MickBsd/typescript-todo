//import fetch from 'node-fetch';

export async function handler (event, context) {
  const variableTest = process.env.VARIABLE_TEST;
  const url = "https://www.cityscan.fr/api/evaluations";
  
//   await fetch(getUrl, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         "ApiKey": "Db}2]uWrY5TS@*Q"
//     },
// })
// .then((response) => 
//     response.json())
// .then((data) => {
//     console.log(data);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ data })
//     };
// });

  return {
    statusCode: 200,
    body: JSON.stringify({ variableTest })
  };
}