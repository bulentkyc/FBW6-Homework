let result ='';
createTree(5,'*');


function createTree(cellCount,content){
    for( y = 1; y <= (cellCount/2).toFixed(); y++){
        for ( spaceTop = 1; spaceTop <= ((cellCount/2)- y).toFixed() ; spaceTop++){
            putSomething(' ',1);
        }
        putSomething(content,1);
    
        for(star = 2; star <= y; star++){
            putSomething(content,2);
        }
        console.log(result);
        putSomething('\n',1);
    }
    for( y = ((cellCount/2)+1).toFixed(); y <= cellCount; y++){
        for(spaceTop = 1; spaceTop <= (y-(cellCount/2)-1).toFixed(); spaceTop++){
            putSomething(' ',1);
        }
        putSomething(content,1);
        for(star = 2; star <= (cellCount+1)-y; star++){
            putSomething(content,2);
        }
        console.log(result);
        putSomething('\n',1);
    }
}
function putSomething(content, starCount){
    for( i = 1; i<= starCount; i++){
        result += content;
    }
}