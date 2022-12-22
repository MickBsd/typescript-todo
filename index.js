console.log('Hello World!');

fetch('/.netlify/functions/config').then((response) => {
  console.log(response);
});