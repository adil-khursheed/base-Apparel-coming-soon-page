const invalidIcon = document.getElementById("invalid-icon");
const invalidMessage = document.getElementById("invalid-message");

function validateEmail() {
    let email = document.getElementById("email").value;

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        invalidMessage.innerHTML = "Please provide a valid email";
        invalidIcon.innerHTML = '<img src="images/icon-error.svg" alt="">';
        return false;
    }
    
    invalidMessage.innerHTML = "";
    invalidIcon.innerHTML = '';
    return true;
    
}