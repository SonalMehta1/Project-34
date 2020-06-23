var canvas;
var drawing=[]
var currentPath=[];

function setup() {
    canvas = createCanvas(600, 600);
    canvas.mousePressed(startPath);  
   
}
function draw() {
    background(100);
    stroke(255)
    noFill();
    strokeWeight(6);

    for(var i=0;i<drawing.length;i++){
        path=drawing[i];
        beginShape();
        for(var j=0;j<path.length;j++){
         vertex(path[j].x,path[j].y);
        }
        endShape();
    }  
}

function startPath(){
     currentPath=[];
    drawing.push(currentPath);
}

function mouseDragged(){
    var point={
        x:mouseX,
        y:mouseY
    }  
    currentPath.push(point);
}


