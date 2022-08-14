const AuthorController = require('../controllers/author.controller');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.getAllAuthors);
    app.post('/api/authors', AuthorController.createAuthors);
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.put('/api/authors/:id', AuthorController.updateAuthors);
    app.delete('/api/authors/:id', AuthorController.deleteAuthors);
}