
/*PARTNER EXERCISE 1*/
//Creates the 'test.txt' file and save the data in it.
// var fs = require('fs');

// var data = { name: "Hadas", job: "queen" };

// fs.writeFile('test.txt', JSON.stringify(data), function (err) {
//     if (err)
//         throw err;
//     else 
//         console.log('Data saved to file!');
//   });


/*PARTNER EXERCISE 2*/
//Read the data back out of the file.
// fs.readFile("test.txt", 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
//   });

  /*PARTNER EXERCISE 3*/
var express = require("express");
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

//serve static files
app.use(express.static('public'));
app.use(express.static('node_modules'));

//body-parser
app.use(bodyParser.json());  //add this line
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.send('This is from the root directory');
});

//readFile route
app.get('/file', function(req,res){
    console.log("send data form file");
    fs.readFile("test.txt", 'utf8', function(err, data){
        if (err) throw err;
        res.send(data);
      });
});

//writeFile route
app.post("/file", function(req, res) {
    console.log(req.body);
    fs.writeFile('test.txt', JSON.stringify(req.body), function(err) {
      if (err) throw err;
      else console.log('Data saved to file!');
    });
  });

app.listen(8000);
console.log("server listen on port 8000...");