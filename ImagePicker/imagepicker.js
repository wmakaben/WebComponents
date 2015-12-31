$(document).ready(function(){

	$(document).on('click', '.image-container', function(){
		$(this).parent().find('.selected-image').removeClass("selected-image");
		$(this).addClass("selected-image");
	});

	$('#ip-open-btn').click(function(){
		$('#image-picker').show();
	});

	$('#ip-cancel-btn, .modal-btn-close').click(function(){
		$('#image-picker').hide();
		$('.selected-image').removeClass("selected-image");
	});

	$('#ip-ok-btn').click(function(){
		if($('#image-list').find('.selected-image').length){
			$('#image-picker').hide();
			// Set news image preview to the selected image
			$('#ne-img-preview').css('background-image', $('.selected-image .image-preview').css('background-image'));
			$('#ne-img-upload').val("");
			$('#ne-img-id').val($('.selected-image .image-id').text());
			$('.selected-image').removeClass("selected-image");
		}
		else
			alert("Please select an image");
	});
	
	$("#ne-img-upload").change(function(){ readURL(this); });
});

function readURL(input) {
	if (input.files && input.files[0]) {
	    var reader = new FileReader();
		reader.onload = function (e) {
	    	//$('#sbe-img-preview').attr('src', e.target.result);
	        $('#ne-img-preview').css('background-image', "url(" + e.target.result + ")");
	    }
	    reader.readAsDataURL(input.files[0]);
  	}
}