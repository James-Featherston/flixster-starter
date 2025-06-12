const fetchNowPlayingData = async (page) => {
    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}`)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
    }
    return []
}

const fetchSearchData = async (page, searchQuery) => {
    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&page=${page}&query=${searchQuery}`)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error)
    }
    return []
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
    return movie
}

const searchTrailerById = async (id) => {
    let movie = null
    try {
        const apiKey = import.meta.env.VITE_API_KEY;
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
        if (!response.ok) {
            throw new Error('Failed to fetch data')
        }
        movie = await response.json();
    } catch (error) {
        console.error(error)
    }
    return movie
}



export {searchMovieById, fetchNowPlayingData, fetchSearchData, searchTrailerById}