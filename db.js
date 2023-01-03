const mongoose = require('mongoose')

mongoose.set("strictQuery", true);

const connectDatabase = async () => {
    mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASS)}@cluster0.jckp0i5.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado ao MongoDB')
    })
    .catch((err) => console.log(err))
} 

module.exports = connectDatabase;