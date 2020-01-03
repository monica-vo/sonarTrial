let d;
let m;// as a number
let y; //four digits
let f;
let l;
let s;
let x;
let day;


const zellerAlgorithms = (d, m, y) => {
    let aday = document.getElementById("day").value;
    let amonth = document.getElementById("month").value;
    let ayear = document.getElementById("year").value;

    d = parseInt(aday)
    m = parseInt(amonth)
    y = parseInt(ayear)

    if (m < 3) {
        m = m + 12;
        y = y - 1;
    }
    else {
        f = Math.floor(y / 100)
        l = y - 100 * f
    }
    s = Math.floor(2.6 * m - 5.39) + Math.floor(l / 4) + Math.floor(f / 4) + d + l - 2 * f
    x = s - (7 * Math.floor(s / 7))
    console.log(x)
    // return x
}

const displayDay = () => {
    switch (x) {
        case 1:
            // alert("You were born on Monday");
            day = "Monday";
            break;
        case 2:
            // alert("You were born on Tuesday");
            day = "Tuesday";
            break;
        case 3:
            // alert("You were born on Wednesday");
            day = "Wednesday";

            break;
        case 4:
            // alert("You were born on Thursday");
            day = "Thursday";

            break;
        case 5:
            // alert("You were born on Friday");
            day = "Friday";

            break;
        case 6:
            // alert("You were born on Saturday");
            day = "Saturday";

            break;
        case 7:
            // alert("You were born on Sunday");
            day = "Sunday";
            break;
        default:
            day = "Wrong entry, try again"
    }

    // document.getElementById('birthday').innerHTML = day;
    console.log(day);
    document.querySelector("#birthday").innerHTML = day;
}


const myFunction = () => {
    zellerAlgorithms(d, m, y)
    displayDay();
    // alert(`the day is ${d} the month is ${m} the year is ${y}`)
}


