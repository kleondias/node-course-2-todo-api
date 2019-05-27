const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });



Todo.findOneAndRemove({_id:'5cebc95f409df101047d2aac'}).then((todo)=>{
	console.log(todo);
});


// Todo.findByIdAndRemove('5cebc95f409df101047d2aac').then((todo)=>{
// 	console.log(todo);
// });




