import { Router } from 'express';
import { createMusic, getMusics, getMusicByID, updateMusic, deleteMusic } from '../controller/Musiccontroller.js';
const router = Router();


router.post('/', createMusic);
router.get('/', getMusics);
router.get('/:id', getMusicByID);
router.put('/:id', updateMusic);
router.delete('/:id', deleteMusic);

export default router;