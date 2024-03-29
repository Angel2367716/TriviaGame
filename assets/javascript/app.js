$("#start").on('click', function () {
    $("#start").remove();
    $("#instructions").remove();
    game.loadQuestion();

});
$(document).on('click', '.answer-button', function (e) {
    game.clicked(e);
});

$(document).on("click",'#reset', function(){
    game.reset();
});

//Array of questions and answers 
const questions = [{
    question: "In year seven when the gang of Snatchers caught up with Ron, Harry, and Hermione, who was Greyback's friend?",
    answers: ["Mundungus", "Pettigrew", "Xenophilius", "Scabior", "Rowle", "Amycus"],
    correctAnswer: "Scabior",
    image: "assets/images/question_mark.ico"
},
{
    question: "Who managed to place the Imperious Curse on Pius Thicknesse?",
    answers: ["Rowle", "Bellatrix", "Dolohov", "Yaxley", "Narcissa", "Dawlish"],
    correctAnswer: "Yaxley",
    image: "assets/images/question_mark.ico"
},

{
    question: "What does the Sorcerer's Stone do?",
    answers: ["It makes sure that you win every duel", "It makes you invisible", "It makes you invincible", "It makes you immortal", "It kills all of your enemies", "It haunts your enemies dreams"],
    correctAnswer: "It makes you immortal",
    image: "assets/images/question_mark.ico"
},
{
    question: "What color did Fleur think that Ginny and Gabrielle should wear for her wedding?",
    answers: ["Red", "Blue", "Silver", "Green", "Purple", "Gold"],
    correctAnswer: "Gold",
    image: "assets/images/question_mark.ico"
},
{
    question: "When George lost his ear, who was on the broom-stick with him?",
    answers: ["Bill", "Charlie", "Fred", "Aurthur", "Lupin", "Tonks"],
    correctAnswer: "Lupin",
    image: "assets/images/question_mark.ico"
},
{
    question: "When Hermione answered Professor Sprout's first question in year 2, how many points did she receive?",
    answers: ["10 Points", "0 Points", "5 Points", "15 Points", "25 Points", "She didn't get any Points"],
    correctAnswer: "10 Points",
    image: "assets/images/question_mark.ico"
},
{
    question: "What brand of fireworks did Fred and George set off in year 5?",
    answers: ["Zonko's", "Their own kind", "Dr. Filibuster's", "HoneyDuke's Special", "Dr. Zonko's Specialty", "The Mustard Remix"],
    correctAnswer: "Dr. Filibuster's",
    image: "assets/images/question_mark.ico"
},
{
    question: "In year 4, who placed the Imperious Curse on Victor Krum?",
    answers: ["Mad-Eye Moody", "Winky", "Barty Crouch", "Barty Crouch Jr.", "Peter Pettigrew", "Voldemort"],
    correctAnswer: "Barty Crouch Jr.",
    image: "assets/images/question_mark.ico"
},
{
    question: "When Barty Crouch was killed, what was he Transfigured into?",
    answers: ["Dirt", "Grass", "Worm", "Squeaky Toy", "Cookie", "Bone"],
    correctAnswer: "Bone",
    image: "assets/images/question_mark.ico"
},
{
    question: "What is Albus Dumbledore's last middle name?",
    answers: ["Ariana", "Wulfric", "Percival", "Kendra", "Brian", "Aberforth"],
    correctAnswer: "Brian",
    image: "assets/images/question_mark.ico"
},
{
    question: "Which animal did Aberforth perform 'inappropriate use of Magic'?",
    answers: ["A pig", "A horse", "A sheep", "A mule", "A cow", "A goat"],
    correctAnswer: "A goat",
    image: "assets/images/question_mark.ico"
},
{
    question: "In which book that Hermione looked in to find Horocruxes, give the name but not a definition?",
    answers: ["THE MONSTER BOOK OF MONSTERS", "Majick Most Evil", "The Evilist Artifacts in Wizarding History", "All About Horocruxes", "Hogwarts A History", "Horocruxes: The Danger They Do In The World Of Wizards"],
    correctAnswer: "Majick Most Evil",
    image: "assets/images/question_mark.ico"
},
{
    question: "Where did Hermione bring Harry and Ron to after they escaped the wedding?",
    answers: ["Bloomings Dale Avenue", "The Leaky Cauldron", "The Forest of Dean", "Totteham Court Road", "Tonk's house", "Number 12 Grimmauld Place"],
    correctAnswer: "Totteham Court Road",
    image: "assets/images/question_mark.ico"
},
{
    question: "Where was the REAL sword of Gryffindor hidden?",
    answers: ["Inside of the Lestrange's vault", "In a lake in the Forest of Dean", "Behind Professor Black's portrait at Grimmauld Place", "Behind Dumbledore's portrait at Hogwarts", "In the Forbidden Forest", "At Shell Cottage"],
    correctAnswer: "Behind Dumbledore's portrait at Hogwarts",
    image: "assets/images/question_mark.ico"
},
{
    question: "What month was Harry born in?",
    answers: ["December", "July", "June", "February", "March", "August"],
    correctAnswer: "July",
    image: "assets/images/question_mark.ico"
}]

