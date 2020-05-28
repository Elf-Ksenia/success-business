
$(function () {
  $('.map-dropdown').hide();
  $('.select-region').click(function () {
    $('.map-dropdown').slideToggle();
  });
});

$(function () {
  $('.dropup-img').hide();
  $('.select-region').click(function () {
    $('.dropup-img').slideToggle();
  });
});


$(document).ready(function () {
  $('.parent-checkbox').on('click', function () {
    if ($().prop('checked', true)) {
      $(this).next().toggleClass('checked').next().slideToggle();
    }
  });
});

