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