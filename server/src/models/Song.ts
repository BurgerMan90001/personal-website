
import {Schema, model} from 'mongoose';

export const SongSchema = new Schema({

    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      
    },
    /*
    cover: {

    }
    */

});


export const SongModel = model('Song', SongSchema);
