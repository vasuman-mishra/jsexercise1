function validateForm() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var yearOfBirth = document.getElementById("yearOfBirth").value;
    var email = document.getElementById("email").value;
    var terms = document.getElementById("terms").checked;



    if (!username || !password || !confirmPassword || !email) {
         window.alert("Username, password, confirm password, and email are required.<br>");
    }

    if (password !== confirmPassword) {
        window.alert("Passwords do not match");
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        window.alert("Invalid email format");
    }

    if (!terms) {
        "You must agree to the terms and conditions to continue.";
    }

    var year = parseInt(yearOfBirth, 10);
    if (isNaN(year) || year < 1900 || year > 2000 || yearOfBirth.length !== 4) {
        window.alert("Year of birth must be between 1900 and 2000 and must be four digits long.");
    }

    return true;
}