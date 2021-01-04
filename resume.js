var trans = 0;
var current = 0;

function upCurrent(){
    if (current!=400){
        current+=400;
    }
    goUp();
}

function downCurrent(){
    if (current!=0){
        current-=400;
    }
    goDown();
}

function goUp(){
    if (trans==current){
        return;
    }
    trans+=20
    document.getElementById("projectDiv").style.transform = "translatey(-"+trans+"px)";
    setTimeout(goUp,10);
}

function goDown(){
    if (trans==current){
        return;
    }
    trans-=20
    document.getElementById("projectDiv").style.transform = "translatey(-"+trans+"px)";
    setTimeout(goDown,10);

}