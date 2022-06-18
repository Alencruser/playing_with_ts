"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVoitureById = exports.getVoitures = void 0;
const db_1 = require("../db");
const getVoitures = () => {
    return new Promise((resolve, reject) => {
        db_1.connection.query('SELECT * FROM Voitures', (err, results) => {
            if (err)
                reject(err);
            resolve(results);
        });
    });
};
exports.getVoitures = getVoitures;
const getVoitureById = (id) => {
    return new Promise((resolve, reject) => {
        if (!id)
            reject('Donne un id');
        db_1.connection.query('SELECT * FROM Voitures WHERE id = "' + id + '"', (err, results) => {
            if (err)
                reject(err);
            resolve(results);
        });
    });
};
exports.getVoitureById = getVoitureById;
//# sourceMappingURL=voitures.js.map