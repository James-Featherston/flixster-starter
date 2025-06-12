/* 
Input: Array of Genre objects
Output: String of genre names appended together
*/
const getGenres = (genres) => {
    let res = []
    genres.forEach(genre => {
        res.push(genre.name)
    })
    res = res.join(", ")
    return res
}

/* 
Finds the movie key with type trailer
Input: List of video objects
Output: String of the key
*/
const getMovieKey = (videos) => {
    for (let video of videos.results) {
        if (video.type === "Trailer") {

            return video.key
        }
    }
    return null
}

/* 
Creates a movie object with the necessary data
Input: Movie object and video key
Output: New movie object with required data
*/
const prepareSingleMovie = (movie, videoKey) => {
    const res = {
    "title": movie.title,
    "poster": movie.poster_path === null ? null : `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    "overview": movie.overview,
    "release_date": movie.release_date,
    "genres": getGenres(movie.genres),
    "runtime": movie.runtime,
    "key": videoKey
    }
    return res
}

/* 
Creates a movie object array with the necessary data
Input: Movie object
Output: List of new movie objects
*/
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

/* Enum for movie display types */
const movieDisplayTypes = {
    "nowPlaying" : 0,
    "searchMovies" : 1,
    "favorites": 2,
    "watched": 3, 
}

/* Enum for movie sort types */
const movieSortTypes = {
    "default" : 0,
    "alphabetic" : 1,
    "chronological" : 2,
    "voteAverage" : 3,
}

export {getMovieKey, prepareMoviesData, prepareSingleMovie, movieDisplayTypes, movieSortTypes};