const ion = document.querySelector('#ionic');

window.addEventListener('scroll',function(){
   let value = window.scrollY

   ion.style.transform=`rotate(${value*0.6}deg)`

})



function startForm(){
    // const block = document.querySelector('#blockForm');
    // const main = document.querySelector('main')
    // block.style.display="block"
 



}


function endForm(){
    // const block = document.querySelector('#blockForm');

    // block.style.display="none"



}