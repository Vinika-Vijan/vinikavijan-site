var readlineSync=require("readline-sync");
var score1=0;
var userName=readlineSync.question("whats your name? ");
console.log("welcome " + userName + " to DO YOU know VINIKA? ");
function play(question,answer)
{
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer)
  {
    console.log("right! ");
    score1++;
  }
  else
  {
    console.log("wrong!");
    score1--;
  }
  console.log("score1 is: " + score1);
  console.log("----------------");
}
var questions=[{
  question:"whats my nick name? ",
  answer:"Vini"
},{
  question:"i am in which college? ",
  answer:"CEC"
},{
  question:"whats my roomie name ? ",
  answer:"Pinky"
},{
  question:"i have a long hair or short hair? ",
  answer:"long hair"
},{
  question:"beach or mountains? ",
  answer:"beach"
},{
  question:"coffee or tea? ",
  answer:"coffee"
}
];

for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("YAYYY! You score1d " + score1);


//for(var i=0;i<questions.length;i++)

//{
  //var currentQuestion=questions[i];
  //play(currentQuestion.question,currentQuestion.answer)
//}
//console.log("YAYYY! You score1d " + score1);