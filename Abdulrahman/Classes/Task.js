
// -----Reverse A Number-----


/* function reverseNumber(number){
    
    // name.split('separator', limit) to Change String To Array!!
    number = number.toString().split('');
    // name.join('separator') to Change Array To String!!
    number = number.reverse().join('');
    // number * 1 is Away to Change String To Number!!
    number = number * 1;
    return number;
    
    // Sorthand: return number.toString().split('').reverse().join('') * 1
}
console.log(reverseNumber(12345)); */

// ------------------------------------------

// -----Generate Code-----


/* function generateCode(item){

    var myString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var code = '';

    for(i = 0; i < item; i++){
        code += myString.charAt(Math.floor(Math.random() * myString.length));
    }
    return code;
}

console.log(generateCode(5)); */

// ----------------------------------------------------------------------------------------

// -----Letter Counter-----


/* function letterCounter(letter, text){

    var counter = 0;

    for(i = 0; i < text.length; i++){
        if(text.charAt(i) === letter){
            counter ++;
        }
    }
    return counter;
}
console.log(letterCounter('a', 'javaScript'));
 */
// ------------------------------------------

// -----Search For Date-----


/* function searchOfDate(firstYears, lastYears){

    var d;

    for(i = firstYears; i < lastYears; i++){
        d = new Date(i,0,1);
        d = d.getDay();

        // Monday = 1, Thusday = 2, ....Sunday = 7
        if(1 == d){ 
            console.log('1st January is being a Monday in ' + i);
        }
    }
}
searchOfDate(2000, 2060); */

// ------------------------------------------------------------------


// -----------Email app--------------

/* let arr = [];
let card, test;

function send(){

    let userEmail = document.getElementById('email').value,
        subject = document.getElementById('subject').value,
        message = document.getElementById('message').value;
    let myObjects = {};

    if(userEmail != '' && subject != '' && message != ''){
        myObjects ={
            userEmail,
            subject,
            message
        }
        arr.push(myObjects);
    }
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
}

function show(){
    document.getElementById('mySection').style.display = 'none';
    document.getElementById('myInbox').innerHTML = '';
    for(i = 0; i < arr.length; i++){
        card = '<div class="card" onclick="showEmail('+ i +')"><p class="sub">'+ arr[i].subject +'</p><p>'+ arr[i].userEmail +'</p><p class="msg">'+ arr[i].message +'</p></div>';
        document.getElementById('myInbox').innerHTML += card;
    }
}
function showEmail(index){
    test = '<div class="test"><p>'+ arr[index].userEmail +'</p><p>'+ arr[index].subject +'</p><p>'+ arr[index].message +'</p></div>';
    document.getElementById('myAside').innerHTML = test;
}
 */
// ------------------------------------------------------------------------------


// let mySpan = document.getElementById('mySpan');
// let x = 0;
// let s = 1000;


// mySpan.onclick = function(){
    
//     let s = 1000;

//     mySpan.classList.add('mySpan2');
//     setInterval(function(){
//         mySpan.style.right = Math.floor(Math.random()*90)+'vw';
//         mySpan.style.bottom = Math.floor(Math.random()*90)+'vh';
//     }, s);
//     x += 10;

//     if(mySpan.dataset.score > 100){
//         s = 700;
//         mySpan.style.transition = '.5s';
//     }
    
//     mySpan.dataset.score = x;
//     s = s;
// }
