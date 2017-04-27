var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct=0, name = 0; 
//setting variables

//Set array to hold answers
var quizAnswers = [];

var questions=[
    {
	    question: "How many people live in Russia?",//question
	    correctAnswer: "200.7 million",//right answer to question
        
        //list of multiple choice answers
	    answer0: "200.7 million",
	    answer1: "140 million",
	    answer2: "148 million",
        answer3: "366 million",
	},
    {
	    question: "When did World War Two end?",//question
	    correctAnswer: "1945",//right answer to question
        
        //list of multiple choice answers
	    answer0: "1942",
	    answer1: "1946",
	    answer2: "1944",
        answer3: "1945"
	},
    {
	    question: "How much did the US goverment spend on it defense budget last year?",//question
	    correctAnswer: "600 billion",//right answer to question
        
        //list of multiple choice answers
	    answer0: "400 billion",
	    answer1: "600 billion",
	    answer2: "479 billion",
        answer3:  "598 billion",
	},
    {
	    question: "How many submarines have North Korea?",//question
	    correctAnswer: "76",//right answer to question
        
        //list of multiple choice answers
	    answer0: "56",
	    answer1: "65",
	    answer2: "23",
        answer3: "76"
	},
	{
	    question:"How many tanks have North Korea?" ,//question
	    correctAnswer: "5025",//right answer to question
        
        //list of multiple choice answers
	    answer0: "4500",
	    answer1: "3400",
	    answer2: "4344",
        answer3: "5025"
	},
	{
	    question: "How many fighterjets does North Korea have?",//question
	    correctAnswer: "458",//right answer to question
        
        //list of multiple choice answers
	    answer0: "453",
	    answer1: "356",
	    answer2: "458",
        answer3: "495"
	},
	{
	    question: "How much did North Korea spend on its defense budget last year?",//question
	    correctAnswer: "7.5 billion",//right answer to question
        
        //list of multiple choice answers
	    answer0: "5.5 billion",
	    answer1: "7.5 billion", 
	    answer2: "6.8 billion",
        answer3:  "7.9 billion" ,
	},
	{
	    question: "How many soliders did the German Army have during World War Two",//question
	    correctAnswer: "13 million",//right answer to question
        
        //list of multiple choice answers
	    answer0: "7 million",
	    answer1: "5 million",
	    answer2: "17 million",
        answer3: "13 million"
	},
	{
	    question: "What is the square land area of North Korea?",//question
	    correctAnswer: "120,000 Km",//right answer to question
        
        //list of multiple choice answers
	    answer0: "60,100 Km",
	    answer1: "90,000 Km",
	    answer2: "54,000 Km",
        answer3: "120,000 Km"
	},
	{
	    question: "Where did the Battle of the Bulge take place during World War Two?" ,//question
	    correctAnswer: "Belgium, France, and Luxembourg",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Belgium, France, and Luxembourg",
	    answer1: "France, Germany and Italy",
	    answer2: "French border with Germany", 
        answer3:  "Around Berlin",
	},
	{
	    question: "How many soliders on both sides lost their lives on the Normandy beaches during World War 2?" ,//question
	    correctAnswer: "425,000",//right answer to question
        
        //list of multiple choice answers
	    answer0: "300,643",
	    answer1: "268,950",
	    answer2: "325,983",
        answer3: "425,000",
	},
	{
	    question: "Out of the 40,000 sailors that served on U-boats during World War Two, how many never returned home?",//question
	    correctAnswer: "30,000",//right answer to question
        
        //list of multiple choice answers
	    answer0: "30,000",
	    answer1: "23,000",
	    answer2: "12,000",
        answer3: "23,978"
	},
	{
	    question: "What was the only country that Germany declared war on during World War Two?",//question
	    correctAnswer: "USA",//right answer to question
        
        //list of multiple choice answers
	    answer0: "USA",
	    answer1: "France",
	    answer2: "Italy",
        answer3: "England"
	},
	{
	    question: "How many tonnes of bombs did the allies drop between 1939 and 1945?",//question
	    correctAnswer: "3.5 million", //right answer to question
        
        //list of multiple choice answers
	    answer0: "2 million",
	    answer1: "1.6 million",
	    answer2: "3.5 million", 
        answer3:  "2.7 million",
	},
	{
	    question: "How many Generals did Hitler execute during World War Two?",//question
	    correctAnswer: "84",//right answer to question
        
        //list of multiple choice answers
	    answer0: "65",
	    answer1: "84",
	    answer2: "54",
        answer3: "127"
	},
	{
	    question: "How much did the US defense budget increase from 1940 to 1945?",//question
	    correctAnswer: "57.9 billion", //right answer to question
        
        //list of multiple choice answers
	    answer0: "25 billion", 
	    answer1: "67.5 billion",
	    answer2:  "57.9 billion", 
        answer3: "29.5 billion",
	},
	{
	    question: "How many machine guns did the USA build during World War Two?",//question
	    correctAnswer: "3 million",//right answer to question
        
        //list of multiple choice answers
	    answer0: "2 million",
	    answer1: "1.6 million",
	    answer2: "2.8 million",
        answer3: "3 million",
	},
	{
	    question:"How many tanks did the USA make during World War Two?",//question
	    correctAnswer: "89,000",//right answer to question
        
        //list of multiple choice answers
	    answer0: "65,968",
	    answer1: "89,000",
	    answer2: "76,000",
        answer3: "23,890",
	},
	{
	    question: "How many people in total lost their lives during World War Two?",//question
	    correctAnswer: "60 billion",//right answer to question
        
        //list of multiple choice answers
	    answer0: "45 billion",
	    answer1: "56 billion",
	    answer2: "60 billion",
        answer3: "39 billion", 
	},
	{
	    question: "How many Irish people died during World War Two?",//question
	    correctAnswer: "Peter Beardsley",//right answer to question
        
        //list of multiple choice answers
	    answer0: "3,600",
	    answer1: "2,777",
	    answer2: "1,500",
        answer3: "700",
	}
];

