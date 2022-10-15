// $(document).ready(function(e) {


    $('img[usemap]').rwdImageMaps();

    // $('img[usemap]').maphilight();

    var imageMapping = function() {
        $('img[usemap]').maphilight({
            
    });
    }

    $('area').on('click', function() {
		alert($(this).attr('alt') + ' clicked');
        // window.open("", "Unit", "width=500,height=500");
	});

    $(window).on('load', imageMapping)
    $(window).on('resize', imageMapping);

    
// });