const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: String,
        userID: String
});

const User = mongoose.model('User',userSchema);

const person = new User({
    name: 'Minh',
    userID: '159'
});

person.save()
.then(() => console.log('Document saved'))
.catch((error) => console.log('Document save failed'))