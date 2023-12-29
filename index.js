function getDOB() {
    let data = document.getElementById("inputDob").value;

    let dob = new Date(data);
    let day = dob.getDate();
    let month = dob.getMonth();
    let year = dob.getFullYear();

    let now = new Date(document.getElementById("cdate").value);
    let yearDiff = now.getFullYear() - year;
    let monthDiff = now.getMonth() - month;
    let dateDiff = now.getDate() - day;

    if (yearDiff < 0) {
        document.getElementById("currentAge").innerHTML = "Invalid Date";
        return; // Exit the function if the date is invalid
    }

    if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
        yearDiff--; // Subtract 1 year if the birthday hasn't occurred yet
        if (monthDiff < 0) {
            monthDiff = 12 + monthDiff; // Adjust months difference
        }
    }

    if (dateDiff < 0) {
        let prevMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        dateDiff = Math.floor((now - prevMonth) / (1000 * 60 * 60 * 24)); // Calculate days difference
        monthDiff--; // Adjust months difference
    }

    document.getElementById("currentAge").innerHTML =
        "Your current Age is " + yearDiff + " years " +
        monthDiff + " months " + dateDiff + " days";
}

// Rest of the code remains the same...
