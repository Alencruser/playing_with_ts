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
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let voitures = yield (0, voitures_1.getVoitures)();
    voitures = voitures.map((voiture) => {
        voiture.age = voiture.age + ' ans';
        voiture.neuve = 'oui';
        return voiture;
    });
    res.render('voitures', { voitures });
}));
exports.default = router;
//# sourceMappingURL=voitures.js.map