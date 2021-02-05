import Spotify from 'spotify-web-api-node';

const spotifyApi = new Spotify({
  clientId: process.env.SPOTIFY_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  redirectUri: process.env.REDIRECT_URI
});

export default spotifyApi;
