const mongoose = require('mongoose');
if (!mongoose.connection.db){
    mongoose.connect('mongodb://localhost/capthat')
}

const db = mongoose.connection
const word_lyrics = mongoose.Schema({
    word: String,
    lyrics: [String]
})


const Word_lyrics = mongoose.model('word_lyrics', word_lyrics)

module.exports = Word_lyrics