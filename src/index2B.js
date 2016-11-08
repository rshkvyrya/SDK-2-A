import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  	const fullname = req.query.fullname || null;
  	let resname = "";  
  	let array;
  	if(fullname !== null){
  		array = fullname.split(" ");
		if(array.length == 1) resname += array[0];
		if(array.length == 2) resname += array[1] + " " + array[0].charAt(0) + ".";
		if(array.length == 3) resname += array[2] + " " + array[0].charAt(0) + ". " + array[1].charAt(0) + ".";
		if(array.length > 3) resname += "Invalid fullname"
  	}else{
  		resname = "Invalid fullname"
  	}
	
  	res.send(resname.toString());
});

app.listen(666, function () {
  console.log('Example app listening on port 666!');
});
