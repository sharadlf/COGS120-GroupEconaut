function initializePage(){

    $(".comparisonimg").click(variableStore);

    function variableStore(e){
        e.preventDefault();
        var a = $(this).attr('id');
    }
    
}