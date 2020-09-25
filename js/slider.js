const slider = $('.reviews__content').bxSlider({
  pager: false,
  controls: false
});

$('.slider--prev').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
})

$('.slider--next').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
})