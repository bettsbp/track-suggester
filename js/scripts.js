$(document).ready(function() {
  $("#track").submit(function(event) {

    var scoreOne = parseInt($("input:radio[name=track1]:checked").val());
    var scoreTwo = parseInt($("input:radio[name=track2]:checked").val());
    var scoreThree = parseInt($("input:radio[name=track3]:checked").val());
    var scoreFour = parseInt($("input:radio[name=track4]:checked").val());
    var scoreFive = parseInt($("input:radio[name=track5]:checked").val());

    if (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive <= 5) {
      ("#ruby").show();
      ("#css").hide();
    } else if (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive >= 6 ){
      ("#css").show();
      ("ruby").hide();
    }

    event.preventDefault();
  });
});
