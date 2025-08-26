import {Schema, model} from 'mongoose';
// test schema
export const BookSchema = new Schema({
    title: String,
    author: String,
    year: Number
});

export const BookModel = model('Book', BookSchema);
