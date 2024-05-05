function validateForm() {
var firstName = document.forms["registrationForm"]["First_Name"].value;
 var lastName = document.forms["registrationForm"]["Last_Name"].value;
 var email = document.forms["registrationForm"]["Email_Id"].value;
 var mobileNumber = document.forms["registrationForm"]["Mobile_Number"].value;
 if (firstName == "" || lastName == "" || email == "" || mobileNumber == "") {
 alert("Please fill in all required fields.");
 return false;
 }
 return true;
}