status = "";
objects = [];


function setup(){
c1 = createCanvas(550, 470);
c1.center();
vid.hide();

}

function preload(){
vid = createVideo("video.mp4");

}

function draw(){
image (vid, 0, 0, 550, 470);

if (status != ""){
myModel.detect(vid, gotResult);
for (i=0;i<objects.length;i++){
document.getElementById("status_val").innerHTML = "Objects Detected";
document.getElementById("number_val").innerHTML = objects.length;
fill ("white");
acc = floor(objects[i].confidence * 100);
text (objects[i].label + " " + acc+ "%", objects[i].x+ 10, objects[i].y+ 20);
noFill();
stroke ("white");
strokeWeight(2);
rect (objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}

}

}

function gotResult(error, results){
if (error){
console.error(error);
}

else{
console.log(results);
objects = results;}}

function start(){
myModel = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status_val").innerHTML = "Detecting Objects";
}

function modelLoaded(){
console.log("Model has Loaded!");
status = true;
vid.loop();
vid.speed(1);
vid.volume(0);
}