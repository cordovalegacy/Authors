const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    
    author: { type: String,
    required: [true, 'Author is required'],
    minLength: [3, 'Author name requires at least 3 characters']
    },
}, { timestamps: true });


module.exports = mongoose.model('Author', AuthorSchema);