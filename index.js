var read=require('readline-sync');

var username=read.question("Can I have your name? ")
console.log("Welcome "+ username)
score=0
function quiz(ques,ans){
  userAnswer=read.question(ques)
  if (userAnswer.toLowerCase()==ans.toLowerCase()){
    console.log("Right")
    score=score+1
  }
  else{
    console.log("Wrong")
  }
  console.log("Your current score is "+score)
}
question=[{
  ques:"Favourite color ",
  ans:"Lilac"},
{
  ques:"Favourite food ",
  ans:"Paneer",
},
{
  ques:"Favourite place ",
  ans:"Dalhousie",
},
{
  ques:"Currently Staying at ",
  ans:"Airoli",
},
{
  ques:"Favourite activity ",
  ans:"Sleep",
}]
for(i=0;i<question.length;i++){
  curr=question[i]
  quiz(curr.ques,curr.ans)
}
console.log("Final score is "+score)