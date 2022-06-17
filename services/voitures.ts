import { Voiture } from '@models/voitures';
import { connection } from '../db';

export const getVoitures = () => {
    return new Promise<Voiture[]>((resolve,reject)=> {
        connection.query('SELECT * FROM Voitures', (err: string,results: Voiture[])=> {
            if(err) reject(err);
            resolve(results);
        });
    });
}


export const getVoitureById = (id: number) => {
    return new Promise<Voiture>((resolve, reject)=> {
        if(!id)reject('Donne un id');
        connection.query('SELECT * FROM Voitures WHERE id = "'+ id +'"', (err: string,results: Voiture)=> {
            if(err) reject(err);
            resolve(results);
        });
    });
};