function populate() {
	if(quiz.isEnded()) {
		//showScores();
	}
	else {
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex() .text;
		
		// show choices
		var choices = quiz.getQuestionIndex() .choices;
		for(var i = 0; i< choices.length; i++) {
			var element = document.getElementById("choice" + i);
			element.innerHTML = choices[i];
			guess("btn" + i, choices[i]);
		}
		
		showProgress();
	}
};

function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
};

function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById("progress");
	element.innerHTML = " Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
	var gameOverHtml = "<h1>Result</h1>";
	gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
	var element = document.getElementById("quiz");
	element.innerHTML = gameOverHtml;
};

var questions = [
	new Question("What is the key to become a successful consultant?",["Counseling", "Choosing your niche", "Finding the right audience", "Education"], "B"),
	new Question("What is the vital step in starting a consulting business?",["Defining your services", "Capital", "Registering the business", "Conducting surveys"], "A"),
	new Question("How do you stand out as a business?",["Being aware of competitors", "Crunch the numbers", "Develop brand identity", "Expanding"], "C"),
	new Question("Business structure, pricing, licensing and permits, and business plans is the process of what?",["Filling in the business blanks", "Creating a sales plan", "Marketing", "Starting a business"], "A"),
	new Question("How do you find partners and investors?",["Crowdfunding", "Angel investors and venture capitalists", "LinkedIn", "All the above"], "C"),
	new Question("How do you spread the word about your business?",["Business cards and brochures", "Content marketing", "Networking", "All the above"], "C"),
	new Question("Is it important to build a web presence?",["Yes", "No", "It depends on the business", "None of the above"], "A"),
	new Question("When starting a new business it is important to understand what?",["The numbers", "Web presence", "Targeted audience", "Sales"], "A")
];

var quiz = new Quiz(questions);

populate();
