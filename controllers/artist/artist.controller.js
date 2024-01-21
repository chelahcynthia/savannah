const Artist = require('../../models/artists/artist.mongo.js');

// Controller to get all artists
exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find();
    res.status(200).json({
      status: 'success',
      data: {
        artists,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Controller to create a new artist
exports.createArtist = async (req, res) => {
  try {
    const newArtist = await Artist.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        artist: newArtist,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Controller to get a specific artist by ID
exports.getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);
    if (!artist) {
      return res.status(404).json({
        status: 'fail',
        message: 'Artist not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        artist,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
