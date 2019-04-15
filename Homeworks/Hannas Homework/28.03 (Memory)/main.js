// i need a array to store
let myArr=[];
// i need smth like a pair of cards
let firstCard, secondCard;
// i want to count if there is a pair
let countPair=0;

// let's generate a random Number
let genNum = () => {
    //i need a var to store numbers
    let newNum;
    // i want the numbers to be pairs therefor i set a "inside" counter
    let count = 0;
    // i need 16 numbers
    for(i=1; i<17; i++){
        //for this iteration do this code
        do {
            count = 0;
            newNum = Math.floor(Math.random() * 8);
            for(j=0; j<=i; j++){
                // take myArr and save my j in it if that is equal to newNum ... 
                if(myArr[j] == newNum){
                    // go to the next space
                    count += 1;
                }
            }
            // if my count is greater than 2 restart the generation of a newNum
            if (count < 2) {
                myArr[i] = newNum;
            }
            // while its equal two do nothing
        } while (count == 2);
    }
    // console.log(myArr);
}
genNum();

// now make it flip 
function flipCard (flip){
    if (countPair == 0) {
        firstCard = flip.target;
        flip.target.innerHTML = myArr[flip.target.id];
        countPair += 1;
    } else{
        secondCard = flip.target;
        flip.target.innerHTML = myArr[flip.target.id];
        countPair = 0;
        if (firstCard.innerHTML == secondCard.innerHTML) {
            firstCard.style.backgroundColor = 'lightgray';
            secondCard.style.backgroundColor = 'lightgray';
        } else {
            setTimeout( function(){
            firstCard.innerHTML = '';
            secondCard.innerHTML = '';
            }, 800 );
        }
    }
}

let cellArr = document.getElementsByClassName('cell');
for(cell of cellArr){
    cell.addEventListener('click', (event)=> flipCard(event));
}
