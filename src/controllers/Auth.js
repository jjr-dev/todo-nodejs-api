const jwt = require('jsonwebtoken')

class Auth {
    checkToken(req, res, next) {
        const authorization = req.headers['authorization']
        const token = authorization && authorization.split(' ')[1]

        if(!token)
            return res.status(401).json({
                message: "Acesso negado"
            })

        try {
            jwt.verify(token, process.env.SECRET, (err, decoded) => {
                if(err)
                    return res.status(500).json({message: err})

                req.user_id = decoded.id

                next()
            })
        } catch(err) {
            res.status(400).json({
                message: "Token inválido"
            })
        }
    }
}

module.exports = new Auth()