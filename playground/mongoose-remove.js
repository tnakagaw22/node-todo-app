const { ObjectID } = require('mongodb');


const { mongoose } = require('../server/db/mongoose');
const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5c277e906f5409bc3e783c5b'}).then((todo) => {
    console.log(todo);
})

Todo.findByIdAndRemove('5c277e61be154a1425cab25b').then((todo) => {
    console.log(todo);
})

