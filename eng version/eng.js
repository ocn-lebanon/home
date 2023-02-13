let one=document.getElementById("one")
let two=document.getElementById("two")
let three=document.getElementById("three")
let four=document.getElementById("four")
let five=document.getElementById("five")
let starts=document.getElementById("start")
let txt_show_btn=document.getElementById("txt_show")
starts.addEventListener('click',start)


function show_first_row() {

    one.classList.add("one_float")
 
    two.classList.add("two_float") 
    starts.classList.add("start_btn_animate")
   

}
function show_second_row() {

    three.classList.add("three_float")
 
    four.classList.add("four_float") ;
   

}
function show_third_row() {

    five.classList.add("five_float")
 
    six.classList.add("six_float") 

}
function animated_show_txt() {
    txt_show_btn.classList.add("txt_animated_show")
}

function start() {
    setTimeout(show_first_row,400)
setTimeout(show_second_row,800)
setTimeout( animated_show_txt,600)

setTimeout(show_third_row,1200)

    
}
