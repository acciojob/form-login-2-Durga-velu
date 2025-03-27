//your JS code here. If required.

let firstName=document.getElementById("fNAME")
let lastName=document.getElementById("lastNAME")
let phoneNumber=document.getElementById("phoneNum")
let email=document.getElementById("emailId")

document.getElementById("submit").addEventListener("click",()=>{


window.alert(`First Name: ${firstName.value} Last Name: ${lastName.value} Phone Number: ${phoneNumber.value} Email ID: ${email.value}`)


})