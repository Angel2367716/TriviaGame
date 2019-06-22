Timer starts as soon as you click the start button. If you click on the right answer then the game will display a correct or incorrect message depending on 

HTML psedudocode
1)create a div with an id of wrapper, then add the title of the game ✅ 
2)create a second div with a subwrapper id, then create a button with the words "start" ✅ 
    -make sure the button is inside the subwrapper div and not in the wrapper div✅ 
3) close the initial wrapper div and add the jQuery tag and the  js tag ✅ 

JS 
1)create a method to check if you propertly linked the js file with your html file ✅
    a)use the click funtion to disapear the start button✅
    b)include a way to run the game function with the loadQuestion method
    c)create a way to tell the player if they got a question correct or incorrect after the button asnwer is being pressed <!--work here after completing 5.c.viii-->✅
        i)start with a jquery click event
            *the jquery selector will be document
            *the parameters for the on click event will be click, .answer-button, function(e)
            *inside the function write game dot clicked (e)
                *note: e is used to store an event. So if we are passing e onto this function and also passing e onto the click we are actually passing through the event. We are passing through what is being click <!--move to 9)click method-->

2)create questions and asnwers you would like to display on your game, also get include the image to the gif you would like to display if the player answered right ✅
    a)create an array with the questions and answers for your game (make sure you name this variable something that will not confuse you).  ✅
        i)the questions and asnwers will be the object of the array✅
        ii)for this section you can use the following objects: question, answers, correctAnswers, image✅
3)create a game object with the following properties: questions, currentQuestion, counter(<!--here you are setting up how much time you want the player to have in order to answer a question-->), correct(<!--keeps track of correct answers-->), incorrect(<!--keeps track of incorrect answers the player makes-->), also include the following methods: a countdown method, a load question method, a next question method, a timeup method, a results method, a click method, an asnwered correctly method, an answeredIncorrectly method, and a reset method✅
    a)specific instructions ✅
        i)variable  variableName   equalsign    curlyBracketOpening     property        colon       variable/number(related to what property you are using)       commaToseparateProperties   curlyBracketclosure
    b)method syntax: {nameOfMethod: function (){}}✅<!--you can put the method inside the variable game, that way you don't dry your code by repeating the method syntax (aka const game = {countdown: function(){},click:(){}, etc...};-->
4)Work on countdown method
    a)create a way to decrease the amount of time on the counter property✅
        i)you need to use the game dot property and include a decrement for that variable✅
    b)make sure the countdown method also decreases the time on the screen
        i)jQuery selector   dot     type of docto   (game dot property you are referring to)
            *the property you are referring will be the same as the jQuery selector, just think about what you are trying to change on the html file✅
    c)create an if statemnt to tell the game if the time has run out. You can use the game counter less than or equal to zero ✅
        <!--*****************-->
        i)console log the timeUp property to make sure it is working, but before work on the load up method
5)Work on loadQuestion  method
    a)create a way to reset the timer whenever a new question is loaded
        i) use timer and equal it to setInterval✅
        ii)inside the time interval create a way in which you are telling the code to run the game countdown function after every second or a thousand miliseconds*✅
            *you are going to lower the counter and post the counter to the page and it will also check if the counter is less than or equal to zero 
    b)post a new question to the page
        i)use a jQuery selector and choose the subwraper ✅
        ii)append and open parenthesis✅
        iii)inside the parenthesis choose the html element to display the question and add the question property of the game variable and open a pair of brackets ✅
        iv)on the brakets you will need to choose the appropiate object you want the code to select and close the braket✅
            *select the "game" function and add it with a period to the "currentQuestion and close the braket✅
        v)follow the closed braket by adding a dot and including the same property you used on 5.b.iii✅
        vi)then use the plus sign to close the html element you chose on 5.b.iii✅
    c)post all the answers on the page as buttons
        i)create a for loop that will keep going for as long as i is less than the amount of answers that there are, so less than four. Then use the jQuery selector for the subwrapper to append  the buttons
        i)inside the append parenthesis open a single quotation mark and use the button html element, give it a class of answer-button, an id of button-, close the single quotation mark ✅
        ii) plus sign, include the answer of the current question <!--i-->"
        iii) plus sign and open a single quotation mark, open a single double quotation mark, include a string called data-name= <!--make sure you open a string by putting a single double quotation mark--> and close the single quotation mark ✅
        iv) plus sign, question property <!--the question property starts with a single quotation bracket--> and open a pair of brackets <!--[Inside the brackets you will add the game dot currentQuestions]-->
        v) add a dot to include "answers" followed by the parameter of the answer of the current question✅
        vi)plus sign, open single quotation, close double quotation from 5.c.iii, close the button <!--'>'-->,close single quotation✅
        vi)plus sign <!--question-->, open braket, game dot currentQuestion, close braket, ✅
        vii)dot answers open braket, i, close braket✅
        viii)plus sign, close entire button <!--'</button>'--> *this will post our button to the page anytime that we have the load question function set.✅
            *data-name: stores data within an element
                *we are puttin the answer within the data element
            *we are storing the answer at i within this button
        <!--move to 1.c-->
             
