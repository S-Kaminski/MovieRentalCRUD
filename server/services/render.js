const axios = require('axios');

exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/movies')
        .then(function(response){
            res.render('index', { movies: response.data });
            console.log(response.data);
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_movie = (req, res) => {
    res.render('add_movie');
}

exports.add_user = (req, res) => {
    res.render('add_user');
}

exports.show_users = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('show_users', { users: response.data });
            console.log(response.data);
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.show_rentals = (req, res) => {
    axios.get('http://localhost:3000/api/rentals')
        .then(function(response){
            res.render('show_rentals', { rentals: response.data });
            console.log(response.data);
        })
        .catch(err =>{
            res.send(err);
        })
}
