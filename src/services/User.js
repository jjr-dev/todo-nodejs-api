const bcrypt = require('bcrypt')

const User = require('../models/User')

class Users {
    async Create(data) {
        const { email, name, password } = data

        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        if(await User.findOne({email: email}))
            return {
                error: {
                    status: 422,
                    msg: "Email já em uso"
                }
            }
    
        try {
            await User.create({
                email,
                name,
                password: passwordHash
            })
        
            return await User.findOne({email: email}, '-password')
        } catch(err) {
            return {
                error: {
                    status: 500,
                    msg: err
                }
            }
        }
    }
}

module.exports = new Users;