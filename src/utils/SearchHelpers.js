function filterMoviesByKeyword(movies, filteredMovies, keyword) {
    for(let i=0; i<movies.length; i++) {
        const movie = movies[i];
        const lowerCaseKeyword = keyword.toLowerCase();
        if(
            movie.title.toLowerCase() === lowerCaseKeyword ||
            movie.director.toLowerCase() === lowerCaseKeyword ||
            movie.producer.toLowerCase() === lowerCaseKeyword
        ) {
            filteredMovies.push(movie);
        }
    }
    return filteredMovies;
}

function keepUniqueMovies(movies) {
    let uniqueMovies = [];
    for(let i=0; i<movies.length; i++) {
        let count = 0;
        for(let j=0; j<uniqueMovies.length; j++) {
            if(movies[i].id === uniqueMovies[j].id) {
                count += 1;
            }
        }
        if(count === 0) {
            uniqueMovies.push(movies[i]);
        }
    }
    return uniqueMovies;
}

export function searchKeyword(word, keywordsList) {
    if(word.length>2) {
        return keywordsList.filter(keyword => keyword.includes(word))
    } else{
        return keywordsList
    }
}


/** Function to provide the titles of every movies */
    // Le principe de la fonction est de prendre un tableau vide
    // Au premier tour de boucle le tableau va se remplir de toutes les recettes ayant le mot clé
    // Au deuxième tour de boucle, vont s'ajouter à ce tableau les recettes qui ont le deuxième mot clé etc
    // Cela permet d'afficher toutes les recettes possibles avec la barre de recherche (plusieurs mots clés possibles quand on tape les premières lettres)
    // Puis plus on tape de lettres dans la barre de recherche, plus la liste de mots clés est petite et plus la sélection s'affine

    // En conclusion, on ne garde que les recettes qui match avec UN des mots clés
export function filterMoviesWithSearchBar(movies, keywords) {
    let filteredMovies = [];
    for(let i=0; i<keywords.length; i++) {
        filteredMovies = filterMoviesByKeyword(movies, filteredMovies, keywords[i]);
    }
    return keepUniqueMovies(filteredMovies);
}


/** Function to provide the titles of every movies */
    // Le principe de la fonction est de partir sur un tableau de données (ici les recettes)
    // A chaque tour de boucle, on regarde les recettes qui ont le mot clé et on les met dans un tableau (vide au début)
    // Puis le tableau sortant sera le nouveau tableau qui sera filtré par le mot clé suivant... et ainsi de suite
    // Ce système de tri permet de sélectionner les recettes qui répondent à tout les critères de filtre 

    // En conclusion, on ne garde que les recettes qui match avec TOUS les mots clés
export function filterMoviesWithTags(movies, keywords) {
    let allMovies = movies;
    let filteredMovies = [];
    for(let i=0; i<keywords.length; i++) {
        filteredMovies = filterMoviesByKeyword(allMovies, filteredMovies, keywords[i]);
        allMovies = filteredMovies;
        filteredMovies = [];
    }
    return keepUniqueMovies(allMovies);
}