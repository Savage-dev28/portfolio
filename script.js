//home
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Add 'active' class when element is in view
      } else {
        entry.target.classList.remove('active'); // Remove 'active' class when out of view (optional)
      }
    });
  }, {
    threshold: 0.2 // Trigger animation when 20% of the element is visible
  });

  // Observe all elements with the class "animate-on-scroll"
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
    observer.observe(element);
  });
});

//education row
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Add 'active' class when element is in view
      } else {
        entry.target.classList.remove('active'); // Remove 'active' class when out of view (optional)
      }
    });
  }, {
    threshold: 0.2 // Trigger animation when 20% of the element is visible
  });

  // Observe all elements with the class "animate-on-scroll"
  document.querySelectorAll('.animate-on-scroll .row').forEach(element => {
    observer.observe(element);
  });
});

//past project
document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Add 'active' class when element is in view
      } else {
        entry.target.classList.remove('active'); // Remove 'active' class when out of view (optional)
      }
    });
  }, {
    threshold: 0.2 // Trigger animation when 20% of the element is visible
  });

  // Observe all elements with the class "animate-on-scroll"
  document.querySelectorAll('.animate-on-scroll .highlight').forEach(element => {
    observer.observe(element);
  });
});

  //resume Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          window.scrollTo({
              top: targetElement.offsetTop - 50, // Adjust for header or padding
              behavior: 'smooth'
          });
      }
  });
});

// Resume Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          } else {
              entry.target.classList.remove('active');
          }
      });
  }, {
      threshold: 0.2 // Trigger when 20% of the element is visible
  });

  // Observe all elements with the class "animate-on-scroll"
  document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
  });
});

//Form validation
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const loading = document.querySelector('.loading');
  const errorMessage = document.querySelector('.error-message');
  const sentMessage = document.querySelector('.sent-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous messages
    loading.style.display = 'block';
    errorMessage.style.display = 'none';
    sentMessage.style.display = 'none';

    // Simulate form submission (replace this with actual backend logic)
    setTimeout(() => {
      loading.style.display = 'none';

      // Basic Validation
      const name = form.querySelector('#name-field').value.trim();
      const email = form.querySelector('#email-field').value.trim();
      const subject = form.querySelector('#subject-field').value.trim();
      const message = form.querySelector('#message-field').value.trim();

      if (!name || !email || !subject || !message) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
      }

      if (!validateEmail(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
      }

      // Success State
      sentMessage.style.display = 'block';
      form.reset();
    }, 2000); // Simulated delay for loading
  });

  // Email Validation Function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
});