//Game Object
const game = {
    questions: questions,
    currentQuestion: 0,
    counter: 20,
    correct: 0,
    incorrect: 0,
    unanswered:0,

    //Methods w/ functions 
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time UP!");
            game.timeUp();
        }
    },
    loadQuestion: function () {
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").html("<h2>SECONDS REMAINING: <span id='counter'>20</span></h2>");
        $("#subwrapper").append("<h2>" + questions[game.currentQuestion].question + "</h2>");
        for (let i = 0; i < questions[game.currentQuestion].answers.length; i++) {
            $("#subwrapper").append('<button class="answer-button" id="button-' + i + '"data-name="' + questions[game.currentQuestion].answers[i] + '" >' + questions[game.currentQuestion].answers[i] + '</button>');
        }
    },
    nextQuestion: function () {
        game.counter = 20;
        $("#counter").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();
    },
    timeUp: function () {
        clearInterval(timer);
        game.unanswered++;
        $("#subwrapper").html("<h2>You ran out of time!!</h2>");
        $("#subwrapper").append("<h3>The correct answer was:"+ questions[game.currentQuestion].correctAnswer + "</h3>");
        if (game.currentQuestion==questions.length-1){
            setTimeout(game.results,1500);
        } else {
            setTimeout(game.nextQuestion,1500)
                }
    },
    results: function () {
        clearInterval(timer);
        $("#subwrapper").html("<h1><strong>Results Page</strong></h1>");
        $("#subwrapper").append("<h3>Correct:" + game.correct+"</h3>");
        $("#subwrapper").append("<h3>Inorrect:" + game.incorrect+"</h3>");
        $("#subwrapper").append("<h3>Unanswered:"+game.unanswered+"</h3>");
        $("#subwrapper").append('<button id="reset">Reset</button>');
     },
    clicked: function (e) {
        clearInterval(timer);
        if ($(e.target).data("name") == questions[game.currentQuestion].correctAnswer) {
            game.answeredCorrectly();
        } else {
            game.answeredIncorrectly();
        }

    },
    answeredCorrectly: function () {
        console.log("You got it right")
        clearInterval(timer);
        game.correct++
        $("#subwrapper").html("<h2>You Got It Right!")
        $("#subwrapper").append("<h3>The correct answer was:" + questions[game.currentQuestion].correctAnswer + "</h3>");
        if (game.currentQuestion==questions.length-1){
            setTimeout(game.results,1500);
        } else {
            setTimeout(game.nextQuestion,1500)
                }
    },
    answeredIncorrectly: function () {
        console.log("You got it wrong");
        clearInterval(timer);
        game.incorrect++
        $("#subwrapper").html("<h2>You Got It Wrong!</h2>");
        $("#subwrapper").append("<h3>The Correct Answer Was:" + questions[game.currentQuestion].correctAnswer + "</h3>");
        if (game.currentQuestion==questions.length-1){
            setTimeout(game.results,1500);
        } else {
            setTimeout(game.nextQuestion,1500)
                }
    },
    reset: function () {
        game.currentQuestion=0;
        game.counter=20;
        game.correct=0;
        game.incorrect=0;
        game.unanswered=0;
        game.loadQuestion();
     }
};

// Window load event used just in case window height is dependant upon images
$(window).bind("load", function() { 
       
    var footerHeight = 0,
        footerTop = 0,
        $footer = $("#footer");
        
    positionFooter();
    
    function positionFooter() {
    
             footerHeight = $footer.height();
             footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";
    
            if ( ($(document.body).height()+footerHeight) < $(window).height()) {
                $footer.css({
                     position: "absolute"
                }).animate({
                     top: footerTop
                })
            } else {
                $footer.css({
                     position: "static"
                })
            }
            
    }

    $(window)
            .scroll(positionFooter)
            .resize(positionFooter)
            
});