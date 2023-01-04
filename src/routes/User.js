const router = require('express').Router()

const bcrypt = require('bcrypt')

const User   = require('../models/User')

router.post('/', async (req, res) => {
    const { email, password, passwordConfirm, name} = req.body

    if(!email)
        return res.status(422).json({message: "Email obrigatório"})

    if(!name)
        return res.status(422).json({message: "Nome obrigatório"})

    if(!password)
        return res.status(422).json({message: "Senha obrigatória"})

    if(password !== passwordConfirm)
        return res.status(422).json({message: "Senhas não conferem"})

    if(await User.findOne({email: email}))
        return res.status(422).json({message: "Email já em uso"}) 

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    await User.create({
        email,
        name,
        password: passwordHash
    })

    const createdUser = await User.findOne({email: email}, '-password')

    res.status(200).json(createdUser)
})

module.exports = router