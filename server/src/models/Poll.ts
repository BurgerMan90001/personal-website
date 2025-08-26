
import {Schema, model} from 'mongoose';
// test schema
export const PollSchema = new Schema({
  question: {
    type:String,
    required: true,
  },
  answers: [{
    type:String,
    required: true,
  }]

});

export const PollModel = model('Poll', PollSchema);
