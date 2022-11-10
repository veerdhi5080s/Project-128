song="";
song1="";
function preload(){
    song=loadSound("music.mp3");
    song1=loadSound("music2.mp3");
}

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(result){
    if(result.length>0);{
        console.log(result);

        rightWristX=result[0].pose.rightWrist.x;
        rightWristY=result[0].pose.rightWrist.y;

        leftWristX=result[0].pose.leftWrist.x;
        leftWristY=result[0].pose.leftWrist.y;
    }
}

