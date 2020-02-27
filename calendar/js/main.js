var date = new Date();
// date.setDate(24);
console.log(date.getMonth());
var months = [
    "january",
    "feburary",
    "march",
    "may",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];
console.log(months[date.getMonth()]);
document.getElementById("date").innerHTML = date.toDateString() + " " + date.toTimeString();
document.getElementById("month").innerHTML = months[date.getMonth()];