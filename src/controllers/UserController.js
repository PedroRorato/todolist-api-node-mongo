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

        const { name, email } = request.body;

        try{
            const user = await User.create({ name, email });
            return response.json(user);
        } catch(error){
            return response.status(400).json( error );
        }
    },

    async update(request, response) {

        const { name, email } = request.body;
        
        try{
            //O parametro { new: true } é para retornar o objeto atualizado
            const user = await User.findByIdAndUpdate(request.params.id, { name, email }, { new: true });
            return response.json(user);
        } catch(error){
            return response.status(400).json( error );
        }
    },

    async destroy(request, response) {

        await User.findByIdAndRemove(request.params.id);

        return response.send({ message: "User successfully deleted!" });
    }
};