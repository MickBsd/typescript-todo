import fetch from 'node-fetch';

export async function handler (event, context) {
  //const variableTest = process.env.VARIABLE_TEST;
  let dataTest;
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => dataTest = data);
  
  return {
    statusCode: 200,
    body: JSON.stringify({ dataTest })
  };
  // return {


  //   // statusCode: 200,
  //   // // body: JSON.stringify({ message: "Hello World" }),
  //   body: JSON.stringify({ test: data }),
  // };
}