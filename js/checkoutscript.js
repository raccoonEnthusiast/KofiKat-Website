//Multi Step Form
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

//Buttons
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
//var back2 = document.getElementById("back2");
var exit = document.getElementById("exit");

var progressbar = document.getElementById("progressbar");

//Contact Details Values
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const phone = document.getElementById('telephone');
const email = document.getElementById('email');

//Payment Details Values
const cardnum = document.getElementById('cardnum');
const nameoncard = document.getElementById('nameoncard');
const cvc = document.getElementById('cvc');

//Contact Details Validation
next1.onclick = function(){

    const fnameVal = firstname.value.trim();
    var fnameSuccess = false;

    const lnameVal = lastname.value.trim();
    var lnameSuccess = false;

    const phoneVal = phone.value.trim();
    var phoneSuccess = false;

    const emailVal = email.value.trim();
    var emailSuccess = false;

    if(fnameVal === ''){
        setErrorFor(firstname, 'First name cannot be blank');
    } else if (!isRealName(fnameVal)) {
        setErrorFor(firstname, 'Invalid First Name')
    } else {
        setSuccessFor(firstname);
        fnameSuccess = true;
    }

    if(lnameVal === ''){
        setErrorFor(lastname, 'Last name cannot be blank');
    } else if (!isRealName(lnameVal)) {
        setErrorFor(lastname, "Invalid Last Name")
    } else {
        setSuccessFor(lastname);
        lnameSuccess = true;
    }

    if(phoneVal === ''){
        setErrorFor(phone, 'Phone cannot be blank');
    } else if (!isPhone(phoneVal)) {
        setErrorFor(phone, 'Invalid phone format');
    } else {
        setSuccessFor(phone);
        phoneSuccess = true;
    }

    if(emailVal === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailVal)){
        setErrorFor(email, 'Not a valid email');
    }else {
        setSuccessFor(email);
        emailSuccess = true;
    }

    // Allows user to move to the next page when all inputs are valid
    if(fnameSuccess === true && lnameSuccess === true
        && phoneSuccess === true && emailSuccess == true){
        form1.style.left = "-450px";
        form2.style.left = "40px";
        progressbar.style.width = "240px";
    } else {
        return;
    }
        
}

//Payment Details Validation

next2.onclick = function(){

    const cardnumVal = cardnum.value.trim();
    var cardnumSuccess = false;

    const nameoncardVal = nameoncard.value.trim();
    var cnameSuccess = false;

    const cvcVal = cvc.value.trim();
    var cvcSuccess = false;

    if(cardnumVal === ''){
        setErrorFor(cardnum, 'Card Number cannot be blank');
    } else if (!isCardNum(cardnumVal)) {
        setErrorFor(cardnum, 'Invalid card number');
    } else {
        setSuccessFor(cardnum);
        cardnumSuccess = true;
    }

    if(nameoncardVal === ''){
        setErrorFor(nameoncard, 'Name On Card cannot be blank');
    } else if(!isNameOnCard(nameoncardVal)){
        setErrorFor(nameoncard, "Name On Card not valid")
    } else {
        setSuccessFor(nameoncard);
        cnameSuccess = true;
    }

    if(cvcVal === ''){
        setErrorFor(cvc, 'CVC Number cannot be blank');
    } else if (!isCVC(cvcVal)) {
        setErrorFor(cvc, 'Invalid CVC number');
    } else {
        setSuccessFor(cvc);
        cvcSuccess = true;
    }

    if(cardnumSuccess === true && cnameSuccess === true
    && cvcSuccess == true){
        form2.style.left = "-450px";
        form3.style.left = "40px";
        progressbar.style.width = "360px";
    }
}

//Apply error styling to invalid form
//Take a form and error message as arguments
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

//Apply success styling to a validated form
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//Move back to customer details 
back1.onclick = function(){
    form1.style.left = "40px";
    form2.style.left = "450px";
    progressbar.style.width = "120px";
}

//My team owes me a pizza by the end of this :^)



//Exit form
exit.onclick = function(){
    window.location.href = 'main.html';
}

//Regex Patterns

//Name Regex (Tests for names including hyphenated ones)
// ()* around the second [A-Za-z][A-Za-z\'\-] allows it to occur 0 or more times for optionaility
function isRealName(name) {
    return /^[A-ZÀ-ÿa-z][A-ZÀ-ÿa-z\'\-]+([\ A-ZÀ-ÿa-z][A-ZÀ-ÿa-z\'\-]+)*/.test(name);
}

//Phone Numbers
// [\+]? -> match between 0 or 1 of \ or + signs
// [-\s\.]? -> match between 0 or 1 of characters in the brackets to validate ###-###-#### numbers
function isPhone(phone) {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
}

//Email
// [^@ \\t\\r\\n] matches for anything other than @, space, tab, new lines or repeating non-whitespace characters.
function isEmail(email) {
	return /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email);
}

//Visa Card Number (Card must start with 4)
function isCardNum(cardnum) {
    return /^4[0-9]{12}(?:[0-9]{3})?$/.test(cardnum);
}

//Name On Card Validation
//Match any character from A-Z including special characters, space, -, ', .
function isNameOnCard(nameoncard) {
    return /([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(nameoncard);
}

//CVC
//Check for a 3-4 digit number
function isCVC(cvc) {
    return /^[0-9]{3,4}$/.test(cvc);
}
