// jQuery 関連関数  /////////////////////////////////////////////////////////////
//loading
$(window).on('load',function(){
  $("#loading").delay(2000).fadeOut('slow');
  $("#loading_inner").delay(1600).fadeOut('slow');
});

////////////////////////////////////////////////
$(function (){

  // レスポンシブ/////////////////////////////////

    // Window幅に応じたメニュー表示の変更
   
    function ShowAndHide(win){
      if(win > 769){
        $("#button").show();
        $("#menu").hide();
      }else{
        $("#button").hide();
        $("#menu").show();
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



   // Smooth Scroll ////////////////////////////////

   $('a[href^="#"]').click(function() {
      // スクロールの速度(ms)
      var speed = 500;
      // アンカーを取得
      var anchor = $(this).attr("href");
      // ターゲットの位置を取得
      var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
      var position = target.offset().top -80;
      // スクロール（アニメーション）
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

   // Slider ////////////////////////////////////
   /*
   $('.bxslider').bxSlider({
     auto:true,
     speed:1000,
     pager:true
   });
   */

});






// サブ関数 ///////////////////////
