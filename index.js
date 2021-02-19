// Write your solution in this file!

// declare customerName to be bob in global scope
//       ✓ returns the customerName

var customerName = "bob"

function upperCaseCustomerName() {
	// console.log(customerName.toUpperCase());
	customerName = customerName.toUpperCase();
};

function setBestCustomer() {
	bestCustomer = "not bob"
};

function overwriteBestCustomer() {
	bestCustomer = "maybe bob"
};

const leastFavoriteCustomer = "Jim";

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = "not jim or bob"
};