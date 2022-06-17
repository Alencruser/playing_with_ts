import { Voiture } from '@models/voitures';
import express from 'express';
const router = express.Router();
import { getVoitureById, getVoitures } from '../services/voitures';

// middleware that is specific to this router
router.use(function timeLog(req: any, res: any, next: any) {
  console.log('Time: ', Date.now());
  next();
});


router.get('/', async (req: any, res: any) => {
    let voitures: Voiture[] = await getVoitures();
    voitures = voitures.map((voiture: Voiture) => {
        let newVoiture: any = {};
        newVoiture.age = voiture.age + ' ans';
        newVoiture.neuve = 'oui';
        newVoiture = {...voiture, ...newVoiture}
        return newVoiture;
    })
    console.log('voitures modifiées', voitures);
    res.render('voitures', { voitures });
});

router.get('/:id', async (req,res) => {
    let id = Number(req.params.id);
    let voiture:Voiture = await getVoitureById(id);
    res.render('voitures', {voitures: voiture})
});

export default router;