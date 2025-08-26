import { Schema, model} from 'mongoose';


// schema is the data definition
export const TaskSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    completed: Boolean
});


export const TaskModel = model('Task', TaskSchema);



