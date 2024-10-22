/*    
Cuando el usuario presiona el botón buscar, y si previamente ingresó algún valor en el campo de búsqueda, 
deberá mostrar un listado con las películas que coincidan con dicha búsqueda en sus atributos de title
 o genres o tagline u overview. La información a mostrar en este punto será: title, tagline, y vote_average 
 (en formato de "estrellas").
 */
let inputBuscar = document.getElementById('inputBuscar');

 document.getElementById('btnBuscar').addEventListener('click', function () {
    let fraseBuscada = inputBuscar.value.trim(); // obtiene la búsqueda del usuario 
  if (fraseBuscada) {
    BuscarPeliculas (peliculas, fraseBuscada); // buscar y mostrar resultados 
  }

 })

 function BuscarPeliculas (peliculasArray, fraseBuscada ) {
    const fraseBuscadaLower = fraseBuscada.toLowerCase();
    let peliculasBuscadas = peliculasArray.filter (movie =>
        movie.title.toLowerCase().includes(fraseBuscadaLower) ||
        movie.genres.join(', ').toLowerCase().includes(fraseBuscadaLower) ||
        movie.tagline.toLowerCase().includes(fraseBuscadaLower) ||
        movie.overview.toLowerCase().includes(fraseBuscadaLower)
     );
      listaPelis = document.getElementById('lista')
      listaPelis.innerHTML = ''; 
       peliculasBuscadas.forEach(pelicula => { 

        listaPelis.innerHTML += `<li> 
                                 <p class="h6">${movie.title}</p>
                                 <p>${movie.tagline}</p>
                                 <p>${movie.vote_average} </p>
                                </li> `
         });        
    
 }