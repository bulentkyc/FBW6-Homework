let reg;
document.getElementById('button').addEventListener('click', start);
let elements = document.getElementsByClassName('text');
for(let i = 0; i < elements.length ; i++){
    elements[i].addEventListener('input', (event)=>{checkText(event)});
}


function checkText(element){
    if(reg.test(element.target.value)){
        element.target.style.borderColor = 'green';
    }else{
        element.target.style.borderColor = 'red';
    }
}
function start(){
    reg = new RegExp(document.getElementById('enterText').value);
    for(let i = 0; i< elements.length; i++){
        elements[i].value = '';
        elements[i].style.borderColor = 'gray';
    }
    console.log(reg);
}