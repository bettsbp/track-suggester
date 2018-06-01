$(document).ready(function() {
  $("#track").submit(function(event) {
    var scoreOne = parseInt($("input:radio[name=track1]:checked").val());
    var scoreTwo = parseInt($("input:radio[name=track2]:checked").val());
    var scoreThree = parseInt($("input:radio[name=track3]:checked").val());
    var scoreFour = parseInt($("input:radio[name=track4]:checked").val());
    var scoreFive = parseInt($("input:radio[name=track5]:checked").val());
    var finalScore = (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFour)
    var inputName = $("input#name").val();
    if (finalScore >= 5 && finalScore <= 9) {
    $("#ruby").show();
    $("#css").hide();
    $("#csharp").hide();
    $(".name").text(inputName);
  } else if (finalScore >= 10 && finalScore <= 12) {
    $("#css").show();
    $("#ruby").hide();
    $("#csharp").hide();
    $(".name").text(inputName);
  } else if (finalScore >= 13 && finalScore <= 15) {
    $("#css").hide();
    $("#ruby").hide();
    $("#csharp").show();
    $(".name").text(inputName);
  } else {
    $("#css").hide();
    $("#ruby").hide();
    $("#csharp").hide();
    alert("Error: Please answer all the questions");
  }
  event.preventDefault();
  });
});
