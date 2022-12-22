import { handler } from "./netlify/functions/config.js";

console.log('Hello World!');

// const { VARIABLE_TEST } = process.env;

console.log(`La valeur de la variable d'environnement est: ${VARIABLE_TEST}`);