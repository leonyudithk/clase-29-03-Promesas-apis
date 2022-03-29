const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`
const SEARCH_URL = 'http://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const form = document.getElementById('form')
const main = document.getElementById('main')
const search = document.getElementById('search')


const getPeliculas = (url) =>{
    const peticion = fetch(url)
    peticion.then(resp => resp.json())
            .then(data => showPeliculas(data.results))
            .catch(error=>
                Swal.fire({
                    title: 'Hubo un error en el Servidor url',
                    icon: 'error',
                    text: 'Recargar la pagina',
                    confirmButton: 'Aceptar',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
                )
}

getPeliculas(API_URL)

//--------pintar las pelicul


const showPeliculas = (peliculas) =>{
    console.log(peliculas)
    if (peliculas.length == 0){
        Swal.fire({
            title: 'Pelicula No se encontro con ese Nombre',
            icon: 'warning',
            text: 'Verifique el titulo',
            confirmButton: 'Aceptar',
           
          })
    }
    else
     {
        main.innerHTML =''
        peliculas.forEach(movie=> {
            const {title, overview, poster_path, vote_average}= movie

            const divPintar = document.createElement('div')
            divPintar.classList.add('peli')
            divPintar.innerHTML += `
            <img src="${IMG_PATH+poster_path}">
                <h3>${title}</h3>
                <span>${vote_average}</span>
            </div>
            <div class="overview">
                ${overview}
            </div>
            
            `
            main.appendChild(divPintar)
        })
    }
}

form.addEventListener('submit', e =>{
    e.preventDefault()
   // console.log(e)
    const buscar = search.value
    console.log(buscar)
    if(buscar !== ''){
        getPeliculas(SEARCH_URL+buscar)
        search.value = ''
    }
    else{
        window.location.reload()
    }

})


