const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  releaseDate: Date,
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
  },
  tracks: [
    {
      title: String,
      duration: String,
    },
  ],
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;
