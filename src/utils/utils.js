const getGenres = (genres) => {
    let res = []
    genres.forEach(genre => {
        res.push(genre.name)
    })
    res = res.join(", ")
    return res
}

const searchMovieById = async (id) => {
    let movie = null
    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        movie = await response.json();
    } catch (error) {
        console.error(error)
    }
    const res = {
        "title": movie.title,
        "poster": `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        "overview": movie.overview,
        "release_date": movie.release_date,
        "genres": getGenres(movie.genres),
        "runtime": movie.runtime,
    }
    return res
}

const prepareMovieData = (data) => {
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
    console.log(result)
    return result
}

export {prepareMovieData, searchMovieById};