let bg;
var score;
var time = 0;
var j = 0;
function setup() {
  
  createCanvas(800, 500);
  stroke(255,0,100);
  strokeWeight(2);
  fillNow = false;
  
  var config = {
    apiKey: "AIzaSyDubnu0IrW-QXclNcFNc1b0zzziEhtH7xQ",
  authDomain: "i-lab-siccors.firebaseapp.com",
  databaseURL: "https://i-lab-siccors-default-rtdb.firebaseio.com",
  projectId: "i-lab-siccors",
  storageBucket: "i-lab-siccors.appspot.com",
  messagingSenderId: "672254140311",
    }
  firebase.initializeApp(config); 
  database = firebase.database();
  
  
}

function draw() {
  
  var ref = database.ref("clicks");
  ref.on('value', gotData, errData);
  
  background(255,255,255);
  console.log("score: " + score);
  for (let i = height; i>height-score; i--){
    line(0,i,width,i);
  }
  
  if(fillNow){
   
    deltaT = millis()-time;
    
  //   for(let i = height-score; i>(height-score)/2;i--){
  //         line(0,i,width,i);     
  // }
    
    if(deltaT > random(0,200) ){
      j=j+1;
      time = millis();
      
  }
    for(let i = height-score; i>(height-score)-j;i--){
          line(0,i,width,i);  
          
    }
    
  //   if(deltaT > 400){
  //     for(let i = 200; i>(height-score)/8;i--){
  //         line(0,i,width,i);     
  // }
  //   }
  }
}

function mousePressed(){
  if(fillNow == false){
    time = millis();
  }
  fillNow = true;
}



function gotData (data) {
  console.log("hello");
  console.log(data.val());
 score = data.val();
  score = map(score, 0,70, 0, height)
//   	var keys = Object.keys(scores);
//   	console.log(keys);
  
// 	for (var i = 0; i < keys.length; i++) {
// 		var k = keys[i];
// 	  	var submittedScore = scores[k].score;
// 	  	var submittedName = scores[k].name;
// 	  	console.log("Key: " + k + "   Score: " + submittedScore + "   Name: " + submittedName);
// 	}
}

function errData(err) {
	console.log('Error!');
  	console.log(err);
}
