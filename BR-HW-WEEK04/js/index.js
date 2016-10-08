//Implement the red light using jQuery. Don't forget to add the script tags.
/*
  Play with:
  .click
  .slideToggle() 
  .hide()
  .show()
  .slideUp()
  .slideDown()
  .children()
  .attr()
  For Example:
*/

$(function(){
  
$('#show').click(function(){
    $('#secondP').show();
     console.log("trying to show");
  });
  

$('#hide').click(function(){
    $('#secondP').hide();
     console.log("trying to hide");
  });

});

