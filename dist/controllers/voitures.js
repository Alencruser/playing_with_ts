"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const voitures_1 = require("../services/voitures");
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// router.get('/', async (req: any, res: any) => {
//     let voitures: Voiture[] = await getVoitures();
//     voitures = voitures.map((voiture: Voiture) => {
//         let newVoiture: any = {};
//         newVoiture.age = voiture.age + ' ans';
//         newVoiture.neuve = 'oui';
//         newVoiture = {...voiture, ...newVoiture}
//         return newVoiture;
//     })
//     console.log('voitures modifiées', voitures);
//     res.render('voitures', { voitures });
// });
router.get('/', (req, res) => {
    (0, voitures_1.getVoitures)().then((voitures) => {
        voitures = voitures.map((voiture) => {
            let newVoiture = {};
            newVoiture.age = voiture.age + ' ans';
            newVoiture.neuve = 'oui';
            newVoiture = Object.assign(Object.assign({}, voiture), newVoiture);
            return newVoiture;
        });
        console.log('voitures modifiées', voitures);
        res.render('voitures', {
            voitures
        });
    });
});
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const voiture = yield (0, voitures_1.getVoitureById)(id);
    res.render('voitures', {
        voitures: voiture
    });
}));
exports.default = router;
//# sourceMappingURL=voitures.js.map