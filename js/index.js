
$(function () {
  $('.map-dropdown').hide();
  $('.select-region').click(function () {
    $('.map-dropdown').slideToggle();
  });
});


$(document).ready(function () {
  $('.parent-checkbox').on('click', function () {
    if ($().prop('checked', true)) {
      $(this).next().toggleClass('checked').next().slideToggle();
    }
  });
});

