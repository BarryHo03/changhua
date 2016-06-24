function deselect(selectItem, popoutItem) {
  $(popoutItem).slideFadeToggle(function() {
    selectItem.removeClass('selected');
  });    
}


function popout(selectItem, popoutItem){
 	$(selectItem).on('click', function(event) {

      $(this).addClass('selected');
      $(popoutItem).slideFadeToggle();
      event.stopPropagation();
      event.preventDefault();
      console.log(selectItem);
      return false;
  	});	
}

function close(selectItem,closeItem,popoutItem){
	$(closeItem).on('click', function() {
		deselect($(selectItem),popoutItem);
		return false;
	});
}

//#1 breakfast introduce
popout('#intro_link1','#f1');
close('#intro_link1','#c1', '#f1');

//#2 breakfast introduce
popout('#intro_link2','#f2');
close('#intro_link2','#c2', '#f2');


$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle'}, 'fast', easing, callback);
};
