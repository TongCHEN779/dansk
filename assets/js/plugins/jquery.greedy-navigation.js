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

// function updateNav() {

//   var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

//   // The visible list is overflowing the nav
//   if($vlinks.width() > availableSpace) {

//     // Record the width of the list
//     breaks.push($vlinks.width());

//     // Move item to the hidden list
//     $vlinks.children('*:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

//     // Show the dropdown btn
//     if($btn.hasClass('hidden')) {
//       $btn.removeClass('hidden');
//     }

//   // The visible list is not overflowing
//   } else {

//     // There is space for another item in the nav
//     if(availableSpace > breaks[breaks.length-1]) {

//       // Move the item to the visible list
//       $hlinks.children().first().appendTo($vlinks);
//       breaks.pop();
//     }

//     // Hide the dropdown btn if hidden list is empty
//     if(breaks.length < 1) {
//       $btn.addClass('hidden');
//       $hlinks.addClass('hidden');
//     }
//   }

//   // Keep counter updated
//   $btn.attr("count", breaks.length);

//   // Recur if the visible list is still overflowing the nav
//   if($vlinks.width() > availableSpace) {
//     updateNav();
//   }

// }

function updateNav() {
  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  // Calculate width of only main menu items, excluding submenus
  var mainMenuWidth = 0;
  $vlinks.children('li:not(.submenu, .masthead__submenu-item)').each(function() {
    mainMenuWidth += $(this).outerWidth(true); // Include margins
  });

  // The visible list is overflowing the nav
  if (mainMenuWidth > availableSpace) {
    breaks.push(mainMenuWidth);

    // Move item to the hidden list
    $vlinks.children('li:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

    // Show the dropdown button
    if ($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }
  } else {
    // There is space for another item in the nav
    if (availableSpace > breaks[breaks.length - 1]) {
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown button if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  $btn.attr("count", breaks.length);

  if (mainMenuWidth > availableSpace) {
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