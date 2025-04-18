$(document).ready(function() {
    // Handle nav clicks
    $('.nav-link').click(function(e) {
      e.preventDefault();
      const target = $(this).data('target');
  
      $('.content-section').hide(); // Hide all
      $('#' + target).fadeIn(200);  // Show selected section
    });
  
    // Optional: Add hover description back for projects
    $('.project').each(function() {
      const info = $(this).data('info');
      $(this).append(`<div class="project-description">${info}</div>`);
    });
  
    $('.project').hover(
      function() {
        $(this).find('.project-description').slideDown(200);
      },
      function() {
        $(this).find('.project-description').slideUp(200);
      }
    );
  });

  $('.see-example').click(function(e) {
    e.preventDefault();
    const target = $(this).data('target');
  
    $('.content-section').hide();
    $('#' + target).fadeIn(200);
  });