import express from 'express';
import dotenv from 'dotenv';
import spotifyRoutes from './routes/spotify.js';

dotenv.config();
const app = express();

app.use('/spotify', spotifyRoutes);

app.listen(process.env.PORT);
console.log(`Server is running on localhost:${process.env.PORT}`);
