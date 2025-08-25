import {Schema, model} from 'mongoose';
export const UserSchema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});


export const taskModel = model('Task', UserSchema);
