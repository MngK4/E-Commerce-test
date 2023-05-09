const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

mongoose.connect('mongodb+srv://MngK4:Quymui049@orders-testing.f8x99no.mongodb.net/E-Commerce?retryWrites=true&w=majority')
.then(() => console.log('Connect to the database succesfully'))
.catch((error) => console.log('Connection was unsuccessful'));

// const person = new User({
//     name: 'Minh',
//     userID: '159'
// });

// person.save()
// .then(() => console.log('Document saved'))
// .catch((error) => console.log('Document save failed'))

const User = mongoose.model('User',userSchema);

User.find()
.then(() => console.log(users))
.catch((error) => console.log('No users found'));