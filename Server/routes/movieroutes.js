const express = require('express')
const router = express.Router();
const Movie = require('../models/moviemodel');
//const { withSuccess } = require('antd/es/modal/confirm');

// add a movie
router.post("/addMovies",async (req,res)=>{
   try {
    const newMovie = new Movie(req.body)
    await newMovie.save()
    res.send({
        success:true,
        message:"New Movie has been added"
    })  
   } catch (error) {
    res.send({
        success:false,
        message:"error.message"
    })
   }
})

//Get all movies

router.get('/getallmovies', async (req,res)=>{
  try {
    const allmovies = await Movie.find()
    res.send({
        success: true,
        message: "All movies have been fetched!",
        data: allmovies,
      });
  } catch (error) {
    res.send({
        success: false,
        message: error.message,
      });
  }
})

//update a movie 
router.put("/updatemovie", async (req, res) => {
    try {
      const movie = await Movie.findByIdAndUpdate(req.body.movieId, req.body, {
        new: true,//here updated value is returned
      });
      res.send({
        success: true,
        message: "The movie has been updated!",
        data: movie,
      });
    } catch (err) {
      res.send({
        success: false,
        message: err.message,
      });
    }
  });

  //fetch single move by id
  router.get("/movie/:id", async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id);
      res.send({
        success: true,
        message: "Movie fetched successfully!",
        data: movie,
      });
    } catch (error) {
      res.send({
        success: false,
        message: err.message,
      });
    }
  });

// delete a movie 
router.post('/delete-movie', async (req, res) => {
  try{
      await Movie.findByIdAndDelete(req.body.movieId);
      console.log(req.body.movieId);
      res.send({
          success: true,
          message: 'The movie has been deleted!',
      });
  }catch(err){
      res.send({
          success: false,
          message: err.message
      });
  }
})


module.exports = router