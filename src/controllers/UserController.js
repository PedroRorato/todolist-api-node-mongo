const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    async index(request, response) {
        const users = await User.find();

        return response.json(users);
    },

    async show(req, res) {
        const product = await User.findById(req.params.id);

        return res.json(product);
    },

    async store(req, res) {
        const product = await User.create(req.body);

        return res.json(product);
    },

    // async update(req, res) {
    //     //O parametro { new: true } é para retornar o objeto atualizado
    //     const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    //     return res.json(product);
    // },

    // async destroy(req, res) {
    //     const product = await Product.findByIdAndRemove(req.params.id);

    //     return res.send();
    // }
};