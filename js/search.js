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

        listaPelis.innerHTML += `<button class="bg-dark text-white" type="button" onclick="showDetails(${movie.id})">
                                 <li> 
                                 <h6>${movie.title}</h6>
                                 <p>${movie.tagline}</p>
                                 <p>${puntajeEstrellas(movie.vote_average)} </p>
                                </li>
                                </button>
                                <br> `
         });      
 }


 //función para mostrar el puntaje en forma de estrellas
 function puntajeEstrellas (puntaje) {
  let estrellas = Math.round(puntaje / 2);
  return '★'.repeat(estrellas) + '☆'.repeat(5 - estrellas); 
 }


//  funcion para mostrar el contenedor superior con los detalles de la pelicula
function showDetails (movieID) {
  const shownMovie = peliculas.find (movie => movie.id === movieID);
  if (shownMovie) {
    let offcanvaBody = document.getElementById('offcanvas-body');
    offcanvaBody.innerHTML = ` <h5>${shownMovie.title}</h5>
                               <p class="text-dark">${shownMovie.overview}</p>
                               <hr>
                               <p class="text-secondary">${shownMovie.genres.map(genre => genre.name)}<p>  

         `
    let menuDesplegable = document.getElementById('menu-desplegable');
    menuDesplegable.innerHTML = `
          <li><a class="dropdown-item" href="#">Year:  ${new Date(shownMovie.release_date).getFullYear()}</a></li>
          <li><a class="dropdown-item" href="#">Runtime:  ${shownMovie.runtime}</a></li>
          <li><a class="dropdown-item" href="#">Budget:  ${shownMovie.budget}</a></li>
          <li><a class="dropdown-item" href="#">Revenue:  ${shownMovie.revenue}</a></li>`
  


         const offcanvas = new bootstrap.Offcanvas (document.getElementById('offcanvasTop'));
         offcanvas.show();
  }
};

