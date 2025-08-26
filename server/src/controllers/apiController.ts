//import type { Task } from '../models/Task.ts'
import type { Request, Response } from 'express';
//import type { ApiController } from './controllers.ts';

//import{ SongSchema, SongModel } from '../models/Song.ts';
import { PollModel } from '../models/Poll.ts';


export async function createPoll(req: Request, res: Response) {
  try {
    const song = new PollModel(req.body);
    const savedSong = await song.save();
    res.status(201).json(savedSong);
  } catch (err: any) {

    res.status(500).json({ error: err.message });
  }
}

export async function getAllPolls(req: Request, res: Response) {

    try {
      const songs = await PollModel.find();
      res.status(200).json(songs);
    } catch (err: any) {
      res.status(500).json({ error: err.message });
    }
    //console.log(res.constructor.name)
}
export async function getPollById(req: Request, res: Response) {
  try {
    const item = await PollModel.findById(req.params.id);
    if (!item) return res.status(404).json({ error: "Item not found" });
    res.status(200).json(item);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
    /*
    const task = findTaskById(req.params.id)

    if (!task) {
      // searches for the task by id
      res.status(404).send('Task not found')
    } else {
      res.json(task)
    }
      */
  }
export async function updatePollById(req: Request, res: Response) {
  try {
    const updatedItem = await PollModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      res.status(404).json({ error: "Item not found" })
    }

    res.status(200).json(updatedItem);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
    /*
    const task = findTaskById(req.params.id)

    if (!task) {
      res.status(404).send('Task not found')
    } else {
      task.title = req.body.title || task.title
      task.description = req.body.description || task.description
      task.completed = req.body.completed || task.completed

      res.json(task)
    }
      */
}

export async function deletePollById(req: Request, res: Response) {
  try {
    const deletedItem = await PollModel.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ error: "Item not found" });
    res.status(200).json({ message: "Item deleted" });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
    /*
    console.log('delete by id')
    const index = findTaskIndexById(req.params.id)

    if (index === -1) {
      res.status(404).send('Task not found')
    } else {
      tasks.splice(index, 1)
      res.status(204).send()
    }
      */
}
