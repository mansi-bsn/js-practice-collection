let buttons = document.querySelectorAll("#btn");
let questionBox = document.querySelector(".que-box");
let count = 1;
let index = 0;
let trueAns = 0;
let timerId;
let currentQuiz = [];

function showStartScreen() {
    questionBox.innerHTML = `<h4 class="mb-3">Select number of questions</h4>`;
    buttons.forEach(btn => {
        questionBox.appendChild(btn);
    });
}
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let numberOfQue = parseInt(btn.value);
        let limitedQue = questions.slice(0, numberOfQue);
        count = 1;
        index = 0;
        loadQuestion(index, limitedQue);
    });
});

function loadQuestion(index, queLoad) {

    questionBox.innerHTML = "";
    let que = queLoad[index];

    let sec = 10;
    let timer = document.createElement("p");
    timer.classList.add("text-center", "text-danger", "fw-bold", "rounded-5", "border", "border-danger", "border-2");
    timer.id = "timer"
    questionBox.appendChild(timer);
    timer.innerHTML = sec;
    timerId = setInterval(() => {
        sec--;
        timer.innerHTML = sec;
        if (sec < 0) {
            clearInterval(timerId);
            index++;
            count++;
            if (index < queLoad.length) {
                loadQuestion(index, queLoad);
            } else {
                questionBox.innerHTML = "<h3>🎉 Quiz Completed!</h3>";
                questionBox.innerHTML += `<b>Total Questions: </b> ${queLoad.length} </br>`;
                questionBox.innerHTML += `<b>Correct Answers: </b> ${trueAns} </br>`;
                let fnScore = (trueAns / queLoad.length) * 100;
                questionBox.innerHTML += `<b>Final Score: </b> ${fnScore}%`;
            }
        }
    }, 1000);

    let p = document.createElement("p");
    p.innerHTML = count + ". " + que.question + "<br>";
    p.classList.add("fw-bold");
    questionBox.appendChild(p);

    let ul = document.createElement("ul");
    que.options.forEach(i => {
        let li = document.createElement("li");
        let optionButton = document.createElement("button");
        optionButton.classList.add("optBtn", "btn", "w-100", "m-2", "p-3", "bg-hov-gr");
        li.appendChild(optionButton);
        optionButton.innerText = i;
        ul.appendChild(li);
        let answerOf;
        optionButton.addEventListener('click', () => {
            answerOf = optionButton.innerText;
            if (answerOf === que.answer) {
                trueAns++;
            }
        });
    });
    questionBox.appendChild(ul);

    let nextBtn = document.createElement("button");
    nextBtn.classList.add("btn", "btn-success");
    nextBtn.innerText = "Next";
    questionBox.appendChild(nextBtn);
    nextBtn.addEventListener('click', () => {
        clearInterval(timerId)
        index++;
        count++;
        if (index < queLoad.length) {
            loadQuestion(index, queLoad);
        } else {
            questionBox.innerHTML = "<h3>🎉 Quiz Completed!</h3>";
            questionBox.innerHTML += `<b>Total Questions: </b> ${queLoad.length} </br>`;
            questionBox.innerHTML += `<b>Correct Answers: </b> ${trueAns} </br>`;
            let fnScore = (trueAns / queLoad.length) * 100;
            questionBox.innerHTML += `<b class="mb-4">Final Score: </b> ${fnScore}%`;

            let btnGroup = document.createElement("div");
            btnGroup.classList.add("mt-3");
            let btn1 = document.createElement("button");
            btn1.classList.add("btn", "btn-success", "m-2");
            btn1.innerHTML = "Restart";
            btnGroup.appendChild(btn1);
            btn1.addEventListener('click', () => {
                clearInterval(timerId);
                count = 1;
                index = 0;
                trueAns = 0;
                showStartScreen();
            });


            let btn2 = document.createElement("button");
            btn2.classList.add("btn", "btn-success", "m-2");
            btn2.innerHTML = "Retry";
            btnGroup.appendChild(btn2);
            questionBox.appendChild(btnGroup);

            btn2.addEventListener('click', () => {
                clearInterval(timerId);
                count = 1;
                index = 0;
                trueAns = 0;
                currentQuiz = queLoad;
                loadQuestion(index, currentQuiz);
            });
        }
    });
}

const questions = [
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which property in CSS is used to change text color?",
        options: ["font-color", "color", "text-style", "background-color"],
        answer: "color"
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["script", "javascript", "js", "code"],
        answer: "script"
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Digital Ordinance Model",
            "Document Order Module"
        ],
        answer: "Document Object Model"
    },
    {
        question: "Which function is used to print something in the console in JavaScript?",
        options: ["print()", "console.log()", "display()", "log.print()"],
        answer: "console.log()"
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        answer: "const"
    },
    {
        question: "Which operator is used to compare both value and type in JavaScript?",
        options: ["==", "===", "=", "!="],
        answer: "==="
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["text-size", "font-style", "font-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "What is the default position value in CSS?",
        options: ["absolute", "relative", "static", "fixed"],
        answer: "static"
    },
    {
        question: "Which of the following is not a JavaScript data type?",
        options: ["Number", "String", "Boolean", "Character"],
        answer: "Character"
    },
    {
        question: "Which method is used to join two arrays in JavaScript?",
        options: ["append()", "concat()", "merge()", "combine()"],
        answer: "concat()"
    },
    {
        question: "In CSS, which property is used to make text bold?",
        options: ["font-weight", "bold", "text-weight", "font-bold"],
        answer: "font-weight"
    },
    {
        question: "Which attribute is used in HTML to provide an alternate text for an image?",
        options: ["src", "title", "alt", "href"],
        answer: "alt"
    },
    {
        question: "Which of these is a JavaScript framework?",
        options: ["React", "Laravel", "Django", "Flask"],
        answer: "React"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["ol", "ul", "li", "list"],
        answer: "ul"
    },
    {
        question: "Which JavaScript method is used to select an element by ID?",
        options: [
            "getElementById()",
            "querySelectorAll()",
            "getElementsByClassName()",
            "getId()"
        ],
        answer: "getElementById()"
    },
    {
        question: "In CSS, which unit is relative to the root element?",
        options: ["px", "em", "rem", "%"],
        answer: "rem"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Oracle"],
        answer: "Netscape"
    },
    {
        question: "Which of these is not a frontend technology?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "Python"
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/* */", "#", "<!-- -->"],
        answer: "//"
    }
];
