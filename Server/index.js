require('dotenv').config(); // always load env file first
const express = require('express')
const app = express()
const port = 8000
const dbconfig = require('./config/dbconfig')
const userRoutes = require('./routes/userroutes')
const movieroutes = require('./routes/movieroutes')
const theatreroutes = require('./routes/theatreroutes')
const showroutes = require('./routes/showroutes')
const bookingRoute = require('./routes/bookingRoute')
const cors = require('cors')
app.use(cors({ origin: '*' }));

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, '../vite-project/dist')));

// Serve index.html for any unknown routes (for React SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../vite-project/dist/index.html'));
});

app.use(express.json())
app.use('/api/users', userRoutes)
app.use('/api/movies',movieroutes)
app.use('/api/theatre',theatreroutes)
app.use('/api/shows',showroutes)
app.use('/api/bookings' , bookingRoute )

app.listen(port,()=>{
    console.log("Server Running on port 8000")
})