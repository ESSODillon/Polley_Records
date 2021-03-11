const Controls = {
    home : null,
    homeSpan : null,

    about : null,
    aboutSpan : null,

    connect : null,
    connectSpan : null,

    tech : null,
    techSpan : null,

    shout : null,
    shoutSpan : null,
}

function start() {
    Controls.home = document.getElementById('home');
    Controls.homeSpan = document.getElementById('homeSpan');
    Controls.home.setAttribute("data-color", "span");
    Controls.home.addEventListener("click", spanHighlight);

    Controls.about = document.getElementById('about');
    Controls.aboutSpan = document.getElementById('aboutSpan');

    Controls.connect = document.getElementById('connect');
    Controls.connectSpan = document.getElementById('connectSpan');

    Controls.tech = document.getElementById('tech');
    Controls.techSpan = document.getElementById('techSpan');

    Controls.shout = document.getElementById('shout');
    Controls.shoutSpan = document.getElementById('shoutSpan');
}

function spanHighlight (event) {

    let spanChange = event.target.getAttribute("data-color");

    if (spanChange == span) {
        homeSpan.style.backgroundColor = "red";
        console.log("You did it!");
    }


}

// This function detects when a div has been clicked
function divClick(event) {
    // Gets the data-color attribute and assigns it to a variable
    let colorChange = event.target.getAttribute("data-color");
    // If the target clicked is a block then change its background color to random color
    if (colorChange == "block") {
        event.target.style.backgroundColor = randomColor();
    }
}