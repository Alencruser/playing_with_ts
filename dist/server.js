"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const voitures_1 = __importDefault(require("./controllers/voitures"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.use('/voitures', voitures_1.default);
app.listen(8080, () => {
    console.log('Serveur lancé sur le port 8080');
});
//# sourceMappingURL=server.js.map