const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);
route.get('/add-movie', services.add_movie);
route.get('/add-user', services.add_user);
route.get('/show-users', services.show_users);
route.get('/show-rentals', services.show_rentals);

//API

route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:id',controller.update)
route.delete('/api/users/:id',controller.delete)

//route.post('/api/rentals',controller.createRentals)
route.get('/api/rentals',controller.findRentals)
//route.put('/api/rentals/:id',controller.updateRentals)
//route.delete('/api/rentals/:id',controller.deleteRentals)

route.post('/api/movies',controller.createMovies)
route.get('/api/movies',controller.findMovies)
//route.put('/api/movies/:id',controller.updateMovies)
route.delete('/api/movies/:id',controller.deleteMovies)



module.exports = route