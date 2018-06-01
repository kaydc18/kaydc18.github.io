(function() {

var modalLinks = document.getElementsByClassName('modal-link');
for (var i = 0; i < modalLinks.length; i++) {
modalLinks[i].addEventListener('click', function(evt){
  evt.preventDefault();



var modalId = this.getAttribute('data-modal');

var modal = document.getElementById(modalId);
modal.classList.add('open');




});

}

var modalClose = document.getElementsByClassName('modal-content__close');

for (var i = 0; i < modalClose.length; i++) {
modalClose[i].addEventListener('click', function() {
  var openModal = document.querySelector('.open');
openModal.classList.remove('open');
});
}




// Get an individual input
 var webDevInput = document.getElementById('filter1');
 var projects = document.getElementsByClassName('project');
 webDevInput.addEventListener('change', function() {
   console.log('changed!');
   for (var k = 0; k < projects.length; k++) {
     // Does the project have a data-category === '1'

     var projectCategory = projects[k].getAttribute('data-category');
     console.log(projectCategory);
     if (projectCategory === '1') {
       // It matches! Let's activate
       projects[k].classList.add('active');
     } else {
       // No match -- remove the class!
       projects[k].classList.remove('active');
     }
   }
 });
//if project doesn't have catagory remove active classList

//if project does have catagory add active class



})();
