import fetch from 'node-fetch';

export async function handler (event, context) {
  const variableTest = process.env.VARIABLE_TEST;
  const url = "https://www.cityscan.fr/api/evaluations"

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ variableTest })
  // };
    
  await fetch(url, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "ApiKey": "Db}2]uWrY5TS@*Q"
    },
  })
  .then((response) => {
      return response.json();
  }).then((data) => {
      return {
        statusCode: 200,
        body: JSON.stringify({ data })
      };
  });
}