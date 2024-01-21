const express = require('express');
const router = express.Router();
const albumController = require('../../controllers/album/album.controller');

// Routes for albums
router.get('/albums', albumController.getAllAlbums);
router.post('/albums', albumController.createAlbum);
router.get('/albums/:id', albumController.getAlbumById);

module.exports = router;
