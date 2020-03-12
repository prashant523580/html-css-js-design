var date = new Date();

function BodyLoad() {
    var lastDateofMonth = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();
    var previousDateofMonth = new Date(
        date.getFullYear(),
        date.getMonth(), 0
    ).getDate();
    date.setDate(1);
    var day = date.getDay();
    console.log(day);
    // console.log(lastDateofMonth);
    // console.log(date.getMonth());
    var today = new Date();
    console.log(today);
    var months = [
        "January",
        "Feburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    // console.log(months[date.getMonth()]); 
    document.getElementById("date").innerHTML = date.getFullYear();
    document.getElementById("month").innerHTML = months[date.getMonth()];

    var cells = "<ul>";
    for (var x = day; x > 0; x--) {
        cells += "<li class='previous-date'>" + (previousDateofMonth - x + 1) + "</li>";
    }


    for (var i = 1; i <= lastDateofMonth; i++) {
        if (i === today.getDate() && date.getFullYear() == today.getFullYear() && today.getMonth() === date.getMonth()) {
            cells += "<li class='active'>" + i + "</li>";
        } else {
            cells += "<li>" + i + "</li>";
        }
    }
    document.getElementsByClassName("days")[0].innerHTML = cells;
}

function changeMonth(change) {
    console.log(change);
    if (change === "next") {
        date.setMonth(date.getMonth() + 1);

    } else {
        date.setMonth(date.getMonth() - 1);

    }
    BodyLoad();
}