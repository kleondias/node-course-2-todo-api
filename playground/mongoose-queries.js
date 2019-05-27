const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ceb74a302759c0c90e9537811';

// if(!ObjectID.isValid(id)){
// 	console.log("id not valid");
// }


// Todo.find({
// 	_id: id
// }).then((todos)=>{
// 	console.log('Todos :',todos);
// });


// Todo.findOne({
// 	_id: id
// }).then((todo)=>{
// 	console.log('Todo: ',todo);
// });


// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log("id not found");
// 	}
// 	console.log('Todo By id: ',todo);
// }).catch((e)=> console.log(e));


var id = '5cea13d1f6947c09289999e4';

User.findById(id).then((user)=>{
	if(!user){
		return console.log("unable to find user");
	}
	console.log(JSON.stringify(user, undefined, 3));
}, (e)=>{
	console.log(e);
});





