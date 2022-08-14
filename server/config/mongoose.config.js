const mongoose = require('mongoose');
const authors = 'authors_db';

mongoose.connect(`mongodb://127.0.0.1/${authors}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log(`${authors} connection established`))
    .catch((err) => console.log('cannot establish connection to the database', err));