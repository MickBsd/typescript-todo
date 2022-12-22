exports.handler = async function (event, context) {
  const variableTest = process.env.VARIABLE_TEST;

  return {
    statusCode: 200,
    // body: JSON.stringify({ message: "Hello World" }),
    body: JSON.stringify({ test: variableTest }),
  };
};