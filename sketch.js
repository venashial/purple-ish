let APIresults
let finished = false
let done = false

function GetElectionNumbers() {
fetch('https://www.politico.com/2020-national-results/balance-of-power.json')
.then(response => response.json())
.then(data => {
  console.log(data)
  APIresults = data
  finished = true
});
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    GetElectionNumbers()
}

window.setInterval(function(){
    GetElectionNumbers()
  }, 30000);

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
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

    var total_votes = demvotes + repvotes
    var demdifference = (demvotes - repvotes) / 2

    var rcolor = round(100 - demdifference)
    if (rcolor < 1) {rcolor = 1}
    var bcolor = round(100 + demdifference)
    if (bcolor < 1) {bcolor = 1}

    console.log(rcolor + " &  " + bcolor)

    fill("rgba(" + rcolor + ", " + 0 + ", " + bcolor + ", " + 1 + ")")
    noStroke()
    rect(0, 0, width, height);
}

}