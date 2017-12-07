$(document).ready(function() {
	$('#fullpage').fullpage();
  $('#example1').timeliny({
    order: 'asc',
		className: 'timeliny',
		wrapper: '<div class="timeliny-wrapper"></div>',
		boundaries: 2,
		animationSpeed: 250,
    hideBlankYears: true,
		onInit: function() {},
		onDestroy: function() {},
		afterLoad: function(currYear) {},
		onLeave: function(currYear, nextYear) {},
		afterChange: function(currYear) {},
		afterResize: function() {}
  });
});
