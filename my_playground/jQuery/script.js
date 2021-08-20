'use strict'

$('h1').css('color', 'darkgreen');
$('h1').css('cursor', 'pointer');
$('h1').addClass('big-title margin-50');

$('button').css('background-color', 'coral');

$('h1').removeClass('margin-50');


$('h1').text('Aloha');

$('button').html('<em> Click me! </em>');

$('a').attr('href', 'https://www.facebook.com');

$('h1').click(function () {
    $('h1').css('color', '#333')
});

$('button').click(function () {
    $('h1').css('color', 'white');
});

$('h1').on('mouseover', function () {
    $('h1').css('color', 'navy');
})

$('h1').prepend('<button>New</button>');
$('h1').prepend('<button>New</button>');

// $('button').remove();