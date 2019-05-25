// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
	if(err) {	
		return console.log('Unable to connect to mongodb server');
	}
	console.log("Connected to mongodb Server");

	const db = client.db('TodoApp');
	
	// db.collection('Todos').deleteMany({text:"Eat lunch"}).then((result)=>{
	// 	console.log(result);
	// });

	// db.collection('Todos').deleteOne({text:"Eat lunch"}).then((result)=>{
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({text:"Eat lunch"}).then((result)=>{
	// 	console.log(result);
	// });	

	// db.collection('Users').deleteMany({name:"Kleon"}).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({_id: new ObjectID('5ce9280f6f8af82e50c2e304')}).then((result)=>{
		console.log(result);
	});	

	// client.close();
});









