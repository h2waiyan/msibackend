"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_jwt_1 = require("express-jwt");
function authJwt() {
    return (0, express_jwt_1.expressjwt)({
        secret: "p4sta.w1th-b0logn3s3-s@uce",
        algorithms: ['HS256'],
    }).unless({
        path: [
            { url: /\//, methods: ['GET', 'OPTIONS'] },
            { url: /\/admin/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/courses(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/instructors(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/stories(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/times(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/sections(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/contacts(.*)/, methods: ['GET', 'OPTIONS'] },
            { url: /\/api\/enrolls\/create/, methods: ['POST', 'OPTIONS'] },
            { url: /\/api\/courses\/login/, methods: ['POST', 'OPTIONS'] },
        ]
    });
}
exports.default = authJwt;
