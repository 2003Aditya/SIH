"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const navigationSchema = new mongoose_1.default.Schema({
    startLocation: String,
    endLocation: String,
    directions: [String],
});
const Navigation = mongoose_1.default.model('Navigation', navigationSchema);
exports.default = Navigation;
