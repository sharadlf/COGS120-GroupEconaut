function initializePage(){

    $('img.comparisonimg').click(comparisonSelect);

    function comparisonSelect(e){
        $(this).css("background-color", "#9370db");
    }

}

