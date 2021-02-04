/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navigationList= document.getElementById('navbar__list');
const Sections=document.querySelectorAll('section');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

 const Builder= ()=>{
let navigationUI='';
Sections.forEach(section =>{
  const sectionID= section.id;
  const sectionName= section.dataset.nav;
  navigationUI+= `<li><a class="menu_link" href= "#${sectionID}" > ${sectionName}   </a></li>`
});
navigationList.innerHTML= navigationUI;
 };
Builder();

// Add class 'active' to section when near top of viewport
const offset = (section) =>{
  return Math.floor(section.getBoundingClientRect().top);
};
const removeActive = (section) => {
  
  section.classList.remove('your-active-class');
  
};

const addActive= (condition, section) =>{
  
if(condition){
  
  section.classList.add('your-active-class');
  section.style.cssText = "background-color: yellow;";

  sectionid = section.id.slice(7,8) -1;
  navigationList.childNodes[sectionid].style.cssText = "background-color: yellow;";
 
};
};

const sectionActivation= ()=>{
  Sections.forEach(section => {
    const offsettrigger= offset(section);
    inviewport= () => offsettrigger < 150 && offsettrigger >- 150;
    removeActive();
    addActive(inviewport(),section);
  });
};
document.addEventListener('scroll', sectionActivation);

// Scroll to anchor ID using scrollTO event
const scrolling= () =>{
  const Links= document.querySelectorAll('.navbar__menu a');
  Links.forEach(link =>{
    link.addEventListener('click', ()=>{
      for(i=0; i<Sections; i++){
        Sections [i].addEventListener('click',sectionScroll(link));
      }
    });
  });  
};
scrolling();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

