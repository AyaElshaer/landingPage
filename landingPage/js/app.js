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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buttonclick() {
  let x = document.getElementById("navbar__list");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const nav = document.querySelector("#navbar__list");
const sections = document.querySelectorAll("section");
let btn=document.createElement("li");
btn.innerHTML= `<a href="javascript:void(0);" class="icon" onclick="buttonclick()">
<i class="fa fa-bars"></i>

  </a>`;
for(section of sections){
  const  li = document.createElement('li');
  const links = document.createElement('a');
  links.setAttribute("href" , `#${section.id}`);
  let sectionname= `${section.id}`
  links.textContent=(sectionname);
  links.className="menu"; 
   li.appendChild(links);
  nav.appendChild(li);
}
nav.appendChild(btn);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

  for(section of sections){
    const links = document.querySelectorAll(".menu");
    links.forEach(link => {
      link.addEventListener('click' , function(evt){
        evt.preventDefault();
        var section=document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({behavior:"smooth"});
        
    })
      
    });
     
    }
  

 

// Set link as active

const links = document.querySelectorAll(".menu");
links.forEach((link) => {
  link.addEventListener('click' , function(){
    links.forEach((link) => {
      link.classList.remove("active");
      
    })
    
    link.classList.add("active");
  })
})




// Set sections as active

const Sections = document.querySelectorAll("section");

onscroll = function (){
  var scrollPostion = document.documentElement.scrollTop;
  Sections.forEach(section => {
    if(scrollPostion >= section.offsetTop - section.offsetHeight*0.25 &&
       scrollPostion < section.offsetTop +section.offsetHeight - section.offsetHeight*0.25  ){
        Sections.forEach(section =>{
          section.classList.remove("activeSection");
      })
      section.classList.add("activeSection");



    }
  })
}








