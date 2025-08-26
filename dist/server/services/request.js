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
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const baseUrl = 'http://localhost:' + process.env.PORT;
exports.request = {
    get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(baseUrl + url);
                const result = yield response.json();
                console.log("Success:", result);
                return result;
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    },
    post(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(baseUrl + url, {
                    method: 'POST',
                });
                const result = yield response.json();
                console.log("Success:", result);
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    },
    put(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(baseUrl + url, {
                    method: 'PUT',
                });
                const result = yield response.json();
                console.log("Success:", result);
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    },
    delete(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(baseUrl + url, {
                    method: 'DELETE',
                });
                const result = yield response.json();
                console.log("Success:", result);
            }
            catch (error) {
                console.error("Error:", error);
            }
        });
    }
};
