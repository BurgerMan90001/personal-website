import { Schema, model} from 'mongoose';


// schema is the data definition
export const taskSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    completed: Boolean
});


export const taskModel = model('Task', taskSchema);



