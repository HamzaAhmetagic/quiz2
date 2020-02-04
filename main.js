let pitanjeDiv = document.querySelector(".pitanje-box");
let odgovoriDiv = document.querySelector(".odgovori-box");
let optionsDiv = document.querySelectorAll(".options");
let scoreDiv = document.querySelector(".score");

pitanjeDiv.innerHTML = quiz.questions[0].text;
for (var i = 0; i < optionsDiv.length; i++) {
	optionsDiv[i].innerHTML = quiz.questions[0].odgovori[i]
}
scoreDiv.innerHTML = "1 / " + quiz.questions.length