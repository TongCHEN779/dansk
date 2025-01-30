/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function updateNav() {

  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // The visible list is overflowing the nav
  if($vlinks.width() > availableSpace) {

    // Record the width of the list
    breaks.push($vlinks.width());

    // Move item to the hidden list
    $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

    // Show the dropdown btn
    if($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }

  // The visible list is not overflowing
  } else {

    // There is space for another item in the nav
    if(availableSpace > breaks[breaks.length-1]) {

      // Move the item to the visible list
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    if(breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Keep counter updated
  $btn.attr("count", breaks.length);

  // Recur if the visible list is still overflowing the nav
  if($vlinks.width() > availableSpace) {
    updateNav();
  }

}

// Window listeners

$(window).resize(function() {
  updateNav();
});

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();

// function updateNav() {
//   var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

//   // 获取不包含子菜单的宽度
//   var visibleWidth = 0;
//   $vlinks.children(':not(.submenu)').each(function() {
//     visibleWidth += $(this).outerWidth(true);  // 计算单个菜单项的宽度
//   });

//   // The visible list is overflowing the nav
//   if (visibleWidth > availableSpace) {
//     breaks.push(visibleWidth);

//     // 仅移动 **主菜单项**（排除有子菜单的项）
//     $vlinks.children('*:not(.masthead__menu-item--lg, .has-submenu)').last().prependTo($hlinks);

//     if ($btn.hasClass('hidden')) {
//       $btn.removeClass('hidden');
//     }

//   } else {
//     if (availableSpace > breaks[breaks.length - 1]) {
//       $hlinks.children().first().appendTo($vlinks);
//       breaks.pop();
//     }

//     if (breaks.length < 1) {
//       $btn.addClass('hidden');
//       $hlinks.addClass('hidden');
//     }
//   }

//   $btn.attr("count", breaks.length);

//   // 避免无限递归
//   if (visibleWidth > availableSpace && breaks.length < $vlinks.children().length) {
//     updateNav();
//   }
// }

// // 监听窗口变化
// $(window).resize(function() {
//   setTimeout(updateNav, 100);  // 延迟执行，避免抖动
// });

// $btn.on('click', function() {
//   $hlinks.toggleClass('hidden');
//   $(this).toggleClass('close');
// });

// // 初始加载时调用
// setTimeout(updateNav, 100);
