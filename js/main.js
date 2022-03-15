/****MENU**** */

document.querySelector('#espresso').addEventListener('click', espressoMenu);
document.querySelector('#coffee').addEventListener('click', coffeeMenu);
document.querySelector('#dessert').addEventListener('click', dessertMenu);


function espressoMenu () {
  document.querySelector('#espressoMenu').classList.remove('hidden')
  document.querySelector('#coffeeMenu').classList.add('hidden')
  document.querySelector('#dessertMenu').classList.add('hidden')
}
function coffeeMenu () {
  document.querySelector('#espressoMenu').classList.add('hidden')
  document.querySelector('#coffeeMenu').classList.remove('hidden')
  document.querySelector('#dessertMenu').classList.add('hidden')
}
function dessertMenu () {
  document.querySelector('#espressoMenu').classList.add('hidden')
  document.querySelector('#coffeeMenu').classList.add('hidden')
  document.querySelector('#dessertMenu').classList.remove('hidden')
}


/****FADE IN PAGE SECTIONS*****/

const items = document.querySelectorAll('.tag');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('visible'); 
        }
        // else{
        //     entry.target.classList.remove('visible'); 
        // }
    });
}

const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }

 /****FADE IN FOR MENU****/
 
const menuitems = document.querySelectorAll('.tagmenu');

const activeMenu = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('visible'); 
        } else{
            entry.target.classList.remove('visible'); 
        }
    });
}

const io3 = new IntersectionObserver(activeMenu);
 for(let i=0; i < menuitems.length; i++){
    io3.observe(menuitems[i]);
 }