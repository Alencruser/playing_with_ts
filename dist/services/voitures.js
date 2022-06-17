"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVoitures = void 0;
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
//# sourceMappingURL=voitures.js.map