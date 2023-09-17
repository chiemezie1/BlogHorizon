const express = require('express');
const multer = require('multer');
const ImageController = require('../controllers/imagePostController');
const ensureAuthenticated = require('../middleware/AuthMiddleware');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../images/post/') 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } });

router.post('/', ensureAuthenticated, upload.single('image'), ImageController.uploadPostImage);
router.get('/:filename', ensureAuthenticated, ImageController.servePostImage);
router.delete('/:filename', ensureAuthenticated, ImageController.deletePostImage);
router.put('/:filename', ensureAuthenticated, upload.single('image'), ImageController.updatePostImage);

module.exports = router;
