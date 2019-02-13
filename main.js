"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// expressjs configuration
var port = 8080;
var host = '0.0.0.0';
// serve angular dist without docker
var appDir = '/usr/src/app/angular';
var app = express_1.default();
// serve the angular static files with middleware
app.use(express_1.default.static(appDir));
// serve index.html for angular on all routes
app.get('/*', function (req, res) {
    res.sendFile(appDir + '/index.html');
});
app.listen(port, host);
console.log('listening on ', port, host);
