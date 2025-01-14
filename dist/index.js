"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_routes_1 = __importDefault(require("./routes/main_routes"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Use the main routes
app.use('/api', main_routes_1.default);
// Basic route
app.get('/firstReq', (req, res) => {
    res.json({ message: 'Happy developing ✨' });
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
