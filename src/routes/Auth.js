const router = require('express').Router()

const bcrypt = require('bcrypt')
const jwt    = require('jsonwebtoken')

const User = require('../models/User')

router.post('/user', async (req, res) => {
    const { email, password } = req.body

    if(!email)
        return res.status(422).json({message: "Email obrigatório"})

    if(!password)
        return res.status(422).json({message: "Senha obrigatória"})

    const user = await User.findOne({email: email})

    if(!user)
        return res.status(422).json({message: "Usuário não encontrado"})

    if(!await bcrypt.compare(password, user.password))
        return res.status(422).json({message: "Senha incorreta"})

    try {
        const token = jwt.sign({
            id: user._id,
        }, process.env.SECRET)

        res.status(200).json({
            token
        })
    } catch (err) {
        res.status(500).json({
            message: "Erro no servidor"
        })
    }
})

module.exports = router