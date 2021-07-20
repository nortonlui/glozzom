// Configure year on the footer

function getDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;
  return {
    today,
    day: dd,
    month: mm,
    year: yyyy,
  };
}

document.getElementById('year').textContent = getDate().year;

// Configure Slider
$('.carousel').carousel({
  interval: 6000,
  pause: 'hover',
});

// Video Play
$(function () {
  // Auto play modal video
  $('.video').click(function () {
    var theModal = $(this).data('target'),
      videoSRC = $(this).attr('data-video'),
      videoSRCauto =
        videoSRC +
        '?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1';
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
  });
});

//Lightbox Init
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Testimonials slider
$('.slide').slick({
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1,
});
