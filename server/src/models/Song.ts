
import {Schema, model} from 'mongoose';

export const songSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    completed: Boolean
});


export const taskModel = model('Task', songSchema);