//function which takes an array and shuffles its contents
//used to get different order of multiple choice answers every time quiz is taken
function shuffleArray(array) 
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}

//Above I have set my questions, 3 multi-choice answers and the answers in an multi-dimensional array, zero indexed
function _(x)
{ 
    return document.getElementById(x);
} 
//Setting underscore equal to document.getElementById
function printCert() {
    window.print();
}	
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}



function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length)//If position is greater or equal to the length of question, ie 20
    { 
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2><button onclick='printCert()'>Print Cert</button>";//Print # correct out of 20
        _("test_status").innerHTML += "  Thank you for completing the quiz";//Print "thank you .... "
        pos = 0;
        correct = 0;
        return false; 
    }

    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    //Print questions and increment by one each iteration

    var bar=document.getElementById("progressBar");//Progress bar value
    bar.value = (pos+1);//Progress bar increments as we go through questions, starts at 1

    //console.log("Pos value is " + pos);//write this to console

    //push all potential answers to the quizAnswers array
    quizAnswers[0] = questions[pos].answer0;
    quizAnswers[1] = questions[pos].answer1;
    quizAnswers[2] = questions[pos].answer2;
    quizAnswers[3] = questions[pos].answer3;
    
    console.log("Unshuffled answers" + quizAnswers);
    
    //Shuffle the answers
    var shuffledAnswers = shuffleArray(quizAnswers);
    
    console.log("Shuffled answers" + shuffledAnswers);
    
    question = questions[pos].question;//question is in position 0 in the array(zero indexed)
    choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
    choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
    choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
    choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array
    
    test.innerHTML = "<h3>"+question+"</h3>"; //questions are written in h3 size
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"'> "+choiceD+"<br><br>"; //Radio button
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";//on clicking submit button, it checks your answers
}
		
		
function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); //Creates an array
    for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
    { 
        if(choices[i].checked) //if a choice is checked
        { 
            choice = choices[i].value; //Take the value of that choice and put it into choice
        }
    } 
    console.log("Chosen answer is " + choice);
    if(choice == questions[pos].correctAnswer)//If the value of choices is equal to the answer
    { 
        alert('Correct!');//Alert correct
        correct++;//Increment your correct answers by one
    }
    else//or else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer);
    } 
    pos++; //Increment position by one ie go on to the next question
    
    renderQuestion(); //go to render question again
}

//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);


window.onload = function() {
document.getElementById('timer').innerHTML =
  05 + ":" + 00;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){alert('Times Up')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}
}

