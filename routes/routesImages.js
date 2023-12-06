const express = require('express');
const route = express.Router();
const Images = require('../services/servicesImages');
const upload = require('../middlewares/multerConfig')

const images = new Images();

route.post('/', upload.single('image'), async (req, res) => {
    console.log(req.body);
    const imageUrl = 'http://localhost:5000/' + req?.file?.path;
    const imageData = { ...req.body, image_url: imageUrl };

    try {
        const createdImage = await images.createImage(imageData);
        res.status(201).json(createdImage);
    } catch (error) {
        console.error('Error creating image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

route.put('/:imageId', upload.single('image'), async (req, res) => {
    const imageId = req?.params?.imageId;
    const updatedImageData = req.file.path;
    try {
        const updatedImage = await images.updateImage(imageId, updatedImageData);
        if (updatedImage) {
            res.json(updatedImage);
        } else {
            res.status(404).json({ error: 'Image not found' });
        }
    } catch (error) {
        console.error('Error updating image:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = route;