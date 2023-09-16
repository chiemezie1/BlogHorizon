const mongoose = require('mongoose');

const imagePostSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    mimeType: {
        type: String,
        required: true,
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    uploadedAt: {
        type: Date,
        default: Date.now,
    }
});


const PostImage = mongoose.model('PostImage', imagePostSchema);

module.exports = PostImage;