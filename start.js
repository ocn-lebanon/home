let startbtn = document.getElementById("start");
let arabbtn = document.getElementById("arab");
let engbtn = document.getElementById("eng");
let lan_text = document.getElementById("lan-elem");
let body = document.getElementById("body_id");

function start() {
  // setTimeout(circle_motions,300)
  setTimeout(lang_animate, 550);
  setTimeout(arab_btn_animate, 750);
  setTimeout(eng_btn_animate, 1000);
}

function lang_animate() {
  lan_text.classList.add("lang_box_animation");
}

function arab_btn_animate() {
  arabbtn.classList.add("arab");
}
function eng_btn_animate() {
  engbtn.classList.add("eng");
}
start();
