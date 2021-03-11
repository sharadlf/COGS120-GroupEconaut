$(document).ready(function() {
    initializePage();
});

function initializePage(){
    // $(".comparing").show();
    $("a.testlink").click(cardShow);
    $("a.product").click(productShow);

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

function productShow(e){
  //e.preventDefault();
  var modelID = $(this).attr('id');
  console.log("car brand: " + modelID);
  localStorage.setItem("model1",modelID);

}
