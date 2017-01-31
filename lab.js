var http = require('http');
var fs = require('fs');

//renders the home page
function renderHomeContent(req, res) {
	res.writeHead(200, {"content-type": "text/html"});
	// res.write('<h1>HEY!</h1>')
	var theHomePage = fs.readFileSync('home.html');
	// res.end();
	res.end(theHomePage);
};

//renders a bad api path 
function badAPI(req,res) {
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID=";
	var request = http.get(weatherUrl, function(theResponse) {
		// console.log(theResponse.statusCode);
		if (theResponse.statusCode == 401) { //move this to weather?
			res.end("<h1>You need an API key!</h1>");
		}
	})
}

//renders a successful weather api call 
function APIsuccess(req,res) {
	var apikey = 'e312dbeb8840e51f92334498a261ca1d';
	var weatherUrl2 = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
	var weatherAsEnglish = '';
	var request2 = http.get(weatherUrl2, function(theResponse2) {
		theResponse2.on('data', function(chunkOfData) {
			weatherAsEnglish += chunkOfData;
		});
		theResponse2.on('end', () => {
			console.log(weatherAsEnglish);
		})
	})
}


var server = http.createServer(function(req, res) {
	console.log("Someone's here!");
	// console.log(req.url);
	// renderHomeContent(req, res);

	if (req.url === "/") {
		renderHomeContent(req, res);
	}
	else if (req.url === "/forbidden") {
		//render 403 page
		res.writeHead(403, {"content-type": "text/html"})
		res.end("<h1>No can do, chief.</h1>")
	}
	else if (req.url === "/weather") {
		badAPI(req, res);
	}
	else {
		// render custom 404 page
		res.writeHead(404, {"content-type": "text/html"});
		res.end('<h1>Bruh. No.</h1><p>Do it again.</p>');
	}
});

server.listen(8002);
console.log("I'm listening on port 8002!");