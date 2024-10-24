
/*Cuando la página cargue, deberá traer el listado de información sobre películas 
disponible en https://japceibal.github.io/japflix_api/movies-data.json, pero no mostrarlo al usuario. */
let peliculas;

const JsonMovies =  'https://japceibal.github.io/japflix_api/movies-data.json' ; // link del JSON

function JsonData (url) { // función para traer los datos del JSON

    fetch(url) 
    .then (response => response.json())
    .then (data => {
        peliculas = data
    
    })
    .catch (error => {
    console.error('Error al obtener los datos', error); // por si ocurre un error al cargar los datos 
    })

}

document.addEventListener('DOMContentLoaded', function() { // evento que llama a la función una vez cargada la página
    JsonData(JsonMovies)
} ) 