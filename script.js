const ion = document.querySelector('#ionic');

window.addEventListener('scroll',function(){
   let value = window.scrollY

   ion.style.transform=`rotate(${value*0.6}deg)`

})






function startForm(){
    const formcont = document.querySelector('#formcont');
    const blur = document.querySelector('main');
    const effectdark = document.querySelector('#blockForm');
    const body = document.querySelector('body')
    effectdark.style.display="block";
    body.style.overflow="hidden";
    blur.style.filter=" blur(3px)";
    effectdark.style.transition="2s";

}


function endForm(){
    const blur = document.querySelector('main');        
    const effectdark = document.querySelector('#blockForm');
    const body = document.querySelector('body');

    effectdark.style.display="none";

    body.style.overflow="visible";
    body.style.overflowX="hidden";
    blur.style.filter="none";


}