const express = require('express');
const router = express.Router();
const artistController = require('../../controllers/artist/artist.controller');

// Routes for artists
router.get('/artists', artistController.getAllArtists);
router.post('/artists', artistController.createArtist);
router.get('/artists/:id', artistController.getArtistById);

module.exports = router;
