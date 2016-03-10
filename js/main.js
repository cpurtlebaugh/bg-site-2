;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
        if( $(e.target).is('a') ) {
        $(this).toggleClass('menu-close');
        };
      });


})(jQuery)
