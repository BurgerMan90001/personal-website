import {Schema, model} from 'mongoose';
// test schema
export const bookSchema = new Schema({
    title: String,
    author: String,
    year: Number
});

export const bookModel = model('Book', bookSchema);
