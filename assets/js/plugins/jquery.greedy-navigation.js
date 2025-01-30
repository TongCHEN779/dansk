/*
* Greedy Navigation
*
* http://codepen.io/lukejacksonn/pen/PwmwWV
*
*/

// var $nav = $('#site-nav');
// var $btn = $('#site-nav button');
// var $vlinks = $('#site-nav .visible-links');
// var $hlinks = $('#site-nav .hidden-links');

// var breaks = [];

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

// // Window listeners

// $(window).resize(function() {
//   updateNav();
// });

// $btn.on('click', function() {
//   $hlinks.toggleClass('hidden');
//   $(this).toggleClass('close');
// });

// updateNav();

var $nav = $('#site-nav');
var $btn = $('#site-nav button');
var $vlinks = $('#site-nav .visible-links');
var $hlinks = $('#site-nav .hidden-links');

var breaks = [];

function getMainMenuWidth() {
  var width = 0;
  $vlinks.children('li').each(function() {
    if (!$(this).find('.submenu').length) { // Exclude submenu containers
      width += $(this).outerWidth(true); // Include margins
    }
  });
  return width;
}

function updateNav() {
  var availableSpace = $btn.hasClass('hidden') ? $nav.width() : $nav.width() - $btn.width() - 30;

  var mainMenuWidth = getMainMenuWidth();

  // The visible list is overflowing the nav
  if (mainMenuWidth > availableSpace) {
    breaks.push(mainMenuWidth);

    // Move last non-submenu item to the hidden list
    $vlinks.children('li:not(.masthead__menu-item--lg)').last().prependTo($hlinks);

    // Show the dropdown button
    if ($btn.hasClass('hidden')) {
      $btn.removeClass('hidden');
    }
  } else {
    // There is space for another item in the nav
    if (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      $hlinks.children().first().appendTo($vlinks);
      breaks.pop();
    }

    // Hide the dropdown button if hidden list is empty
    if (breaks.length < 1) {
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
    }
  }

  // Update button counter
  $btn.attr("count", breaks.length);

  // Re-run the function if still overflowing
  if (getMainMenuWidth() > availableSpace) {
    updateNav();
  }
}

// Window listeners
$(window).resize(updateNav);

$btn.on('click', function() {
  $hlinks.toggleClass('hidden');
  $(this).toggleClass('close');
});

updateNav();
