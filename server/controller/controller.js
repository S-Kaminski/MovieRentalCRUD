var User = require('../model/users');
var Movie = require('../model/movies');
var Rental = require('../model/rentals');


exports.create = (req,res) => {
    if(!req.body){
        res.status(400).send({ message: "Content cannot be empty!"});
        return;
    }

    //new user
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        adress: req.body.adress,
        phone_number: req.body.phone_number,
        registration_date: req.body.registration_date
    });

    //save user in db
    user
    .save()
    .then(data=>{
       //res.send(data)
        res.redirect('/add-user');
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while create operation"
        });
    });
}

exports.find = (req,res) => {
    if(req.query.id){
        const id = req.query.id;

        User.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    } else{
        User.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}

exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }

    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

exports.delete = (req,res) => {
    const id = req.params.id;
    User.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({ message: `Cannot delete user w/ id ${id}.`})
        } else{
            res.send({
                message:"Action > delete < was a success"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete user"
        })
    })
}

//route.post('/api/movies',controller.createMovies)
//route.get('/api/movies',controller.findMovies)
//route.put('/api/movies/:id',controller.updateMovies)
//route.delete('/api/movies/:id',controller.deleteMovies)

exports.createMovies = (req,res) => {
    if(!req.body){
        res.status(400).send({ message: "Content cannot be empty!"});
        return;
    }

    //new movie
    const movie = new Movie({
        title: req.body.title,
        genre: req.body.genre,
        director: req.body.director,
        duration: req.body.duration,
        rating: req.body.rating,
        description: req.body.description,
        actors: req.body.actors,
        added_date: req.body.added_date
    });

    //save movie in db
    movie
    .save()
    .then(data=>{
        //res.send(data);
        res.redirect('/add-movie');
        
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while create operation"
        });
    });
}


exports.findMovies = (req,res) => {
    if(req.query.id){
        const id = req.query.id;

        Movie.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found movie with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving movie with id " + id})
            })

    } else{
        Movie.find()
            .then(movie => {
                res.send(movie)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving movie information" })
            })
    }
}


exports.deleteMovies = (req,res) => {
    const id = req.params.id;
    Movie.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({ message: `Cannot delete movie w/ id ${id}.`})
        } else{
            res.send({
                message:"Action > delete < was a success"
            })
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Could not delete user"
        })
    })
}


exports.findRentals = (req,res) => {
    if(req.query.id){
        const id = req.query.id;

        Rental.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found rental with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving rental with id " + id})
            })

    } else{
        Rental.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}
