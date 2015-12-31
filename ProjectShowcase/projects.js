$(document).ready(function(){

	$(document).on('click', '.container-expand',  function(){
		project = $(this).closest('.project-container');
		// Expand selected project
		if($(this).hasClass('ion-android-arrow-dropdown')){
			// Hide any other expanded projects
			if($('#project-list').find('.ion-android-arrow-dropup').length)
				hideProject($('#project-list').find('.ion-android-arrow-dropup').parent());
			expandProject(project)
		}
		// Hide selected project
		else
			hideProject(project);
	});

});

// Animation for expanding a project container
function expandProject(project){
	// Height calculations for animating to auto height
	infoBox = project.find('.project-info');
	cHeight = infoBox.height();
	aHeight = infoBox.css('height', 'auto').height() + 10;
	// Expand to auto height
	infoBox.height(cHeight).animate({
		height: aHeight
	}, 500, function(){
		// Display up arrow icon
		project.find('.container-expand')
			.removeClass('ion-android-arrow-dropdown')
			.addClass('ion-android-arrow-dropup');

		// Set height to auto to allow for resizing
		infoBox.css('height', 'auto');

		// Scroll list to show the expanded project
		var target = $('#project-list .project-container').eq(project.index());
		$('#project-list').animate({
			scrollTop: target.position().top + $('#project-list').scrollTop()
		}, 300);
	});
}

// Animation for hiding a project
function hideProject(project){
	infoBox = project.find('.project-info');
	infoBox.height(infoBox.height()).animate({
		height: '180px'
	}, 500, function(){
		project.find('.container-expand')
			.removeClass('ion-android-arrow-dropup')
			.addClass('ion-android-arrow-dropdown');
	});
}