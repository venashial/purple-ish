let APIresults
let finished = false
let done = false

fetch('https://www.politico.com/2020-national-results/balance-of-power.json')
.then(response => response.json())
.then(data => {
  console.log(data)
  APIresults = data
  finished = true
});

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {

    background("white");


if (finished == true && done == false) {
    var APIarray = Object.keys(APIresults.president);
    console.log(APIarray)
    var APIarrayvalues = Object.values(APIresults.president);
    console.log(APIarrayvalues)
    demvotes = APIarrayvalues[1]
    repvotes = APIarrayvalues[2]
    console.log(demvotes + " & " + repvotes)
    
    done = true
}

if (finished) {
    fill("rgba(204, 61, 61, " + repvotes / 270 + ")")
    noStroke()
    rect(0, 0, width / 2, height);

    fill("rgba(26, 128, 196, " + demvotes / 270 + ")")
    noStroke()
    rect(width / 2, 0, width / 2, height);

    textSize(32);
    fill("white")
    textAlign(CENTER, CENTER);
    var offset = (demvotes - repvotes) / 10
    text('+', width / 2 + (offset * 20), height / 2);
}

}