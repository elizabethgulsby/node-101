console.log("Hello, world!");

var dcClass = [
	"Sean",
	"Drew",
	"Daniel",
	"Kyle",
	"Rishi",
	"Liz",
	"Anna",
	"Ryan",
	"Casey",
	"Connie",
	"Sarah",
	"Andy",
	"Mason",
	"Paul",
	"Michael"
]

console.log(dcClass[3]); //Expecting: Kyle

dcClass.push("Rob");
dcClass.map((member, index) => {
	console.log(member, index);
})

console.log(this);