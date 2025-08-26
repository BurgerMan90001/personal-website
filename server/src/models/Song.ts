
import {Schema, model} from 'mongoose';

export const SongSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    completed: Boolean
});


export const SongModel = model('Song', SongSchema);
