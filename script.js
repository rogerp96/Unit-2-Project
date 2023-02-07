/* Declare variables below to save the different sections (divs) of your story*/

let letsButton = document.querySelector(".option-one")
let nahButton = document.querySelector(".option-two")
let optionTwoEnd= document.querySelector(".option-two-end")
let optionOneEnd = document.querySelector(".option-one-end")

let optionOneScreen = document.querySelector(".option-one-screen")
let optionTwoScreen = document.querySelector(".option-two-screen")

let changemymind=document.querySelector(".changed_my_mind_button")
changemymind.onclick=function(){
  optionOneScreen.style.display="block"
  optionTwoScreen.style.display="none"
}
letsButton.onclick=function(){
  optionOneScreen.style.display="block"

};
nahButton.onclick=function(){
    optionTwoScreen.style.display="block"

}

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/
