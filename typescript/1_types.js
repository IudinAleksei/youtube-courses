var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello TS';
var numberArray = [1, 1, 3, 5, 8, 13];
var numberArray2 = [1, 1, 3, 5, 8, 13];
var words = ['Hello', 'TS'];
//Tuple
var contact = ['Aleksei', 99999999];
//Any
var variable = 42;
variable = 'New String';
variable = [];
//=====
function sayMayName(name) {
    console.log(name);
}
//Never
function throwError(message) {
    throw new Error(message);
}
var login = 'admin';
var id1 = 1234;
var id2 = '1234';
