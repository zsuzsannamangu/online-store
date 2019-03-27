$(function() {
  $("#info").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);

    $("#answer").show();

    event.preventDefault();

  });
});
