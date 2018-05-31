$(document).ready(function() {
  $("#dropdown").submit(function(event){

    var animal= $("#animal").val();

    if (animal === "lionclick") {
      $('#lions').show();
      $('#tigers,#bears').hide();
    } else if (animal === "tigerclick") {
      $('#tigers').show();
      $('#lions,#bears').hide();
    } else if (animal === "bearclick") {
      $('#bears').show();
      $('#tigers,#lions').hide();
    } else {
      alert("try again");
    }
        event.preventDefault();
  });
});
