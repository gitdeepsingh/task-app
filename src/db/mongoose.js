const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true,
    // useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const me = new User({
    name: 'Deep Singh',
    age: 27
});

const myTask = new Task({
    description: 'Prepare Google sheet for sync logs report.',
    completed: false    
});

// me.save().then(()=>{
//     console.log('me==', me)
// }).catch((err)=>{
//     console.log('Error: ', err)
// });

myTask.save().then(()=>{
    console.log('task==', myTask)
}).catch((err)=>{
    console.log('Error: ', err)
});
