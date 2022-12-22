exports.handler = function(event, context, callback) {
    // Récupérer la valeur de la variable d'environnement
    const variableTest = process.env.VARIABLE_TEST;
  
    // Utiliser la variable dans votre code
    console.log(`La valeur de la variable d'environnement est: ${variableTest}`);
  
    // Appeler la fonction de retour avec un message de succès
    callback(null, {
      statusCode: 200,
      body: "La fonction a été exécutée avec succès"
    });
  };