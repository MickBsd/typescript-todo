import fetch from 'node-fetch';

export async function handler (event, context) {
  const apiKey = process.env.API8KEY;
  const url = "https://www.cityscan.fr/api/evaluations";
  let dataTest;

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ variableTest })
  // };
    
  await fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "ApiKey": apiKey
    },
  })
  .then((response) => {
      return response.json();
  }).then((data) => {
      dataTest = data;
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ dataTest })
  };
}