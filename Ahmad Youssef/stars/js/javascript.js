for(let i = 0; i <7; i++){
    let star = "*";
    if(i < 4){
        for(let j = 0; j <7; j++){
            if(j < i){
                star = "* " + star + " *";
            }else{
                star = "  " + star + "  ";
            }
         }
    }else{
        for(let j = 6; j >= 0; j--){
            if(j > i){
                star = "* " + star + " *";
            }else{
                star = "  " + star + "  ";
            }
        }
    }
    console.log(star);
}