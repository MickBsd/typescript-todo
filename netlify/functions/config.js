exports.handler = async function (event, context) {
  const variableTest = process.env.VARIABLE_TEST;
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => console.log(data));
  
  return {


    // statusCode: 200,
    // // body: JSON.stringify({ message: "Hello World" }),
    body: JSON.stringify({ test: data }),
  };
};