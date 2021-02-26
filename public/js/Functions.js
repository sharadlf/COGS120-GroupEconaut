$(document).ready(function() {
    initializePage();
});

function initializePage(){
    // $(".comparing").show();
    $("a.testlink").click(cardShow);

    /* function variableStore(e){
        e.preventDefault();
        var a = $(this).attr('id');
    } */


    }

function cardShow(e){
  e.preventDefault();
  var carID = $(this).attr('id');
  console.log(carID);
  $("#" + carID).toggle();
  // $("#jeep1").toggle();
  // $(this).css("margin", "2em");
  console.log("is it working?")
}
