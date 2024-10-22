const JsonMovies =  'https://japceibal.github.io/japflix_api/movies-data.json' ;

function JsonData (url) {

    fetch(url) 
    .then (response => response.json())
    .then (data => {
        console.log(data)
    })
    .catch (error => {
    console.error('Error al obtener los datos', error); 
    })

}

document.addEventListener('DOMContentLoaded', function() {
    JsonData(JsonMovies)
} ) 