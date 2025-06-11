const getGenres = (genres) => {
    let res = []
    genres.forEach(genre => {
        res.push(genre.name)
    })
    res = res.join(", ")
    return res
}

const prepareSingleMovie = (movie) => {
    const res = {
    "title": movie.title,
    "poster": movie.poster_path === null ? null : `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    "overview": movie.overview,
    "release_date": movie.release_date,
    "genres": getGenres(movie.genres),
    "runtime": movie.runtime,
    }
    return res
}

const prepareMoviesData = (data) => {
    let result = []
    
    data.forEach(movie => {
        const obj = new Object;
        obj.title = movie.title
        if (movie.poster_path !== null) {
            obj.poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        } else {
            obj.poster = null
        }
        obj.rating = movie.vote_average
        obj.id = movie.id
        obj.release_date = movie.release_date
        result.push(obj)
    });
    return result
}

const movieDisplayTypes = {
    "nowPlaying" : 0,
    "searchMovies" : 1,
    "favorites": 2,
    "watched": 3, 
}

const movieSortTypes = {
    "default" : 0,
    "alphabetic" : 1,
    "chronological" : 2,
    "voteAverage" : 3,
}

export {prepareMoviesData, prepareSingleMovie, movieDisplayTypes, movieSortTypes};