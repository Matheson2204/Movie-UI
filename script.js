const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2eedb41f838e3ac618a45969476fe62f&page=1'
const IMG_Path = 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=2eedb41f838e3ac618a45969476fe62f&query="'

//Get initial movies
getMovies()

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.results)
}