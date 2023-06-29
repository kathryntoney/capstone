// const mongoose = require('mongoose')
// mongoose.connect('mongodb://127.0.0.1:27017/wineBuddy');

const mongoose = require('mongoose');
const Schema = mongoose.Schema

main().catch(err => console.log(err));

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/wineBuddy');
        console.log('connection open')
    } catch (error) {
        console.log('connection failed: ', error)
    }
    //! use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled


const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    zip: Number
});

const User = mongoose.model('User', userSchema)
// const Katie = new User({ firstName: 'Katie', lastName: 'Toney', email: 'kathryn.toney@gmail.com', phone: 7705466265, zip: 30310 })
await Katie.save()
const users = await User.find()
console.log(users)
}