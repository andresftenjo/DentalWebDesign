$(document).ready(function() {
    var settings = {auto: true,            
                              speed: 400,            
                              timeout: 4000,         
                              pager: false,          
                              nav: true,            
                              random: false,          
                              pause: false,           
                              pauseControls: false,    
                              prevText: "",  
                              nextText: "",      
                              maxwidth: "",           
                              navContainer: "",      
                              manualControls: "",    
                              namespace: "rslides",   
                              before: function(){
                                  $('.rslides1_nav.prev').html('<span class="arrow glyphicon glyphicon-menu-left"></span>');
                                  $('.rslides1_nav.next').html('<span class="arrow glyphicon glyphicon-menu-right"></span>');
                              },   
                              after: function(){}     
                            }
    $(function() {
    	$('.rslides').responsiveSlides(settings);
    });
});


