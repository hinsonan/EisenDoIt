$(document).ready(function main(){
    'use strict'
    var input;
    $("#btnOne").click(function(){
        //grab user input
        var usrInput = $("#task").val();
        var p = "<p class='deleteBoxOne'>" + usrInput +"</p>";
        input = p;
        //put user input in the correct box
        $(p).insertAfter("#checkOne");
        
    });
    
    $("#btnTwo").click(function(){
        //grab user input
        var usrInput = $("#task").val();
        var p = "<p class='deleteBoxTwo'>" + usrInput +"</p>";
        input = p;
        //put user input in the correct box
        $(p).insertAfter("#checkTwo");
        
    });
    
    $("#btnThree").click(function(){
        //grab user input
        var usrInput = $("#task").val();
        var p = "<p class='deleteBoxThree'>" + usrInput +"</p>";
        input = p;
        //put user input in the correct box
        $(p).insertAfter("#checkThree");
        
    });
    
    $("#btnFour").click(function(){
        //grab user input
        var usrInput = $("#task").val();
        var p = "<p class='deleteBoxFour'>" + usrInput +"</p>";
        input = p;
        //put user input in the correct box
        $(p).insertAfter("#checkFour");
        
    });
    
    
    $("#checkOne").on('click', function() {
        $('.deleteBoxOne').last().remove();
        
    });
    
    $("#checkTwo").on('click', function() {
        $('.deleteBoxTwo').last().remove();
        
    });
    
    $("#checkThree").on('click', function() {
        $('.deleteBoxThree').last().remove();
        
    });
    
    $("#checkFour").on('click', function() {
        $('.deleteBoxFour').last().remove();
        
    });
    
   
   
  
    /*
   $("#complete").on('mouseleave', '.col-md-6', function () {
    $(this).find(":button").hide();
}).on('click', ':button', function() {
    $(this).parent().remove();
});*/
    
    
});