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
    let fraseBuscadaLower = fraseBuscada.toLowerCase();
    let peliculasBuscadas = peliculasArray.filter (movie =>
        movie.title.toLowerCase().includes(fraseBuscadaLower) ||
        movie.genres.map(genre => genre.name.toLowerCase()).some(genreName => genreName.includes(fraseBuscadaLower)) ||
        movie.tagline.toLowerCase().includes(fraseBuscadaLower) ||
        movie.overview.toLowerCase().includes(fraseBuscadaLower)
     );
     console.log(peliculasBuscadas)
      listaPelis = document.getElementById('lista')
      listaPelis.innerHTML = ''; 
       peliculasBuscadas.forEach(movie => { 

        listaPelis.innerHTML += `<button class="bg-dark text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                                 <li> 
                                 <h6>${movie.title}</h6>
                                 <p>${movie.tagline}</p>
                                 <p>${puntajeEstrellas(movie.vote_average)} </p>
                                </li>
                                </button>
                                <br>
<div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasTopLabel"><p class="text-dark">${movie.title}</p></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <p class="text-dark">${movie.overview}</p>
    <hr>
    <p class="text-secondary">${movie.genres.map(genre => genre.name)}</p>
  </div>
</div>`
         });      



 }


 //función para mostrar el puntaje en forma de estrellas
 function puntajeEstrellas (puntaje) {
  let estrellas = Math.round(puntaje / 2);
  return '★'.repeat(estrellas) + '☆'.repeat(5 - estrellas); 
 }