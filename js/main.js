const words = [
    'javascript',
    'object',
    'python',
    'querty',
    'makers'
]
let word = words[Math.floor(Math.random()* words.length)]

let answerArr = word.split('').map(function(item){
    return "_"
})

let remainingLetters = words.length;

let attemps = 0;
let trueAttemps = 0;

while(remainingLetters > 0){
let guess = prompt (
    'Guess a letter,or press cancel to exit \n'
    + answerArr.join().toLocaleLowerCase());

    if(guess === "")continue;
    if(guess === null) break;


if(guess.length !== 1){
    alert ("Please enter only one letter. ");
    continue
}
let isTrueGuess = false;
word.split('').map(function(item,index){
    console.log(answerArr)
    if (guess === item && answerArr[index] === " ") {
        isTrueGuess = true;
    answerArr[index]= guess;
    remainingLetters--;
    }
}) 
if(isTrueGuess){
    trueAttemps++;
}
attemps++;

}
if(!remainingLetters){

    alert("Hourra,you guess the word:\n") + answerArr.join("")
    alert ("number of attemps:" + attemps);
    alert("your score" + Math.floor(100/trueAttemps*trueAttemps))
}