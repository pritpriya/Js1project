var quotes =['a new one each time']

function newQuote() {
    var randomNumber = Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}
function dropDownlist1992() {
    var myList= document.getElementById("myList");
    document.getElementById("favourite").value=myList.options[myList.selectionIndex].text;
}
function onTextChange(e) {
    console.log(e);
    document.getElementById("input2").value=e;
}
function Showhelp() {
    document.getElementById("helpmessage").style.display="block";
}
function Hidehelp() {
    document.getElementById("helpmessage").style.display="none";
}