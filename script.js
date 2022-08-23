
function replaygame(){
    x=prompt("Enter player1 name with X");
    y=prompt("Enter player2 name with Y");
    plaeyr1= document.getElementById("text1").innerHTML=`player1 : <span style="color:red">${x}<span> (X)`;
    plaeyr2= document.getElementById("text2").innerHTML=`player2 : <span style="color:red">${y}<span>  (O)`;
    player1.style.color = "red";
}
function re(){
    window.location.reload();
}
function finish(num1 , num2 , num3){
    document.getElementById('b'+num1).style.color="white";
    document.getElementById('b'+num2).style.color="white";
    document.getElementById('b'+num3).style.color="white";
    if (document.getElementById('b'+num1).innerHTML == "X"){
    document.getElementById("text1").innerHTML=`<span style="color:red">${document.getElementById("text1").innerHTML}<span>`;
    }
    else if(document.getElementById('b'+num1).innerHTML == "O"){
        document.getElementById("text1").innerHTML=`<span style="color:red">${document.getElementById("text2").innerHTML}<span>`;
    }
    document.getElementById("text2").style.color="red"
     document.getElementById("text2").innerHTML="Winner";
    setTimeout(function(){location.reload()}, 3000)
}
let arr = [];
function win(){
for (let i=1 ; i < 10 ; i++){
arr[i] = document.getElementById('b'+i).innerHTML;
}
if (arr[1] == arr[2] && arr[2]==arr[3] && arr[1] != ''){
   finish(1,2,3);
}
else if (arr[4] == arr[5] && arr[5]==arr[6] && arr[4] != ''){
    finish(4,5,6);
}
else if (arr[7] == arr[8] && arr[8]==arr[9] && arr[7] != ''){
    finish(7,8,9);
}
else if (arr[1] == arr[4] && arr[4]==arr[7] && arr[7] != ''){
    finish(1,4,7);
}
else if (arr[2] == arr[5] && arr[5]==arr[8] && arr[2] != ''){
    finish(2,5,8);
}
else if (arr[3] == arr[6] && arr[6]==arr[9] && arr[9] != ''){
    finish(3,6,9);
}
else if (arr[1] == arr[5] && arr[5]==arr[9] && arr[1] != ''){
    finish(1,5,9);
}
else if (arr[3] == arr[5] && arr[5]==arr[7] && arr[3] != ''){
    finish(3,5,7);
}

}
let test = 'X';
function game(id){
let element = document.getElementById(id);
if (test === 'X' && element.innerHTML=="")
{
    element.innerHTML="X";
    test = "O";
}
else if (test === 'O' && element.innerHTML==""){
element.innerHTML="O";
element.style.color="red";
    test = "X";
}
win();
}