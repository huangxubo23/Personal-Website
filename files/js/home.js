$(document).ready(function() {
		my_engineer.init();
  $('#welcome').fullpage({
	loopBottom: true,
    'verticalCentered': false,
	'css3': true,
	'sectionsColor': ['#041528','#e89c38', '#40a3e1'],  //'#6cbb52'
	'navigation': true,
	'navigationPosition': 'right',
			//'easing' : 'easeInOutBounce',
			'afterRender' : function (index,anchorLink ) {
				$(".home_photo").addClass('fadeInTop');
			},
			'afterSlideLoad':function(index ) {

			}
			,
	'afterLoad': function(anchorLink, index){
				if( index == 2) {
					$(".home_photo").removeClass('fadeInTop');
				}
				if(index==3){
					my_engineer.init();
				}
				if(index==1){
					my_engineer.init();
				}
				if(index==2){
					my_skills.init();
				}

	},
	'onLeave': function(index, nextIndex, direction){
	  if( nextIndex  == 1 ) {
					$(".iphone_img").addClass('fadeInTop');
				}
				if(index==1){
					my_engineer.anim();
				}
				if(index==3){
					my_engineer.anim();
				}
				if(index==2){
					my_skills.anim();
				}
	}
  });
});