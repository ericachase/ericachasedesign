$(document).ready(function() {


$('.name span').each(function() {
		$(this).css('top', 
								
(Math.floor(Math.random() * 60) + 20) + '%');
	});

var num = 1;

setInterval(function() {
	if(num == 4) {
		num = 1;
	}
	$('body').attr('class', 'img' + num);
	num++;
	$('.name span').each(function() {
		$(this).css('top', 
(Math.floor(Math.random() * 75) + 10) + '%');
	});
}, 6000);

});

$(function(){
	$(window).resize(function(){
	placeFooter();
	});
	placeFooter();
	// hide it before it's positioned
	$('#footer').css('display','inline');
	});

	function placeFooter() {    
	var windHeight = $(window).height();
	var footerHeight = $('#footer').height();
	var offset = parseInt(windHeight) - parseInt(footerHeight);
	$('#footer').css('top',offset);
}

 $( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );
