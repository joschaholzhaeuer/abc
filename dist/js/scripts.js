/******************************************************************
JAVASCRIPT: MAIN.JS

******************************************************************/

$(document).ready(function() {

    // animate label after input label selected
    $(document).on('focus', '.form-input', function() {
        var $this = $(this);
        $this.prev().addClass('is-selected');
    });

    $(document).on('focusout', '.form-input', function() {
        var $this = $(this);
        $this.prev().removeClass('is-selected');
    });

    // add focus on input field after form label click
    $('.form-label').click(function(event) {
        $(this).next().focus();
    });

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