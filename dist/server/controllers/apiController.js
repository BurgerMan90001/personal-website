"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPoll = createPoll;
exports.getAllPolls = getAllPolls;
exports.getPollById = getPollById;
exports.updatePollById = updatePollById;
exports.deletePollById = deletePollById;
const Poll_1 = require("../models/Poll");
function createPoll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const song = new Poll_1.PollModel(req.body);
            const savedSong = yield song.save();
            res.status(201).json(savedSong);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
}
function getAllPolls(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const songs = yield Poll_1.PollModel.find();
            res.status(200).json(songs);
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
        //console.log(res.constructor.name)
    });
}
function getPollById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const item = yield Poll_1.PollModel.findById(req.params.id);
            if (!item)
                return res.status(404).json({ error: "Item not found" });
            res.status(200).json(item);
        }
        catch (err) {
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
    });
}
function updatePollById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedItem = yield Poll_1.PollModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedItem) {
                res.status(404).json({ error: "Item not found" });
            }
            res.status(200).json(updatedItem);
        }
        catch (err) {
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
    });
}
function deletePollById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const deletedItem = yield Poll_1.PollModel.findByIdAndDelete(req.params.id);
            if (!deletedItem)
                return res.status(404).json({ error: "Item not found" });
            res.status(200).json({ message: "Item deleted" });
        }
        catch (err) {
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
    });
}
