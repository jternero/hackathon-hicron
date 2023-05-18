import { Router } from 'express';
import { deletePeople, getPeople, getPerson, postPeople, putPeople  } from '../controllers/people.controller';

const router = Router();

router.get('/', getPeople);
router.get('/:id', getPerson)
router.delete('/:id', deletePeople)
router.post('/', postPeople)
router.put('/:id', putPeople)


export default router;