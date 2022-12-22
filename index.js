console.log('Hello World!');
window.onload = function() {
    fetch("/.netlify/functions/api")
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });
};