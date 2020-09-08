const User = require('../models/User')

module.exports = {
    async index(request, response) {
        const users = await User.find();

        return response.json(users);
    },

    async show(request, response) {
        const user = await User.findById(request.params.id);

        return response.json(user);
    },

    async store(request, response) {
        const user = await User.create(request.body);

        return response.json(user);
    },

    async update(request, response) {
        //O parametro { new: true } é para retornar o objeto atualizado
        const user = await User.findByIdAndUpdate(request.params.id, request.body, { new: true });

        return response.json(user);
    },

    async destroy(request, response) {
        await User.findByIdAndRemove(request.params.id);

        return response.send({ message: "User successfully deleted!" });
    }
};