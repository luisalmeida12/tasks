const Task = require('../models/Task');

module.exports = {
    
    // create or add a new task
    add: function(req, res) {
        let task = new Task(req.body);

        task.save()
        .then(task => res.status(200).json(task))
        .catch(err => {
            res.status(400).send('There was an error while adding the task ', err)
        });

    },

    // get all tasks
    getAll: function(req, res) {
        Task.find(function(err, tasks){
            if (err) {
                res.status(400).send('There as an error while retrieving the tasks.');
            }
            else {
                res.status(200).json(tasks);
            }
        });
    },

    getById: function(req, res) {
        Task.findById(req.params.id, function(err, task){
            if (err) {
                res.status(400).send('There was an error retrieving this task ' + err);
            }
            else {
                res.status(200).json(task);
            }
        });
    },

    delete: function(req, res) {
        Task.findByIdAndRemove(req.params.id, function(err, task){
            if (err) {
                res.status(400).send('There was an error deleting this task ', err);
            }
            else {
                res.status(200).json(req.params.id);
            }
        });
    },

    update: function(req, res) {
        Task.findByIdAndUpdate(req.params.id, function(err, task){
            if (err) {
                res.status(400).send('There was an error updating this task ' + err);
            }
            else {
                res.status(200).json(task);
            }
        });
    }
};
