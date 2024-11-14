//Itérer avec Async/Await : Ecrire une fonction async iterateWithAsyncAwait qui prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les enregistrements.

async function iterateWithAsyncAwait() {
    try {
        const values = [1, 2, 3, 4, 5];//le tableau de valeur initial
        let tab = [];//declarer un tableau vide
        for (const value of values) {
            // Enregistrer la valeur avec un délai de 1 seconde
            await new Promise(resolve => setTimeout(resolve, 1000));
            tab.push(value)//ajouter les valeurs du tableau initial dans le nouveau tableau
            console.log(tab);
        }
    } catch (error) {
        console.log(error.message);

    } finally {
        console.log("enregistrement terminé")
    }

}


//iterateWithAsyncAwait();

//Tâche 02 :

/*Attendre un appel : Créer une fonction asynchrone awaitCall qui simule l’obtention de données à partir d’une API. Utilisez await pour attendre la réponse de l’API, puis enregistrez les données.*/

const awaitCall = async () => {
    const tableau = [];
    const connect = fetch('http://www.api.com')
    /*.then(resolve =>{
        setTimeout(resolve,1000);
        tableau.push(resolve);
    });*/
    await connect;
};

//awaitCall();


/**Tâche 03 :

Gérer les erreurs avec Async/Await :Modifiez la fonction awaitCall pour gérer les erreurs de manière élégante. Si l’appel à l’API échoue, attrapez l’erreur et enregistrez un message d’erreur convivial.

Chaîner Async/Await : Écrivez une fonction chainedAsyncFunctions qui appelle trois fonctions asynchrones distinctes de manière séquentielle. Chaque fonction doit enregistrer un message après un délai d’une seconde. Enchaînez ces fonctions en utilisant await.
 */

const awaitCall2 = async () => {
    try {
        const tableau = [];
        const connect = fetch('http://www.api.com')
        /*.then(resolve =>{
            setTimeout(resolve,1000);
            tableau.push(resolve);
        });*/
        await connect;
        console.log(connect);
    } catch (error) {
        console.log(error.message);
        console.error({ error })
    }
}

//awaitCall2();

const chainedAsyncFunctions = async () => {
    const tableauError = []
    try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Fonction 1' + iterateWithAsyncAwait())
        console.log('Fonction2' + awaitCall())
        console.log('Fonction3' + awaitCall2())
    } catch (error) {
        tableauError.push(error)
        console.log({message: tableauError})
    }
};  

chainedAsyncFunctions();