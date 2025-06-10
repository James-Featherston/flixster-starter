const prepareMovieData = (data) => {
    let result = []

    data.forEach(movie => {
        const obj = new Object;
        obj.title = movie.title
        obj.poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        obj.rating = movie.vote_average
        obj.id = movie.id
        result.push(obj)
    });
    return result
}


export {prepareMovieData};