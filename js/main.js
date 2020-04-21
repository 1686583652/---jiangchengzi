; $(function () {
  'use strict';
  var sidebar = $('#sidebar'),//选择侧栏
    mask = $('.mask'),
    backButton = $('.back-to-top'),
    sidebar_trigger = $('#sidebar_trigger');
  function showSideBat() {
    mask.fadeIn();
    sidebar.animate({ 'right': 0 });
  }
  function hideSideBat() {
    mask.fadeOut();
    sidebar.animate({ 'right': -sidebar.width() });
  }
  function backToTop() {
    // console.log('top');
    $('html,body').animate({ scrollTop: 0 }, 800);
  }
  function hidebackButton() {
    if ($(window).scrollTop() > $(window).height()) {
      backButton.fadeIn();
    } else
      backButton.fadeOut();
  }
  sidebar_trigger.on('click', showSideBat);
  mask.on('click', hideSideBat);
  backButton.on('click', backToTop);
  $(window).on('scroll', hidebackButton);
  $(window).trigger('scroll');
})