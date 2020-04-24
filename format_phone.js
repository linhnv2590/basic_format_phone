$(document).ready(function() {
  format_phone(".format-phone", "#errmsg_phone_number", 13);
});

function format_phone(input, errmsg, max_length) {
  $(input).keypress(function (e) {
    var keyCode = e.which;

    if ((keyCode != 8 || keyCode == 32) && (keyCode < 48 || keyCode > 57)) {
      $(errmsg).html('Digit Only').show().fadeOut('slow');
      return false;
    }

    var curchr = this.value.length;
    var curval = $(this).val();

    if (curchr == 3 && e.which != 8 && e.which != 0) {
      $(this).val(curval + '-');
    } else if (curchr == 8 && e.which != 8 && e.which != 0) {
      $(this).val(curval + '-');
    }

    $(this).attr('maxlength', max_length);
  });
}