// Include the http module. It's part of core, so no npm install needed

var http = require("http");
// Include the fs module.  FS = file system.  It is part of core. (Look up core - what does this mean?)
var fs = require("fs"); //can console.log this to see what's inside


function renderHomePage(req, res) {
	res.writeHead(200, {"content-type": "text/html"});
	var theHomePageHTML = fs.readFileSync('homePage.html');  //FILES ARE NOT BEING SERVED!  Storing what's in the file inside the variable - read the contents into a variable and then sent the contents along the http request
	res.end(theHomePageHTML);


	// The manual way without FS below
	//someone came to the home page!  Give them the homepage content
	// res.write('<h1>This is the home page.</h1>');
	// res.write('<p>I am very proud of my node routing ability.</p>')
	// res.write('<p>I made a page in node.  So there..</p>')
	// res.end();
}

// Set up an http server and store it in the server var
// The callback will run anytime someone hits the port - the server is listening to

var server = http.createServer((req, res)=>{
    // res.end will close the connection so the browser knows we are done
    //this function is run every time someone makes an HTTP request to this server
    console.log('Someone connected to our server');
    // The url requested is in the req object, url property
    console.log(req.url);
    // res.end('Sanity Check')

    if (req.url ==='/') {
    	// cut and put in a function called renderHomePage();
    	renderHomePage(req, res);
    }
    else if (req.url === '/logo.png') { //separate HTTP request
    	// the request is for the image. Serve it up.
    	var img = fs.readFileSync('logo.png'); //there are no files being sent back, only http - we're reading what's inside the file and sending it back
    	res.writeHead(200, {"content-type": "image/png"});
    	res.end(img);
    }
    else {
    	res.writeHead(404, {"content-type": "text/html"});
    	res.end("Sorry, this page does not exist.");
    }
});


// Tell the server we created to listen to port 8001

server.listen(8001);
console.log("I am the server and I am listening to port 8001")
//we put this afterwards so we don't console.log if there is an error on line 16