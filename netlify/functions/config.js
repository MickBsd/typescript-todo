export function handler(event, context, callback) {
    // Récupérer la valeur de la variable d'environnement
    const variableTest = process.env.VARIABLE_TEST;
  
    // Utiliser la variable dans votre code
    console.log(`La valeur de la variable d'environnement est: ${variableTest}`);
  }