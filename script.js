$(document).ready(function() {
    // Handle nav clicks
    $('.nav-link').click(function(e) {
  e.preventDefault();
  const target = $(this).data('target');

  $('.content-section').hide();
  $('#' + target).fadeIn(200);

  if (target === 'contact') {
  setTimeout(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, 200); // Matches the fade-in timing
}


  // Special case: scroll to #plans if Home is clicked
  if (target === 'home') {
    setTimeout(() => {
      const plansHeading = document.getElementById('plans');
      if (plansHeading) {
        const yOffset = -80; // Adjust based on your nav height
        const y = plansHeading.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 200); // match fadeIn timing
  }
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

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

  document.getElementById('prevSlide').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  document.getElementById('nextSlide').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  document.addEventListener('DOMContentLoaded', () => {
  const trustBar = document.querySelector('.trust-bar');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          trustBar.classList.add('animate');
          observer.unobserve(trustBar); // animate only once
        }
      });
    },
    {
      threshold: 0.5
    }
  );

  if (trustBar) {
    observer.observe(trustBar);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const benefits = document.querySelectorAll('.benefit');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a delay before starting the staggered animation
        setTimeout(() => {
          benefits.forEach((benefit, index) => {
            setTimeout(() => {
              benefit.classList.add('animate');
            }, index * 500); // stagger by 500ms
          });
        }, 300); // initial delay before stagger begins

        observer.unobserve(entry.target); // animate only once
      }
    });
  },
  { threshold: 1 } // this is the correct place for threshold
);

  if (benefits.length > 0) {
    observer.observe(document.querySelector('.benefits-bar'));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const planCards = document.querySelectorAll('.plan');

  planCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Prevent conflict if user clicks the See Example button
      if (e.target.closest('.see-example')) return;

      const selectedPlan = card.getAttribute('data-plan');

      // Show contact section
      document.querySelectorAll('.content-section').forEach(el => el.style.display = 'none');
      document.getElementById('contact').style.display = 'block';

      // Set plan dropdown
      const planSelect = document.getElementById('plan');
      if (planSelect) {
        planSelect.value = selectedPlan;
      }

      const offset = -80; // Adjust based on your sticky nav height
      const y = planSelect.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slideText = document.querySelector('.fade-on-scroll');

  if (!slideText) return;

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          slideText.classList.add('animate');
          observer.unobserve(slideText);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(slideText);
});
