import express from 'express';
import voitures from './controllers/voitures';

const app = express();

app.set('view engine', 'ejs');

app.use('/voitures', voitures);


app.listen(8080, () => {
    console.log('Serveur lancé sur le port 8080');
});


