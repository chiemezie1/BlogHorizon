const express = require('express');
const multer = require('multer');
const ImageController = require('../controllers/imageController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/') 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
});

// POST route for uploading an image
router.post('/upload', upload.single('image'), ImageController.uploadImage);

// GET route for retrieving an image by filename
router.get('/:filename', ImageController.serveImage);

// DELETE route for deleting an image
router.delete('/:filename', ImageController.deleteImage);

// PUT route for updating/replacing an image
router.put('/update/:filename', upload.single('image'), ImageController.updateImage);

module.exports = router;
