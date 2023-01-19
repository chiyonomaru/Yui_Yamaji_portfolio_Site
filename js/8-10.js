$(window).on('load', function () {
  //テキストごとにspanタグを生成する
  var element = $(".typing");
  var thisChild = ""
  element.each(function () {
    var text = $(this).html();
    var textbox = "";
    text.split('').forEach(function (target) {
      if (target !== " ") {
        textbox += '<span>' + target + '</span>';
      } else {
        textbox += target;
      }
    });
    $(this).html(textbox);
  });
  
  // タイピングアニメーション
   $(element).each(function () {
      thisChild = $(this).children(); //生成したspanタグを取得
      thisChild.each(function (i) {
        var time = 100;
        $(this).delay(time * i).fadeIn(time);
      });
  });
});
