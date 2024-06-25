"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.router);
/* eslint-disable no-undef */
app.listen(process.env.PORT || 3000, () => {
    console.log('Backend executando');
});
