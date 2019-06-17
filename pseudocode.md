Timer starts as soon as you click the start button. If you click on the right answer then the game will display a correct or incorrect message depending on 

HTML psedudocode
1)create a div with an id of wrapper, then add the title of the game
2)create a second div with a subwrapper id, then create a button with the words "start" 
    -make sure the button is inside the subwrapper div and not in the wrapper div
3) close the initial wrapper div and add the jQuery tag and the  js tag 

JS
1)create a method to check if you propertly linked the js file with your html file 
    -use the click funtion to disapear the start button
2)create questions and asnwers you would like to display on your game, also get include the image to the gif you would like to display if the player answered right
    a)create an array with the questions and answers for your game (make sure you use name this variable something that will not confuse you).  
        i)the questions an asnwers will be the object of the array
        ii)for this section you can use the following objects: question, answers, correctAnswers, image
3)create a game object with the following properties: questions, currentQuestion, counter(<!--here you are setting up how much time you want the player to have in order to answer a question-->), correct(<!--keeps track of correct answers-->), incorrect(<!--keeps track of incorrect answers the player makes-->), also include the following methods: a countdown method, a load question method, a next question method, a timeup method, a results method, a click method, an asnwered correctly method, an answeredIncorrectly method, and a reset method
    a)specific instructions 
        i)variable  variableName   equalsign    curlyBracketOpening     property        colon       string/number(related to what property you are using)       commaToseparateProperties   curlyBracketclosure
    b)method syntax: {nameOfMethod: function (){}}
4)Work on countdown method
    a)create a way to decrease the amount of time on the counter property
        i)you need to use the game dot property and include a decrement for that variable
    b)make sure the countdown method also decreases the time on the screen
        i)jQuery selector   dot     type of docto   (game dot property you are referring to)
            *the property you are referring will be the same as the jQuery selector, just think about what you are trying to change on the html file
    c)create an if statemnt to tell the game if the time has run out. You can use the game counter less than or equal to zero 
        i)console log the timeUp property to make sure it is working, but before work on the load up method
5)Work on loadQuestion  method
    a)create a way to reset the timer whenever a new question is loaded
        i) use timer and equal it to setInterval
        ii)inside the time interval create a way in which you are telling the code to run the game countdown function after every second or a thousand miliseconds*
            *you are going to lower the counter and post the counter to the page and it will also check if the counter is less than or equal to zero 
    b)post a new question to the page
        i)use a jQuery selector and choose the subwraper
        ii)then select the type of document you are using and open a pair of parenthesis
        iii)inside the parenthesis choose the html element to display the question and add the question property of the game variable and open a pair of brackets
        iv)on the brakets you will need to choose the appropiate object you want the code to select and close the braket
            *select the "game" function and add it with a period to the "currentQuestion and close the braket
        v)follow the closed braket by adding a dot and including the same property you used on 5.b.iii
        vi)then use the plus sign to close the html element you chose on 5.b.iii
    c)post all the answers on the page as buttons
        i)create a for loop that will keep going for as long as i is less than the amount of answers that there are, so less than four <!--i=0,i<question[game.Currentquestion].answers.length, i++-->. Then use the jQuery selector for the subrapper to append  the buttons
        i)inside the append parenthesis open a single quotation mark and use the button html element, give it a class of answer-button, an id of button-, close the single quotation mark
        ii) plus sign, include the answer of the current question <!--i-->"
        iii) plus sign and open a single quotation mark, open a single double quotation mark, include a string called data-name= <!--make sure you open a string by putting a single double quotation mark--> and close the single quotation mark
        iv) plus sign, question property <!--the question property starts with a single quotation bracket--> and open a pair of brackets <!--[Inside the brackets you will add the game dot currentQuestions]-->
        v) add a dot to include "answers" followed by the parameter of the answer of the current question
        vi)plus sign, open single quotation, close double quotation from 5.c.iii, close the button <!--'>'-->,close single quotation
        vi)plus sign <!--question-->, open braket, game dot currentQuestion, close braket, 
        vii)dot answers open braket, i, close braket
        viii)plus sign, close entire button <!--'</button>'--> *this will post our button to the page anytime that we have the load question function set.
            *data-name: stores data within an element
                *we are puttin the answer within the data element
            *we are storing the answer at i within this button
             

6)Work on  nextQuestion method
7)Work on timeUp method
8)Work on results method
9)Work on click method
10)Work on answeredCorrectly method
11)Work on answeredIncorrectly method
12)Work on reset method


 

 

