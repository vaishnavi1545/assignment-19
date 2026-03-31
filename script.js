function toggleBulb() {

    let bulb = document.getElementById("bulb");

    if (bulb.src.includes("bulboff")) {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
    }
    else {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif"
    }
}


function showPassword() {
    let pass = document.getElementById("password");

    if (pass.type === "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
}