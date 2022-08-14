const Author = require('../models/author.model');

module.exports = {
    getAllAuthors: (req, res) => {
        Author.find({})
        .then((allAuthors) => res.json(allAuthors))
        .catch((err) => { res.status(400).json({err}) });
    },

    getOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
        .then((oneAuthor) => res.json(oneAuthor))
        .catch((err) => { res.status(400).json({err}) });
    },

    createAuthors: (req, res) => {
        console.log(req.body)
    Author.create(req.body)
        //.then(resp => resp.json())
        .then(author => 
            {
                console.log('===creating author', author)
                return res.json(author)
            })
        .catch(err => { res.status(400).json({err}) });
        },

    updateAuthors: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch((err) => { res.status(400).json({err}) });
    },

    deleteAuthors: (req, res) => {
        Author.deleteOne({_id: req.params.id})
        .then(deleteCheck => res.json(deleteCheck))
        .catch((err) => { res.status(400).json({err}) });
    }
}