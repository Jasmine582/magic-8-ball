$(document).ready(function(){

var magic8Ball={};

 magic8Ball.listOfAnswers=["It is certain", "It is decidedly so", "Without a doubt", "Yes-definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very Doubtful"];
	
$("#answer").hide();
	
  
magic8Ball.askQuestion =
function(question) {

var randomNumber = Math.random();
var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
var randomIndex = Math.floor(randomNumberForListOfAnswers);
var answer= this.listOfAnswers[randomIndex];

$("#answer").text(answer);
$("#8ball").effect("shake");

console.log(question);
console.log(answer);

	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
 
};


var onClick = function () {
  	$("#answer").hide();
    
  var question = prompt("What would you like to know?");
  

   
	magic8Ball.askQuestion(question);
	$("#answer").fadeIn(4000);
 
	setTimeout(
    function() {
        console.log("What would you like to know?");
    }, 100);
    
};
	
	$("#questionButton").click(onClick);
});


