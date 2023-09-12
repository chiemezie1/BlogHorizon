const fs = require('fs');
const path = require('path');
const Image = require('../models/ImageModel');

const imageController = {};

imageController.uploadImage = async (req, res) => {
    try {
        const newImage = new Image({
            filename: req.file.filename
            // You can add more fields if needed
        });

        const savedImage = await newImage.save();

        res.status(200).json({ message: "Image uploaded and saved successfully", savedImage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

imageController.serveImage = async (req, res) => {
    try {
        const filename = req.params.filename;
        const image = await Image.findOne({ filename: filename });
        if (!image) throw new Error("Image not found in the database.");

        const filepath = path.join(__dirname, '..', 'uploads', filename);
        res.sendFile(filepath);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

imageController.deleteImage = async (req, res) => {
    try {
        const filename = req.params.filename;

        // Delete image record from the database
        const deletedImage = await Image.findOneAndDelete({ filename: filename });
        if (!deletedImage) throw new Error("Image record not found in the database.");

        // Delete image from the filesystem
        const filepath = path.join(__dirname, '..', 'uploads', filename);
        if (!fs.existsSync(filepath)) throw new Error("Image file not found.");
        fs.unlinkSync(filepath);

        res.status(200).json({ message: "Image and its record deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

imageController.updateImage = async (req, res) => {
    try {
        const oldFilename = req.params.filename;

        // Delete the old image record from the database
        const deletedImage = await Image.findOneAndDelete({ filename: oldFilename });
        if (!deletedImage) throw new Error("Old image record not found in the database.");

        // Save the new image details to the database
        const newImage = new Image({
            filename: req.file.filename
        });
        const savedImage = await newImage.save();

        // Delete the old image from the filesystem
        const oldFilepath = path.join(__dirname, '..', 'uploads', oldFilename);
        if (fs.existsSync(oldFilepath)) fs.unlinkSync(oldFilepath);

        res.status(200).json({ message: "Image updated successfully", savedImage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = imageController;
