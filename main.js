/*=================================================
  ハンバーガーメニュー
===================================================*/
$(function() {
  $('.toggle_btn').on('click', function() {
  
    if ($('#header').hasClass('open')) {
        
      $('#header').removeClass('open');
        
    } else {
        
        $('#header').addClass('open');
      }
  });
          
  $('#mask').on('click', function() {
    $('#header').removeClass('open');
  });
  /*=================================================
    スクロール時のイベント
  ===================================================*/
  $(window).scroll(function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
    // let scroll = $(".main_image").text($(this).scrollTop());
    // console.log(scroll);
    $('.main_image').css({
      backgroundSize: (100 + scroll/3)  + "%",
      top: -(scroll/10)  + "%"
    });
  
    /*=================================================
      メインビジュアルの拡大・縮小
    ===================================================*/
    mv_scale(scroll);

    /*=================================================
      ロゴ、ハンバーガーメニューの表示
    ===================================================*/
    // スクロール位置が520pxを超えた場合
    if (scroll > 520) {
      // ロゴとハンバーガ―メニュをfadeInで表示する
      $('.logo').fadeIn(500);
      $('.toggle_btn').fadeIn(500);
      // スクロール位置が520px未満の場合
    } else {
      // ロゴとハンバーガ―メニュをfadeOutで非表示にする
      $('.logo').fadeOut(500);
      $('.toggle_btn').fadeOut(500);
    }

    /*=================================================
    Accessの背景画像を表示
    ===================================================*/
    // 画面下から#accessまでの距離を取得
    let access_position = $('#access').offset().top - $(window).height();
    
    // 画面下から#contactまでの距離を取得
    let contact_position = $('#contact').offset().top - $(window).height();

    // #accessが表示された場合
    if(scroll > access_position){
      // #contactが表示されるまでの間は、背景画像をfadeInで表示する
      if(scroll < contact_position){
        $('.bg').fadeIn(500);
      } else {
        $('.bg').fadeOut(500);
      }
    // #accessが表示される前の場合
    } else {
      // 背景画像を表示しない
      $('.bg').fadeOut(500);
    }
  });
  
  // Intersection Observer API
  
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
  
      entry.target.classList.add('appear');
      // 監視対象から外す
      obs.unobserve(entry.target);
    })
  }
  
  const options = {
      threshold: 0.5,
  };
  
  // Intersection Observer APIのインスタンスを取得する
  const observer = new IntersectionObserver(callback, options);
  
  const targets = document.querySelectorAll('.animate');
  
  targets.forEach(target => {
      observer.observe(target);
  });
});

/*=================================================
メインビジュアルの拡大・縮小（共通処理）scrollの設定
===================================================*/
function mv_scale(scroll) {
  // window.innerWidthで画面幅を取得
  // PC表示の場合の処理（画面幅が900pxより大きい場合　※900pxはCSSのブレークポイントとあわせる）
  if (window.innerWidth > 900) {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
    $('#mainvsual .main_image img').css({
      'width': 100/3 + scroll/10  + '%'
    });
  // スマホ表示の場合の処理（画面幅が900px以下の場合）
  } else {
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて減らすことで画像を縮小させる
    $('#mainvsual .main_image img').css({
      'width': 100 - scroll/10  + '%'
    });
  }
}

$(function (){
  // Intersection Observer API
    
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
  
      entry.target.classList.add('appear2');
      // 監視対象から外す
      obs.unobserve(entry.target);
    })
  }
  
  const options = {
      threshold: 0.5,
  };
  
  // Intersection Observer APIのインスタンスを取得する
  const observer = new IntersectionObserver(callback, options);
  
  const targets = document.querySelectorAll('.animate2');
  
  targets.forEach(target => {
      observer.observe(target);
  });
})