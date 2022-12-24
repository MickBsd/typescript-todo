import fetch from 'node-fetch';

export async function handler (event, context) {
  const variableTest = process.env.VARIABLE_TEST;
  const url = "https://www.cityscan.fr/api/evaluations";
  
  fetch(url)
  .then(function(response) { 
    return response.json();
  }).then(function(myJson) {
    console.log(myJson);
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ myJson })
  };
}