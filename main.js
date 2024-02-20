function setup() {
    canvas = createCanvas(1080, 1080);
    canvas.center();
    background("cornslik");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function preload() {
    clasifier = ml5.imageClassifier("DoodleNet");
}

function draw() {
    strokeWeight(10);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmoouseY, mouseX, mouseY);
    }
}

function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML = "etiqueta: " + results[0].label;
    document.getElementById('confidence').innerHTML = "precicion: " + Math.round(results[0].confidence * 100) +"%";
    utterThis = new SpeechSynthesisUtterance(results[0].label); synth.speak(utterThis);
    
}

function clearCanvas() {
    background("cornslik");
}