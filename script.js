// Feature Cards Swiper
const featureSwiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  speed: 5000,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  freeMode: true,
  freeModeMomentum: false,
});

// How It Works Tabs
document.addEventListener('DOMContentLoaded', function() {
  const tabMenuItems = document.querySelectorAll('.print-tab-menu li');
  const tabContents = document.querySelectorAll('.print-tab-content > div');
  
  tabMenuItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      // Remove active class from all items
      tabMenuItems.forEach(tab => tab.classList.remove('active'));
      
      // Add active class to clicked item
      this.classList.add('active');
      
      // Hide all tab contents
      tabContents.forEach(content => content.classList.remove('view'));
      
      // Show corresponding content
      tabContents[index].classList.add('view');
    });
  });
});

// Testimonials Swiper
const testimonialsSwiper = new Swiper('.testimonials-slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      const totalSlides = this.slides.length;
      const currentIndex = this.realIndex;
      const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
      
      document.querySelector('.progress-fill').style.width = progressPercent + '%';
    },
  },
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
