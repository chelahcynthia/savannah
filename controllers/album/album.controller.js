const Album = require('../../models/albums/album.mongo');    

// Controller to get all albums
exports.getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find().populate('artist', 'name');
    res.status(200).json({
      status: 'success',
      data: {
        albums,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Controller to create a new album
exports.createAlbum = async (req, res) => {
  try {
    const newAlbum = await Album.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        album: newAlbum,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  }
};

// Controller to get a specific album by ID
exports.getAlbumById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id).populate('artist', 'name');
    if (!album) {
      return res.status(404).json({
        status: 'fail',
        message: 'Album not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: {
        album,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};
