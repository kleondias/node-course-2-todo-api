// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client)=>{
	if(err) {	
		return console.log('Unable to connect to mongodb server');
	}
	console.log("Connected to mongodb Server");

	const db = client.db('TodoApp');
	
	// db.collection('Todos').find({
	// 	_id: new ObjectID('5ce92c9944a65611ac7879ef')
	// }).toArray().then((docs)=>{
	// 	console.log("Todos: ");
	// 	console.log(JSON.stringify(docs, undefined, 3));
	// }, (err)=>{
	// 	console.log("Unabl;e to fetch todos", err);
	// });


	// db.collection('Todos').find().count().then((count)=>{
	// 	console.log(`Todos count ${count}` );
	// 	// console.log(JSON.stringify(docs, undefined, 3));
	// }, (err)=>{
	// 	console.log("Unabl;e to fetch todos", err);
	// });


	db.collection('Users').find({name:"Kleon"}).toArray().then((docs)=>{
		console.log(`Users:` );
		console.log(JSON.stringify(docs, undefined, 3));
	}, (err)=>{
		console.log("Unable to fetch todos", err);
	});

	// client.close();
});









