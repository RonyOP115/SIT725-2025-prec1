function changeText(){
var textsArray = ["In case i dont see yaa","Good morning", "Good afternoon", "And", "Good Evening"]
var number = getRandomNumberBetween(0,textsArray.length - 1)
console.log("Index: ", number)
document.getElementById("heading").innerHTML = textsArray[number];
}
function getRandomNumberBetween(min,max){
return Math.floor(Math.random()*(max-min+1)+min);
}
