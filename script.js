$(document).ready(function() {
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