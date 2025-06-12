/* 
Handles all sorting and filtering
*/

const sortMoviesAlphabetically = (movies) => {
    movies.sort((a, b) => {
        const lowerA = a.title.toLowerCase()
        const lowerB = b.title.toLowerCase()
        if (lowerA < lowerB) {
            return -1
        } else {
            return 1
        }
    })
}

const sortMoviesChronologically = (movies) => {
    movies.sort((a, b) => {
        const dateA = getChronologicalArray(a.release_date)
        const dateB = getChronologicalArray(b.release_date)
        if (dateA[0] > dateB[0]) {
            return -1
        } else if (dateB[0] > dateA[0]) {
            return 1
        } else if (dateA[1] > dateB[1]) {
            return -1
        } else if (dateB[1] > dateA[1]) {
            return 1
        } else if (dateA[2] > dateB[2]) {
            return -1
        } else if (dateB[2] > dateA[2]) {
            return 1
        } else {
            return 0
        }
    })
}

const getChronologicalArray = (date) => {
    const arr = date.split("-")
    return arr
}
const sortMoviesByVoteAverage = (movies) => {
    movies.sort((a, b) => {
        return Number(b.rating) - Number(a.rating)
    })
}

export {sortMoviesAlphabetically, sortMoviesByVoteAverage, sortMoviesChronologically}