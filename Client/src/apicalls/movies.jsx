import { axiosInstance } from "."

export const GetAllMovies = async () =>{
    try {
        const response = await axiosInstance.get('http://localhost:8000/api/movies/getallmovies')
        return response.data
    } catch (error) {
       console.log(error)
    }
}

// Add a movie

export const addMovie = async (values)=> {
    try {
        const response = await axiosInstance.post('http://localhost:8000/api/movies/addMovies' , values)
       return response.data
    } catch (error) {
        console.error(error)
    }
    
}


export const updateMovie = async (payload) => {
    try{
        const response = await axiosInstance.put('http://localhost:8000/api/movies/updatemovie', payload);
        return response.data;
    }catch(err){
        return err.message
    }
}

// Delete a movie
export const deleteMovie = async (payload) => {
    try{
        const response = await axiosInstance.post('http://localhost:8000/api/movies/delete-movie', payload);
        return response.data;
    }catch(err){
        return err.message
    }
}

// Get a single movie by its id
export const getMovieById = async (id) => {
    try{
        const response = await axiosInstance.get(`http://localhost:8000/api/movies/movie/${id}`)
        return response.data;
    }catch(err){
        return err.response
    }
}