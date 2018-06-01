$(document).ready(function() {
  $("#track").submit(function(event) {
    var score = parseInt($("input#track").val());

    if (score === 5) {
      ("#ruby").show();
    }

    event.preventDefault();
  });
});
