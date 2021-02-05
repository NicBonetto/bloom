import spotify from '../../lib/spotify.js';
import { validationResult } from 'express-validator';
import formatter from '../../lib/autocompleteFormatter.js';

const autocomplete = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    throw result.array()[0].msg;
  }
  const { artist } = req.params;
  try {
    spotify.setAccessToken(process.env.SPOTIFY_TOKEN);
    const data = await spotify.searchArtists(artist);
    const suggestions = formatter(data);
    return res.status(200).json(suggestions);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default autocomplete;
