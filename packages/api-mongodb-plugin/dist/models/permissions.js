"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var PermissionsSchema = new mongoose_1.default.Schema({
    _id: {
        type: String,
        required: true
    }
});
exports.default = mongoose_1.default.model('Permissions', PermissionsSchema, 'pub_keys');
