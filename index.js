console.log('test');

exports.handler = async (event, context) => {
    const testKey = process.env.VARIABLE_TEST;
    console.log(testKey);
  }