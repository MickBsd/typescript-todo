console.log('Hello World!');

// fetch('/.netlify/functions/config').then((response) => });

const userAction = async () => {
    const response = await fetch('/.netlify/functions/config');
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    // do something with myJson
  }