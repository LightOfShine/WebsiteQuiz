var quiz = {
  JS: [
    {
      id: 1,
      question: "Kepanjangan HTML adalah ?",
      options: [
        {
          a: "Hyper Text Markup List",
          b: "Hyper Text Manual Language",
          c: "Hyper Text Manual List",
          d: "Hyper Text Markup Language",
          e: "Hyper Text Maximal Language",
        },
      ],
      answer: "Hyper Text Markup Language",
      score: 0,
      status: "",
    },
    {
      id: 2,
      question: "Perintah untuk mengganti baris pada HTML adalah ?",
      options: [
        {
          a: "&lt;br&gt;",
          b: "&lt;p&gt;",
          c: "&lt;u&gt;",
          d: "&lt;a&gt;",
          e: "&lt;b&gt;",
        },
      ],
      answer: "&lt;br&gt;",
      score: 0,
      status: "",
    },
    {
      id: 3,
      question: "Perintah HTML untuk membuat teks berjalan adalah ?",
      options: [
        {
          a: "Form",
          b: "Body",
          c: "section",
          d: "Marquee",
          e: "UL dan LI",
        },
      ],
      answer: "Marquee",
      score: 0,
      status: "",
    },
    {
      id: 4,
      question: "Untuk memberi warna teks web diatur dengan mengubah nilai atribut ?",
      options: [
        {
          a: "bgcolor",
          b: "textcolor",
          c: "headcolor",
          d: "bodycolor",
          e: "fontcolor",
        },
      ],
      answer: "fontcolor",
      score: 0,
      status: "",
    },
    {
      id: 5,
      question: "CSS merupakan singkatan dari ?",
      options: [
        {
          a: "Cascading Style Sheet",
          b: "Cascading Select Style",
          c: "Cascading Select Sheet",
          d: "Cascading Sheet Style",
          e: "Cascading Style Select",
        },
      ],
      answer: "Cascading Style Sheet",
      score: 0,
      status: "",
    },
    {
      id: 6,
      question: "Jenis Website yang mana penggunanya tidak bisa merubah kontent dari Web tersebut secara langsung menggunakan Browser. Merupakan pengertian dari ?",
      options: [
        {
          a: "Web Dinamis",
          b: "Web Statis",
          c: "Web Client",
          d: "Web Hosting",
          e: "Web Server",
        },
      ],
      answer: "Web Statis",
      score: 0,
      status: "",
    },
    {
      id: 7,
      question: "Yang bukan termasuk Profesi Pengembangan Website, diantaranya ?",
      options: [
        {
          a: "Web Designer",
          b: "Web Administrator",
          c: "Web Collector",
          d: "Web Developer",
          e: "Web Master",
        },
      ],
      answer: "Web Collector",
      score: 0,
      status: "",
    },
    {
      id: 8,
      question: "Apa kepanjangan WWW ?",
      options: [
        {
          a: "Word Wide Web",
          b: "World Web Wide",
          c: "Wide World Web",
          d: "World Wide Web",
          e: "Wide Word Web",
        },
      ],
      answer: "World Wide Web",
      score: 0,
      status: "",
    },
    {
      id: 9,
      question: "Contoh Web browser kecuali",
      options: [
        {
          a: "Mozilla Firefox",
          b: "Google Chrome",
          c: "Internet Explorer",
          d: "Opera",
          e: "Google Drive",
        },
      ],
      answer: "Google Drive",
      score: 0,
      status: "",
    },
    {
      id: 10,
      question: "Penemu HTML adalah ?",
      options: [
        {
          a: "Thomas Alfa Edison",
          b: "Cristiano Ronaldo",
          c: "Lionel Messi",
          d: "Tim Berners Lee",
          e: "Jack Ma",
        },
      ],
      answer: "Tim Berners Lee",
      score: 0,
      status: "",
    },
  ],
};
var quizApp = function () {
  this.score = 0;
  this.qno = 1;
  this.currentque = 0;
  var totalque = quiz.JS.length;
  this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
      $("#tque").html(totalque);
      $("#previous").attr("disabled", false);
      $("#next").attr("disabled", false);
      $("#qid").html(quiz.JS[this.currentque].id + ".");
      $("#question").html(quiz.JS[this.currentque].question);
      $("#question-options").html("");
      for (var key in quiz.JS[this.currentque].options[0]) {
        if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
          $("#question-options").append(
            "<div class='form-check option-block'>" +
              "<label class='form-check-label'>" +
              "<input type='radio' class='form-check-input' name='option' id='q" +
              key +
              "' value='" +
              quiz.JS[this.currentque].options[0][key] +
              "'><span id='optionval'>" +
              quiz.JS[this.currentque].options[0][key] +
              "</span></label>"
          );
        }
      }
    }
    if (this.currentque <= 0) {
      $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
      $("#next").attr("disabled", true);
      for (var i = 0; i < totalque; i++) {
        this.score = this.score + quiz.JS[i].score;
      }
      return this.showResult(this.score);
    }
  };
  this.showResult = function (scr) {
    $("#result").addClass("result");
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + "/" + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
      var res;
      if (quiz.JS[j].score == 0) {
        res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
      } else {
        res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
      }
      $("#result").append(
        '<div class="result-question"><span>Q ' +
          quiz.JS[j].id +
          "</span> &nbsp;" +
          quiz.JS[j].question +
          "</div>" +
          "<div><b>Correct answer:</b> &nbsp;" +
          quiz.JS[j].answer +
          "</div>" +
          '<div class="last-row"><b>Score:</b> &nbsp;' +
          res +
          "</div>"
      );
    }
  };
  this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;"); //for <
    option = option.replace(/>/g, "&gt;"); //for >
    option = option.replace(/"/g, "&quot;");
    if (option == quiz.JS[this.currentque].answer) {
      if (quiz.JS[this.currentque].score == "") {
        quiz.JS[this.currentque].score = 1;
        quiz.JS[this.currentque].status = "correct";
      }
    } else {
      quiz.JS[this.currentque].status = "wrong";
    }
  };
  this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
  };
};
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
  jsq.displayQuiz(0);
  $("#question-options").on("change", "input[type=radio][name=option]", function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
  });
});
$("#next").click(function (e) {
  e.preventDefault();
  if (selectedopt) {
    jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(1);
});
$("#previous").click(function (e) {
  e.preventDefault();
  if (selectedopt) {
    jsq.checkAnswer(selectedopt);
  }
  jsq.changeQuestion(-1);
});
