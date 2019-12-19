$(document).ready(function() {

 //move the image in pixel
 var move = -30;
 
 //zoom percentage, 1.2 =120%
 var zoom = 1.2;

 //On mouse over those thumbnail
 $('list li').hover(function() {
  
  //Set the width and height according to the zoom percentage
  width = $('list li').width() * zoom;
  height = $('list li').height() * zoom;
  
  //Move and zoom the image
  $(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'margin-top':move, 'margin-left':move}, {duration:200});
  
  //Display the caption
  $(this).find('pre').stop(false,true).fadeIn(200);
 },
 function() {
  //Reset the image
  $(this).find('img').stop(false,true).animate({'width':$('list li').width(), 'height':$('list li').height(), 'margin-top':'0', 'margin-left':'0'}, {duration:100}); 

  //Hide the caption
  $(this).find('pre').stop(false,true).fadeOut(200);
 });

});