6)Work on  nextQuestion method
    a)set counter back to 30 <!--this way the counter will go back to 30 after each question, otherwise the seconds from previous question would remain -->✅
    b)set the html document to display the correct number of seconds✅
    c)use an incrementor for the current question
    d)load the question ✅
    <!--move to 7-->

7)Work on timeUp method
    a)clear interval timer
    b)set subwrapper to tell us that we ran out of time
        i)change the html document and use a "ran out of time" message for the player <!--see 10.c.i for reference-->
    c)let the player know what the correct answer should have been
        i)subwrapper jquery selector
        ii).append
        iii)html header element with message about correct answer 
            *"the correct answer was:"
        iv)plus question [
            -game
            -.currentQuestion
        ]
        v).correctAnswer
        vi)plus closing html header element
    d)create a way to send the player to the results screen if it is the final question or to the next question
        *use same code from 10.d.i 
    <!--move to 8-->


8)Work on results method
    a)clear the interval
    b)create a message after the player finishes the game
        -subwrapper jquery selector, html, "all done" message in a header format
    c)create a way to tell the player what the correct score was 
        i)subwrapper jquery selector  
        ii)append
        iii)correct string
        vi)plus game dot correct
    d)create a way to tell the player what the incorrect score was 
        i)subwrapper jquery selector
        ii)append
        iii)incorrect string
        vi)plus game dot incorrect
    e)create a way for unaswered questions
        i)add a new property called unasnwered <!--place it on step 3-->
        ii)go to timeUP function and add the unAnswered property <!--game.unanswered++-->
        iii)on the reults function 
            -subwrapper, append, h3, "unanswered:" , plus game dot unaswered, plus closing h3
        <!--move to step12-->
9)Work on click method
    a)start with giving the e paramether for the click method function
        i)clear the interval inside the function <!--we are clearing the interval because we don't want the timer to be running after we already clicked the button. We want it to stop at that point-->
            *clearInterval
            *(timer)
        ii)create an if event <!--think on what is it that you clicked-->
            *$, e.target, .data, "name", ==, questions, game, .currentQuestion, .correctAnswer {run the game funtion for correctly answered questions}, else {run the game.function of the incorrect answered questions}
            <!--At this point go to 10 and 11 console log them with either win or lose message to make sure it is working-->

10)Work on answeredCorrectly method
    a)Clear the interval
    b)add to correct value
        i)game,.correct,++
    c)changed the html file to reflect changes
        i)$, #, subwrapper, .html, html-header-element, win-message
    d)add a way to take the player to the next question, or determines whether the player is on the last question and if so takes the player to the results screen 
        i)start with an if else statment 
            -if, game, .currentQuestion, ==, questions, .length, -1 {setTimeout, game, .results, 3*1000}
            -else {setTimeout, game, .nextQuestion, 3*1000}
            <!--move to 11-->

11)Work on answeredIncorrectly method
    a)Clear the interval
    b)add to correct value
        i)game,.incorrect,++
    c)changed the html file to reflect changes
        i)$, #, subwrapper, .html, html-header-element, lose-message
    <!--let the player know what the correct answer should have been, use 7.c as reference-->
    d)add a way to take the player to the next question, or determines whether the player is on the last question and if so takes the player to the results screen 
        i)start with an if statment 
            -if, game, .currentQuestion, ==, questions, .length, -1 {setTimeout, game, .results, 3*1000}
            -else {setTimeout, game, .nextQuestion, 3*1000}
    <!--move to 6-->

12)Work on reset method
    a)set everything back to the original amount 
        i) game, .currentQuestion, equal, 0
        ii) game, .counter, equal, 0
        iii) game, .correct, equal, 0 
        iv) game, .incorrect, equal, 0
        v) game, .unanswered, equal, 0
        vi) game, .loadQuestion()
    b) add a new button to results page 
        -subwrapper, append,button-start-tag, id=reset for button, actual text for button <!--Reset-->, button closing tag
    c)create a new on click event <!--this will go on top of the questions variable-->
        -$, document, .on, click, reset id, function {game.reset()}
    d)Make sure the timer displays 
        i)on part 5.b: subwrapper, html, h2, time remaining, span tag opening, id=counter, text inside the h2 would be the number 30, span closure, word seconds, h2 closing tag


 

 

