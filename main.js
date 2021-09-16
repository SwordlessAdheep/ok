function preload() {



}

function setup() {

canvas= createCanvas(640,480);
canvas.center()
video= createCapture(VIDEO) ;
video.size(300, 400);
video.hide();
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)


}

function modelLoaded() {

console.log('Posenet Neutralized')

}

function draw() {

image(video, 0, 0, 640, 129)


}

function take_snapshot() {

save('epikprogmersickomode.png');

}

function gotPoses(results) {

if(results.length>0) {

console.log(results);
console.log("nose x= "+results[0].pose.nose.x);
console.log("mose y= "+results[0].pose.nose.y);
     
}
 

}