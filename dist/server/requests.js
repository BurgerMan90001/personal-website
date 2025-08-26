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
const Song_1 = require("./models/Song");
//const apiUrl: string = ''
const testSong = new Song_1.SongModel({
    title: 'Greatest hits',
    description: 'My greatest songs of all time',
    artist: 'me',
});
const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(testSong)
};
function createSong() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:3000/api', requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            /*
            const data = await response.json();
            console.log('User data:', data);
            return data;
            */
            console.log('created song');
        }
        catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    });
}
function getAllSongs() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('http://localhost:3000/api');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = yield response.json();
            const test = JSON.parse(data);
            console.log('User data:', data);
            //return data;
        }
        catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    });
}
function getSongById() {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
