const app=document.getElementById("app");

function showHTML() {
    app.innerHTML = /*HTML*/ `
        <div>Is this an email address?</div>
        <input type="text" onchange="checkForEmail(this.value)">
        <div id="emailOrNot"></div>
    `
}
showHTML();

function checkForEmail(inputString) {
    let emailOrNot = "This is not an email address.";
    let atIndex = inputString.indexOf("@");
    if (inputString.includes("@") && !inputString.includes(" ") && inputString.indexOf(".", atIndex) > atIndex) {
        emailOrNot = "This is an email address!"
    }
    document.getElementById("emailOrNot").innerHTML = emailOrNot;
}