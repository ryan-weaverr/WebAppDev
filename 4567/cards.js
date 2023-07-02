// Define the functions
function printCard() {
  var nameLine = "<strong>Name: </strong>" + this.name + "<br>";
  var emailLine = "<strong>Email: </strong>" + this.email + "<br>";
  var addressLine = "<strong>Address: </strong>" + this.address + "<br>";
  var phoneLine = "<strong>Phone: </strong>" + this.phone + "<br>";
  var birthdateLine = "<strong>Birthdate: </strong>" + this.birthdate + "<hr>";
  document.write(nameLine, emailLine, addressLine, phoneLine, birthdateLine);
}

function Card(name, email, address, phone, birthdate) {
  this.name = name;
  this.email = email;
  this.address = address;
  this.phone = phone;
  this.birthdate = birthdate;
  this.printCard = printCard;
}

var sue = new Card(
  "Sue Suthers",
  "sue@suthers.com",
  "123 Elm Street, Yourtown ST 99999",
  "555-555-9876",
  "6/6/1957"
);
var fred = new Card(
  "Fred Fanboy",
  "fred@fanboy.com",
  "233 Oak Lane, Sometown ST 99399",
  "555-555-4444",
  "9/15/1982"
);
var jimbo = new Card(
  "Jimbo Jones",
  "jimbo@jones.com",
  "233 Walnut Circle, Anotherville ST 88999",
  "555-555-1344",
  "3/21/1995"
);

sue.printCard();
fred.printCard();
jimbo.printCard();