import { Router, Response, Request } from 'express';
import * as pagesControl from '../controllers/pages';
import * as searshControl from '../controllers/serach'
 

const router = Router();

router.get('/', pagesControl.home);
router.get('/dogs', pagesControl.dogs);
router.get('/cats', pagesControl.cats);
router.get('/fishies', pagesControl.fishies);

router.get('/search', searshControl.search);

export default router;