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


//add event listener to each filter
var filter = document.getElementsByClassName('portfolio-filter');
for (var i = 0; i < filter.length; i++) {
  filter.addEventlistener('click', function (evt){
   var filterId = this.getAttribute('filter');
   var project = document.getElementById(filterId);
   project.classList.add('active');



});
}

var webDevInput = document.getElementById('filter1');
var projects = document.getElementsByClassName('project');
webDevInput.addEventListener('change', function() {
console.log('changed!');
  for (var k = 0; k <projects.length; k++) {
    //does the porject have a data-catagriy === '1'

    var projectCatagory = projects[k].getAttribute('data-catagory');
      console.log(projectCatagory);
       if (projectCatagory === '1') {
      projects[k].classList.add('active');
      }
      else {
    projects[k].classList.remove('active');
      }
  }

});
//if project doesn't have catagory remove active classList

//if project does have catagory add active class



})();
