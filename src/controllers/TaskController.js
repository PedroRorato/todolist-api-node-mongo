const Task = require('../models/Task');
const User = require('../models/User');

module.exports = {

    async index(request, response) {
        
        const user = await User.findById(request.params.userId);//.populate('tasks');

        return response.json(user);
    },

    async show(request, response) {

        const task = await Task.findById(request.params.taskId).populate('user');

        return response.json(task);
    },

    async store(request, response) {

        const { title, description } = request.body;

        try{
            const user = await User.findById(request.params.userId);
            const task = new Task({ title, description, user: request.params.userId });
            await task.save();
            await user.tasks.push(task);
            await user.save();

            return response.json(user);
        } catch(error) {
            return response.status(400).json(error);
        }
    },

    async update(request, response) {

        const { title, description } = request.body;
        
        try{
            //O parametro { new: true } é para retornar o objeto atualizado
            const task = await Task.findByIdAndUpdate(request.params.taskId, { title, description }, { new: true });
            return response.json(task);
        } catch(error) {
            return response.status(400).json(error);
        }
    },

    async destroy(request, response) {

        try{
            const user = await User.findById(request.params.userId);
            
            user.tasks.splice(request.params.taskId, 1)

            await user.save();
            await Task.findByIdAndRemove(request.params.taskId);

            return response.send({ message: "Task successfully deleted!" });
        } catch(error) {
            return response.status(400).json(error);
        }
    }
};