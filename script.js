function checkPin() {
    var enteredPin = document.getElementById("pin").value;

    if (enteredPin === "bunny") {
        document.getElementById("pinContainer").classList.add("hidden");
        document.getElementById("birthdayContainer").classList.remove("hidden");
    } else {
        alert("Incorrect PIN. Please try again.");
    }
}
