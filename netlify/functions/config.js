exports.handler = async (event, context) => {
  // Retrieve the value of the VARIABLE_TEST environment variable
  const variableTest = process.env.VARIABLE_TEST;

  // Return the value of the environment variable in the response
  return {
    statusCode: 200,
    body: variableTest,
  };
};