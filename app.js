const express = require('express')
const app = express()

// console.log("Hello World")
// console.log("Bye World...")

app.get('/detail', function(req, res){
    res.send("Name:Nuttapong Sansing <br/>Login Date:July 30,2017")
    })

app.listen(9999, function () {
    console.log("Server is running on PORT 9999")
})

// let http = require('http');
// let url = require('url');
// http.createServer(function (req, res) 
// {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     /*Use the url module to turn the querystring into an object:*/
//     var q = url.parse(req.url, true).query;
//     /*Return the year and month from the query object:*/
//     var txt ="Name:"+ q.Name  +"<br/> Login Date:" + q.month + " "+ q.date + ", " + q.year;
//     res.end(txt);
// }).listen(9999);