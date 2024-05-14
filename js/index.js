function Form(){
    document.getElementById("register").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("create_new").style.display="none";
    document.querySelector(".bar_contain").style.display="none";
}
function Create(){
    document.getElementById("create_new").style.display="block";
    document.getElementById("main").style.display="none";
    document.getElementById("register").style.display="none";
    document.querySelector(".bar_contain").style.display="none";
}
function closeForm(){
    document.getElementById("register").style.display="none";
    document.getElementById("main").style.display="flex";
    document.getElementById("create_new").style.display="none";
}
var i=1;
function bar_contain(){
    if(i==1){
        document.querySelector(".bar_contain").style.left="0px";
        document.querySelector(".bar_contain").style.display="block";
        i=0;
    }
    else{
        document.querySelector(".bar_contain").style.left="-100%";
        document.getElementById("register").style.display="none";
        document.getElementById("main").style.display="flex";
        document.getElementById("create_new").style.display="none";
        document.querySelector(".bar_contain").style.display="block";
        i=1;
    }
}