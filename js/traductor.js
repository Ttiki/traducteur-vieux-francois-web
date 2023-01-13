var usrInput = document.getElementById("text");
var usrOutput = document.getElementById("result");
var traductorBtn = document.getElementById("submit-btn");

//Listener on the button
traductorBtn.addEventListener("click", function() {

    console.log(usrInput.value);

    var text = usrInput.value;
    text = replaceAiToOi(text);
    text = replaceUtoUl(text);
    text = replaceTToSt(text);
    text = replaceU(text);
    text = replaceI(text);
    text = replaceJ(text);
    //text = replaceS(text);
    text = replaceDans(text);
    text = replaceMa(text);
    text = replaceMon(text);
    text = replaceTien(text);
    usrOutput.value = text;

});

function replaceAiToOi(text) {
    var newText = text.replace('ai', "oi");
    return newText;
}

function replaceUtoUl(text) {
    var newText = text.replace('u', "ul");
    return newText;
}

function replaceTToSt(text) {
    var newText = text.replace('t', "st");
    return newText;
}

function replaceU(text) {
    var newText = text.replace('u', "v");
    return newText;
}

function replaceI(text) {
    var newText = text.replace('i', "y");
    return newText;
}

function replaceJ(text) {
    var newText = text.replace('j', "i");
    return newText;
}

function replaceS(text) {
    var newText = text.replace('s', "z");
    return newText;
}

function replaceDans(text) {
    var newText = text.replace('dans', "dedans");
    return newText;
}

function replaceMa(text) {
    var newText = text.replace('ma', "mien");
    return newText;
}

function replaceMon(text) {
    var newText = text.replace('mon', "mienne");
    return newText;
}

function replaceTien(text) {
    var newText = text.replace('tien', "tienne");
    return newText;
}