# Landing Page Project

# language used at project
CSS3 , JavaScript , Html5 , ES6

# To run project
 download code folders run `index.html`


# Project description

Landing Page project has html css and javascript element , project uses Javascript to create a NavBar dynamically that contain links to sections  in page.
Section 's link are added dynamically to navbar when added new section element to page.Click links in nav bar go to sections and active them.


## Development Strategy


#Build the navigation menu.
Select ul in navbar `querySelector()`
Select sections  `querySelectorAll()`
create li element , a tags using  method `createElement()`
append a tags to ul element then append ul to nav tag

#Add functionality to distinguish the section in view
use `forEach` for looping  sections , links
listening for an event for links `click` event
when clicked link will go to spesific section smoothly by adding
`section.scrollIntoView({behavior:"smooth"})` 
test which section should be highlighted `offsetTop - offsetHeight`
then Add active class to section and links `classList.add()`


## Project structure
js/`app.js`
css/`style.css`
`index.html`
README.md


# note
when you reach the mobile device  when you click on icon it gets the nav bar viewed verticaly





