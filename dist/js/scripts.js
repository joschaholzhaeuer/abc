/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

function animateQuotes () {

    var $firstquote = $('.box-quote--first');
    var $secondquote = $('.box-quote--second');

    if ( $secondquote.hasClass('is-hidden') === true ) {
        $firstquote.addClass('is-hidden');
        $secondquote.removeClass('is-hidden');
    } else {
        $secondquote.addClass('is-hidden');
        $firstquote.removeClass('is-hidden');
    }
}


$(document).ready(function() {

    // form error handling
    $(document).on('click', '.button', function(event) {
        var $this = $(this);

        $('.required').each(function( index ) {
            if( $(this).val() === "" ) {
                event.preventDefault();
                $('.form-error').show();
            } else {
                $('.form-error').hide();
            }
        });
    });

/*
    // animate label after input label selected
    $(document).on('focus', '.form-input', function() {
        var $this = $(this);
        $this.prev().addClass('is-selected');
    });

    $(document).on('focusout', '.form-input', function() {
        var $this = $(this),
            $val  = $this.val();

        if ( $this.val() === "" ) {
            $this.prev().removeClass('is-selected');
        }
    });


    // add focus on input field after form label click
    $('.form-label').click(function(event) {
        $(this).next().focus();
    });*/


    // display and animate quotes
    $(document).on('click', '.arrow-left, .arrow-right', function(event) {
        animateQuotes();
    });

    // set interval to automatically change quote
    window.setInterval( animateQuotes, 10000 );



}); // end (document).ready
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());