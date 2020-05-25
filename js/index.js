jQuery(window).load(function () { // Нам нужно дождаться, пока вся графика (и наша карта тоже) загрузится, поэтому используем window.onload,
  var svgobject = document.getElementById('svgmap'); // Находим тег <object>
  if ('contentDocument' in svgobject) {              // У нас действительно там что-то есть?
    var svgdom = jQuery(svgobject.contentDocument);  // Получаем доступ к объектной модели SVG-файла
    // Теперь делаем свою работу, например:
    jQuery("#figure1", svgdom).attr("fill", "red");  // Находим тег с id="figure1" в SVG DOM и заливаем его красным
  }	
});