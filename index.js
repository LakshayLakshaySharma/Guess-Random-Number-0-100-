const submit = document.getElementById("submit");
const restart = document.getElementById("restart");
const error = document.getElementById("error");
const spanP = document.getElementById("span-p");
const spanC = document.getElementById("span-c");


var num = [Math.floor(Math.random() * 100)];

submit.addEventListener("click", function(){
  var spanC = document.getElementById("span-c");
  spanC.innerText--;


  var input = document.getElementById("input").value;
 if(input == num){
   error.innerText = "CORRECT ANSWER, NUMBER IS " + num;
   error.style.color = "green";
 } else if (input < num){
   error.innerText = "TOO LOW, TRY AGAIN";
   error.style.color = "red";
 } else if (input > num){
   error.innerText = "TOO HIGH, TRY AGAIN";
   error.style.color = "red";
 }
});

restart.addEventListener("click", function(){
  input.value = "";
  spanP.innerText = "";
  spanC.innerText = "10";
  error.innerText = "";
});

function previous(){
  var str = num.toString();
  var spanP = document.getElementById("span-p");
  spanP.innerHTML += input.value + " ";
}
