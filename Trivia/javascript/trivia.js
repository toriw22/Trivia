$(document).ready(function() {
	var questionNumber = [{

		question: "Who is the first Stark to die in Game of Thrones?",
		answers: ["Arya", "Robb", "Ned", "Catelyn"],
		solution: 2,
		image: ["<img src = 'https://i1.wp.com/25.media.tumblr.com/4d124961b7b596e89a17dcebe5c933e2/tumblr_mjq4gxiCLr1qdelmgo6_250.gif'/>"]

		}, {
		question: "Who was Daenerys Targaryen's husband?",
		answers: ["Sir Jorah Mormont", "Khal Drogo", "Daario Naharis", "Prince Oberyn Martell"],
		solution: 1,
		image: ["<img src = 'http://i.lv3.hbo.com/assets/images/series/game-of-thrones/episodes/1/1/winter-is-coming-04-1024.jpg' />"]

		}, {
		question: "Who was King Joffrey's first wife?",
		answers: ["Sansa Stark", "Yara Greyjoy", "Margaery Tyrell", "Cersei Lannister"],
		solution: 2,
		image: ["<img src = 'https://media.vanityfair.com/photos/563b9575eccc21966e93540a/master/pass/margaery-tyrell-season-6.jpg' />"]

		}, {
		question: "Where does John Snow currently live?",
		answers: ["King's Landing", "Winterfell", "The Wall", "Casterly Rock"],
		solution: 1,
		image: ["<img src = 'https://uproxx.files.wordpress.com/2013/04/winterfell-burned.gif?w=650' />"]
	}];

	var i = 0;

	function startGame() {	
		$("#question").hide();
		$("#answerA").hide();
		$("#answerB").hide();
		$("#answerC").hide();
		$("#answerD").hide();
	};

	startGame();

	function trivia (questionNumber) {
		$("#start").hide();
		$("#question").show();
		$("#answerA").show();
		$("#answerB").show();
		$("#answerC").show();
		$("#answerD").show();

		$("#question").html(questionNumber['question']);
		$("#answerA").text(questionNumber.answers[0]);
		$("#answerB").text(questionNumber.answers[1]);
		$("#answerC").text(questionNumber.answers[2]);
		$("#answerD").text(questionNumber.answers[3]);

		setTimeout(tenSeconds, 10000);

		function tenSeconds(){
			$("#timer").append("<h2>Time\'s up!</h2>");
			i++;
			trivia (questionNumber[i]);
		};
	};



	$("#start").on("click", function () {
		trivia (questionNumber[i]);
	});

	// function timerNextQuestion () {
	// 	i++;
	// 	outOfTime = setInterval (
	// 	trivia (questionNumber[i]), 5000);
	// 	if (seconds < 0) {
 //        clearInterval(x);
 //        document.getElementById("demo").innerHTML = "EXPIRED";
 //    	}
	// }, 10000);

	// }
	function checkCorrect () {
		var value;
		value = $(this).attr("value");
		var valueAgain = parseInt(value);
		if (valueAgain === questionNumber[i].solution) {
			alert("that is correct!");
			};

	};
	function nextQuestion () {
		
		$("#answerA").on("click", function (){
			checkCorrect ();
			$("#image").html(questionNumber[i].image);
			i++;
			trivia (questionNumber[i]);
		});

		$("#answerB").on("click", function (){
			checkCorrect ();
			$("#image").html(questionNumber[i].image);
			i++;
			trivia (questionNumber[i]);
		});

		$("#answerC").on("click", function (){
			checkCorrect ();
			$("#image").html(questionNumber[i].image);
			i++;
			trivia (questionNumber[i]);
		});
		$("#answerD").on("click", function (){
			checkCorrect ();
			$("#image").html(questionNumber[i].image);
			i++;
			trivia (questionNumber[i]);
		});


	};

	nextQuestion ();


});

