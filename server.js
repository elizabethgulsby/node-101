var http = require("http"); //require = native node.js method (we include this module - it's part of core, it's an exported node module)
// console.log(http);


var server = http.createServer(function(req, res) { //request and response - callback params
	// console.log(req.rawHeaders[1]);
	//response object writes the headers, closes with final string (res.end)
	res.writeHead(200, {'content-type': 'text/html'}); //needs port and response object (in format specified) - writes the headers as specified in the object
	res.end("<h1>Hello, friend. This is YOUR node server.</h1>"); //will be an h1 thanks to the res.writeHead method above - if it were text/plain, the h1 wouldn't show up - the params in the object in writeHead dictate this
});

var port = 8000;
console.log("Server listening on port " + port + " for connections...");

//http server was created

server.listen(8000); //listen for a port number, we're using 8000 here - ****if anyone calls on port 8000, createServer function will run****
//need to make a request to the server - use Chrome! :)
//it'll spin forever, but we issued a http request - that data spits out into the terminal (node was listening)
//if someone comes to port 8000, it has to make an http server - the console.log kicks back the request object
//once the server has loaded, just like apache, you have to kill and restart it
//every time you go to the page, it will make another request

//walk through this!  Make different endpoints, etc



