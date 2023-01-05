const User = require('../services/User')

class Users {
    async Create(req, res) {
        const { email, password, passwordConfirm, name} = req.body
    
        if(!email)
            return res.status(422).json({message: "Email obrigatório"})
    
        if(!name)
            return res.status(422).json({message: "Nome obrigatório"})
    
        if(!password)
            return res.status(422).json({message: "Senha obrigatória"})
    
        if(password !== passwordConfirm)
            return res.status(422).json({message: "Senhas não conferem"})
    
        const createdUser = await User.Create({
            name,
            email,
            password
        })

        if(createdUser.error)
            return res.status(createdUser.error.status).json({error: createdUser.error.msg})

        res.status(201).json(createdUser)
    }
}

module.exports = new Users;