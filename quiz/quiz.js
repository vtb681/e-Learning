function populate() {
	if(quiz.isEnded()) {
		//showScores();
	}
	else {
		// show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex() .text;
	}
}

var questions = [
	new Question("What is the key to become a successful consultant?",["Counseling", "Choosing your niche", "Finding the right audience"], "B"),
	new Question("What is the vital step in starting a consulting business?",["Defining your services", "Capital", "Registering the business"], "A"),
	new Question("How do you stand out as a business?",["Being aware of competitors", "Crunch the numbers", "Develop brand identity"], "C"),
	new Question("Business structure, pricing, licensing and permits, and business plans is the process of what?",["Filling in the business blanks", "Creating a sales plan", "Marketing"], "A"),
	new Question("How do you find partners and investors?",["Crowdfunding", "Angel investors and venture capitalists", "All the above"], "C"),
	new Question("How do you spread the word about your business?",["Business cards and brochures", "Content marketing", "All the above"], "C"),
	new Question("Is it important to build a web presence?",["Yes", "No", "It depends on the business"], "A"),
	new Question("When starting a new business it is important to understand what?",["The numbers", "Web presence", "Targeted audience"], "A")
];

var quiz = new Quiz(questions);

populate();