"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandler(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        return res.status(401).json({ message: "The user is not authorized" });
    }
    if (err.name === 'ValidationError') {
        return res.status(401).json({ message: err });
    }
    // Default to 500 server error
    return res.status(500).json(err);
}
exports.default = errorHandler;
