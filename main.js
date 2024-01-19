var noseX=0;
var noseY=0;
mustache="";
function preload()
{
mustache=loadImage("https://i.postimg.cc/ZnRGzz04/mustache-removebg-preview.png");
}

function setup()
{
  canvas=createCanvas(500,500);
  canvas.center();
  video= createCapture(VIDEO);
  video.size(500,500);
  video.hide();
  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on("pose", gotPoses);
}

function modelLoaded()
{
  console.log("Posenet is initialized");
}

function draw()
{
image(video,0,0,500,500);
image(mustache,noseX-28,noseY-3,60,50);
}

function take_snapshot()
{
    save('Arnavsfilteredimage.png');
}

function gotPoses(results)
{
  if(results.length>0)
  {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX="+noseX);
    console.log("noseY="+noseY);
  }
}

