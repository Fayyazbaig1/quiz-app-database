var question = [
    {

        questionDisplay: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ],
    },
    {

        questionDisplay: "What does CSS stand for?",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ],
        answer: "Cascading Style Sheet",
    },
    {

        questionDisplay: "What does PHP stand for?",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ],
        answer: "Hypertext Preprocessor",
    },
    {

        questionDisplay: "What does SQL stand for?",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language",
        ],
        answer: "Structured Query Language",
    },
    {

        questionDisplay: "What does XML stand for?",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language",
        ],
        answer: "eXtensible Markup Language",
    },

];

var dispalyQue = document.getElementById("displayQue");
var currentQue = document.getElementById("currentQue");
var totalQUe = document.getElementById("totalQue");
var optionsParent = document.getElementById("optionsParent");

var indexVal = 0;
var mark = 0;

function renderQue(){
    var que = question[indexVal];
    dispalyQue.innerHTML = que.questionDisplay;
    totalQUe.innerHTML = question.length;
    currentQue.innerHTML = indexVal + 1;


    optionsParent.innerHTML = "";

    for(var i = 0; i < que.options.length; i++){
        console.log(que.options[i]);
        optionsParent.innerHTML += `<button class="btnO" onclick="checkAns('${que.answer}', '${que.options[i]}')">${que.options[i]}</button>`;

    }
}


function nextQue(){
    indexVal++;
    renderQue();
}

function checkAns(answer, options){
    console.log(answer,options);
    if(answer == options){
        mark = mark + 1
    }
    console.log(mark);
    nextQue()
}
 
renderQue();