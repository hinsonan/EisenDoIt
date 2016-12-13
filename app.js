$(document).ready(function main(){
    'use strict'
    
    //puts the input in the corect box
    $("#btnOne").click(function(){
        //grab user input
        var usrInput = $("#task").val();
        var p = "<p class='deleteBoxOne'>" + usrInput +"</p>";
        
        //put user input in the correct box
        $(p).appendTo(".sortOne");
        
    });
    
    $("#btnTwo").click(function(){
        //grab user input
        var usrInput = $("#task").val();
        var p = "<p class='deleteBoxTwo'>" + usrInput +"</p>";
        
        //put user input in the correct box
        $(p).appendTo(".sortTwo");
        
    });
    
    $("#btnThree").click(function(){
        //grab user input
        var usrInput = $("#task").val();
        var p = "<p class='deleteBoxThree'>" + usrInput +"</p>";
        
        //put user input in the correct box
        $(p).appendTo(".sortThree");
        
    });
    
    $("#btnFour").click(function(){
        //grab user input
        var usrInput = $("#task").val();
        var p = "<p class='deleteBoxFour'>" + usrInput +"</p>";
       
        //put user input in the correct box
        $(p).appendTo(".sortFour");
        
    });
    
    //deletes the last element
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
    
    //makes the items sortable
    $( ".sortable" ).sortable({
        connectWith: ".connectedSortable"
    });
    $( ".sortable" ).disableSelection();
    
   
   
  
   
    
    
});