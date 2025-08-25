import {Schema} from 'mongoose';
// test schema
export const bookSchema = new Schema({
    title: String,
    author: String,
    year: Number
});
