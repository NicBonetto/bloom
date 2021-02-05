import { Router } from 'express';
import spotifyControllers from '../controllers/spotify/index.js';
import { checkSchema } from 'express-validator';
import spotifyValidators from '../lib/validators/spotify.js';

const router = Router();

router.get('/authorize', spotifyControllers.authorize);
router.get('/autocomplete/:artist', checkSchema(spotifyValidators.autocomplete), spotifyControllers.autocomplete);

export default router;
