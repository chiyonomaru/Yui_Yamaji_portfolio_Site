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
