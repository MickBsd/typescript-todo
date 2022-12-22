console.log('Hello World!');

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    fetch(".netlify/functions/api")
        .then(response => response.json())
        .then(json => {
            console.log(json.api);
        })
});
