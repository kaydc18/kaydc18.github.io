(function() {

  var modalLinks = document.getElementsByClassName('modal-link');
  for (var i = 0; i < modalLinks.length; i++) {
    modalLinks[i].addEventListener('click', function(evt) {
      evt.preventDefault();

      // Find the modal link's data attribute value
      var modalId = this.getAttribute('data-modal');

      // Find the DOM element with that same ID
      var modal = document.getElementById(modalId);

      // Add the 'open' class to that DOM element
      modal.classList.add('open');

    });
  }

  // Find all close button elements
  var closeButtons = document.getElementsByClassName('modal-content__close');

  // Attach an event listener that removes the 'open' class from
  // a open modal element
  for (var j = 0; j < closeButtons.length; j++) {
    closeButtons[j].addEventListener('click', function() {
      var openModal = document.querySelector('.open');
      openModal.classList.remove('open');
    });
  }

  /* FILTERING SOLUTION 1:
   * This was the solution we did in class, where you add
   * an event listener to each input and filter based on that.
   * The downside is that you'd need to do this for every
   * single input, which creates a lot of code! We could make
   * a function out of it to reduce the amount of code.
   */
  // // Get an individual input
  // var webDevInput = document.getElementById('filter1');
  // Get all project inputs
  // var projects = document.getElementsByClassName('project');
  // webDevInput.addEventListener('change', function() {
  //   console.log('changed!');
  //   for (var k = 0; k < projects.length; k++) {
  //     // Does the project have a data-category === '1'

  //     var projectCategory = projects[k].getAttribute('data-category');
  //     console.log(projectCategory);
  //     if (projectCategory === '1') {
  //       // It matches! Let's activate
  //       projects[k].classList.add('active');
  //     } else {
  //       // No match -- remove the class!
  //       projects[k].classList.remove('active');
  //     }
  //   }
  // });

   /* FILTERING SOLUTION 2:
    * This solution allows us to loop through a set of filters and projects
    * by class name, which is more flexible. We'll make use of a closure
    * to fix a scoping issue.
    */
  // Get all filter input elements
  var filters = document.getElementsByClassName('portfolio-filter');
  // Get all project inputs
  var projects = document.getElementsByClassName('project');

  // Loop through each filter to add an event listener
  for (var k = 0; k < filters.length; k++) {

    // Use a closure to pass the value of k into the callback as filterIndex
    (function(filterIndex) {

      filters[filterIndex].addEventListener('change', function() {

        // When a filter changes, loop through projects
        for (var m = 0; m < projects.length; m++) {

          // Get the category from each project
          var projectCategory = projects[m].getAttribute('data-category');

          if (filterIndex === 0) {
            // Someone clicked 'All', so every project should be active
            projects[m].classList.add('active');

          } else if (projectCategory === filterIndex.toString()) {
            // It matches! Let's activate. Note that we convert m to a
            // string so we can use ===, which tests if the two
            // variables are equal in value AND type
            projects[m].classList.add('active');

          } else {
            // No match -- remove the class!
            projects[m].classList.remove('active');
          }
        }
      });
    })(k);
  }
})();
