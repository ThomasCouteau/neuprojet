let url = "https://www.breakingbadapi.com/api/characters";

window
    .fetch(url)
    .then(function (reponse) {
        console.log("Le serveur a répondu avec le code " + reponse.status);
        if (reponse.ok === true) {
            console.log("La requête a été traitée avec succès");
        } else {
            console.error("La requête n'a pas pu traitée correctement");
        }
        // on retourne la promesse en utilisant la méthode json()
        return reponse.json();
    })
    .then(function (reponse) {
        // la promesse retournée par json() a été résolue, on récupère la réponse dans un objet au format JSON
        console.log(reponse);
    })
    .catch(function (error) {
        console.error("la requête n'a pas abouti");
    });