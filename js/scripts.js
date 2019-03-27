// var add = function(number1, number2) {
//   return number1 + number2;
// }



$(function() {
  $("#info").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);

    $("#answer").show();

    event.preventDefault();

  });
    // 
    // $("#info").submit(function(event) {
    //   event.preventDefault();
    //   var number1 = parseInt($("#add1").val());
    //   var number2 = parseInt($("#add2").val());
    //   var result = add(number1, number2);
    //   $("#output").text(result);
    // });

});
