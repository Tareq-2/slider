$(function () {

    $(window).on('scroll', function () {
        var scrollSize = $(window).scrollTop()
        if (scrollSize > 500) {
            $('#backtotop').slideDown()
        } else {
            $('#backtotop').slideUp()
        }


        if (scrollSize > 50) {
            $('#nav').addClass('active')
        } else {
            $('#nav').removeClass('active')
        }
    })
    
    $('#backtotop').on('click', function () {
        $('html, body').animate({
            scrollTop:0,
        },1000)
    })

    

// img slider
      $(document).ready(function(){
		var x = 0;

		$('.btn-next').click(function(){
    
        x= (x<=300)?(x+100):0;
      $('figure').css('left', -x+'%');
		});

     $('.btn-prev').click(function(){
    
        x= (x>=100)?(x-100):100;
      $('figure').css('left', -x+'%');
    });
	});
      
})