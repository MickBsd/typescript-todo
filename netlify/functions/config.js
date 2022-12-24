export async function handler (event, context) {
  const variableTest = process.env.VARIABLE_TEST;

  return {
    statusCode: 200,
    body: JSON.stringify({ message:  variableTest })
  };
}