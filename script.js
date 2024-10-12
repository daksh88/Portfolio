
  document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.querySelector('#extra-curricular-carousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 4000, // Slide every 4 seconds
      ride: 'carousel'
    });
  });

