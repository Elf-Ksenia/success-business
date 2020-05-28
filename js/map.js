$(document).ready(function () {

  var $dropMenu1 = $('.dropdown-menu');

  $dropMenu1.hover(function () {

    var $this = $(this);

    $this.show();
    var mapItem = $('.map-item').attr('id');
    $('#' + mapItem).addClass("hovered");
    $this.addClass("hovered");

  }, function () {

    var $this = $(this);

    $this.hide();
    $this.removeClass("hovered");

  })

  $(".map-item").hover(function () {

    var $this = $(this);

    $this.addClass("hovered");
    var $dropMenu = $this.attr('data-menu-id');
    $("#" + $dropMenu).show();

  }, function () {

    var $this = $(this);

    var $dropMenu = $this.attr('data-menu-id');

    if ($("#" + $dropMenu).hasClass('hovered')) {

    } else {
      $("#" + $dropMenu).hide();
      $this.removeClass("hovered");
    }

  })

})





