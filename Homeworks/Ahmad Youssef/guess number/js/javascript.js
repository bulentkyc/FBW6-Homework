document.getElementById("myBtn").addEventListener("click", startGame);
function startGame(){
    let numTry = checkIfNum(prompt('how many soul do wanna choose until you know the answer'));
    if(numTry === '0'){
        alert('sorry that you don\'t wanna play with us');
    }else{
        if(numTry === true){
            return;
        }else{
            numTry = convertNum(numTry, 'soul');
        }
        let begNum = checkIfNum(prompt('choose your minimum'));
        if(begNum === true){
            return;
        }else{
            begNum = convertNum(begNum, 'minimum');
        }
        let endNum = checkIfNum(prompt('chose your max number'));
        if(endNum === true){
            return;
        }else{
            endNum = convertNum(endNum, 'maximum');
        }
        if(endNum < begNum){
            let swap = endNum;
            endNum = begNum;
            begNum = swap;
        }
        let randNum = Math.floor((Math.random() * ((endNum+1) - begNum)) + begNum);
        let i= 0;
        while(i < numTry){
            let userGuess = checkIfNum(prompt('choose number between '+ begNum +' to '+ endNum));
            if(userGuess === true){
                return;
            }else{
                userGuess = convertNum(userGuess, 'answer is');
            }
            i++;
            if(userGuess >= begNum && userGuess <= endNum){
                if( userGuess == randNum){
                    alert(" you are the winner the number is " + randNum);
                    break;
                }else if( userGuess > randNum){
                    alert(" you need to give number less than "+ userGuess);
                }else if( userGuess < randNum){
                    alert(" you need to give number greater than "+ userGuess);
                }
            }else{
                alert('you have to enter number between '+ begNum + 'and ' + endNum);
            }
        }
    }
}
function checkIfNum(num){
        if(num === null){
            alert('sorry that you don\'t wanna play');
            return true;
        }else if(num == ''){
            num = checkIfNum(prompt('you forget to enter a number please enter your number again'));
            return num;
        }else if(!(isNaN(num))){
            if(num < 0){
                num = checkIfNum(prompt('You should enter a positive number please enter your number again'));
            }
            return num;
        }else{
            num = checkIfNum(prompt('you entered a char. next time enter a Number please enter your number again'));
            return num;
        }
}
function convertNum(num, rang){
    num *= 1;
    if(!(Number.isInteger(num))){
        num = parseInt(num);
        alert('the accept only integare number so, your ' + rang + ' now is ' + num);
    }
    return num;
}
