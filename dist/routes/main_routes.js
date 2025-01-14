"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// Define a basic route
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the main route!' });
});
// Define another route
router.get('/about', (req, res) => {
    res.json({ message: 'About this application' });
});
exports.default = router;
