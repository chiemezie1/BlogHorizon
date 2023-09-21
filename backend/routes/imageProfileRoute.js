const express = require('express');
const multer = require('multer');
const path = require('path');
const ImageController = require('../controllers/imageProfileController');
const ensureAuthenticated = require('../middleware/AuthMiddleware');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../images/profile'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage, limits: { fileSize: 10 * 1024 * 1024 } });

router.post('/', ensureAuthenticated, upload.single('image'), ImageController.uploadProfileImage);
// router.get('/:filename', ensureAuthenticated, ImageController.serveProfileImage);
// router.delete('/:filename', ensureAuthenticated, ImageController.deleteProfileImage);
// router.put('/:filename', ensureAuthenticated, upload.single('image'), ImageController.updateProfileImage);

module.exports = router;
