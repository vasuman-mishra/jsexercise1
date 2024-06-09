function calculateYearOfBirth(age) {
    var currentYear = new Date().getFullYear();
    return currentYear - age;
}

function displayUserInfo() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var hometown = document.getElementById("hometown").value;

    if (!name || !age || !hometown) {
        alert("Please fill in all fields.");
        return false;
    }

    var yearOfBirth = calculateYearOfBirth(age);


    document.write("<p>Name: " + name + "</p>");
    document.write("<p>Year of Birth: " + yearOfBirth + "</p>");
    document.write("<p><a href='https://www.google.com/search?q=" + encodeURIComponent(hometown) + "' target='_blank'>Search for " + hometown + "</a></p>");

    return false;  // Prevent form submission
}