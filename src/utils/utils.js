const getGenres = (genres) => {
    let res = []
    genres.forEach(genre => {
        res.push(genre.name)
    })
    res = res.join(", ")
    return res
}

const getMovieKey = (videos) => {
    for (let video of videos.results) {
        if (video.type === "Trailer") {

            return video.key
        }
    }
    return null
}

const prepareSingleMovie = (movie, movieKey) => {
    const res = {
    "title": movie.title,
    "poster": `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    "overview": movie.overview,
    "release_date": movie.release_date,
    "genres": getGenres(movie.genres),
    "runtime": movie.runtime,
    "key": movieKey
    }
    return res
}

const prepareMoviesData = (data) => {
    let result = []
    
    data.forEach(movie => {
        const obj = new Object;
        obj.title = movie.title
        obj.poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        obj.rating = movie.vote_average
        obj.id = movie.id
        obj.release_date = movie.release_date
        result.push(obj)
    });
    return result
}

const movieDisplayTypes = {
    "nowPlaying" : 0,
    "searchMovies" : 1
}

const movieSortTypes = {
    "default" : 0,
    "alphabetic" : 1,
    "chronological" : 2,
    "voteAverage" : 3,
}

export {getMovieKey, prepareMoviesData, prepareSingleMovie, movieDisplayTypes, movieSortTypes};