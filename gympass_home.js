$(document).ready(function(){
  appendClassCard(data.classes);
  appendClassPages(Object.keys(pagesHash()).length);

  $('.carousel-pagination button').click(function() {
    $('.modalities-carousel').empty();
    appendClassCard(pagesHash()[$(this).data('index')]);
    $('.selected').addClass('pages').removeClass('selected');
    $(this).removeClass('pages').addClass('selected');
  })
});

function appendClassCard(array) {
  array.forEach(function(value, index, ar) {
    if (index > 3) return;
    $('.modalities-carousel').append(classCard(value));
  });
}

function classCard(object) {
  var content =
  "<div class='card'>"          +
  "<h1>"+ object.title + "</h1>"       +
  "<p>" + object.description + "</p>"  +
  "</div>"

  return content;
}

function appendClassPages(dataPages) {
  for (i = 1; i <= dataPages; i++) {
    var itenClass = '';
    if (i == 1) { itenClass = 'selected' } else { itenClass = 'pages' }
	   $('.carousel-pagination').append("<button type='button' data-index="+ i + " class=" + itenClass + "></a>");
  }
}

function pagesHash(condition) {
  var total = data.classes.length;
  var itens = 0;
  var pages = 1;
  var hash = {};

  while (itens < total) {
    if (itens + 4 > total) {
      var arr = [];
      for(var i=itens;i < total ;i++){
        if (condition != undefined){
          if (data.classes[i].type == condition) { arr.push(data.classes[i]) }
        }else {
          arr.push(data.classes[i]);
        }
      }
      hash[pages] = arr
      var count = total - itens;
      itens = itens + count;
    } else {
      var arr = [];
      for(var i=itens;i< itens+4;i++){
        if (condition != undefined){
          if (data.classes[i].type == condition) { arr.push(data.classes[i]) }
        }else {
          arr.push(data.classes[i]);
        }
      }
      hash[pages] = arr
      var count = 4;
      itens = itens + 4;
    }
      pages ++;
  }
  return hash;
}
