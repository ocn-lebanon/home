let startbtn= document.getElementById('start');
let arabbtn= document.getElementById('arab');
let engbtn= document.getElementById('eng');
let lan_text=document.getElementById("lan-elem")
let body=document.getElementById("body_id")

startbtn.addEventListener('click',start);
body.addEventListener('click',leave)



function start(){
setTimeout(circle_motions,300)
setTimeout(ff,550)


}


function circle_motions() {
    arabbtn.classList.add("arabic_expand_btn");
    engbtn.classList.add("eng_expand_btn");


  }
  function circle_motions_remove() {
    arabbtn.classList.remove("arabic_expand_btn");
    engbtn.classList.remove("eng_expand_btn");


  }

  function ff( ) {
    arabbtn.classList.add("arabic_expand_btn2");
    engbtn.classList.add("eng_expand_btn2");
    startbtn.classList.add("startbtnexpand")
    lan_text.classList.add("language-box-show")





    }

    function ff_remove( ) {
      arabbtn.classList.remove("arabic_expand_btn2");
      engbtn.classList.remove("eng_expand_btn2");
      startbtn.classList.remove("startbtnexpand")
      lan_text.classList.remove("language-box-show")
  
  
  
  
  
      }


    function leave() {
      setTimeout(ff_remove,100)
      setTimeout(circle_motions_remove,250)

    }  