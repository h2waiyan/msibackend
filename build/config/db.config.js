"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
exports.dbConfig = {
    HOST: "localhost",
    USER: "santoe",
    PASSWORD: "santoe",
    DB: "msi_ts",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
