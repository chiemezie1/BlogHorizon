const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
        unique: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
