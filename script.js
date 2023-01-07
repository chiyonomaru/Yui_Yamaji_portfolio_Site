
//loading
$(window).on('load',function(){
  $("#loading").delay(2000).fadeOut('slow');
  $("#loading_inner").delay(1600).fadeOut('slow');
});
// Window幅に応じたメニュー表示の変更
function ShowAndHide(win){
  if(win < 769){
    $("#button").show();
    $("#lists").hide();
  }else{
    $("#button").hide();
    $("#lists").show();
  }
}

$( function(){

  // 初めてページを開いた時の状態チェック
  ShowAndHide($(window).width());

  // Windowサイズが変更された時の状態チェック
  $(window).resize(function(){
    ShowAndHide($(window).width());
  });

  // メニューボタンクリック時のトグル動作
  $("#button").click( function () {
    $("#lists").slideToggle();
  });

});


//loading
$(window).on('load',function(){
  $("#loading").delay(2000).fadeOut('slow');
  $("#loading_inner").delay(1600).fadeOut('slow');
});

////////////////////////////////////////////////

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {  //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'bottom': '50px' //下から50pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'bottom': '-50px' //下から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});


// Window幅に応じたメニュー表示の変更
function ShowAndHide(win){
  if(win < 769){
    $("#button").show();
    $("#lists").hide();
  }else{
    $("#button").hide();
    $("#lists").show();
  }
}

$( function(){

  // 初めてページを開いた時の状態チェック
  ShowAndHide($(window).width());

  // Windowサイズが変更された時の状態チェック
  $(window).resize(function(){
    ShowAndHide($(window).width());
  });

  // メニューボタンクリック時のトグル動作
  $("#button").click( function () {
    $("#lists").slideToggle();
  });

});


////////////////////////////////////////////////




