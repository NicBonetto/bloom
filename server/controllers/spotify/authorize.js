import spotify from '../../lib/spotify.js';

const authorize = async (req, res) => {
  try {
    const data = await spotify.clientCredentialsGrant();
    process.env.SPOTIFY_TOKEN = data.body['access_token'];
    return res.status(200).json({});
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default authorize;
