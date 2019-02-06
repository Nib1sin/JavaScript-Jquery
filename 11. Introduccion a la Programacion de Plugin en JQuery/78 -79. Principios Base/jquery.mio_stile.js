(function($){

    $.fn.stileColore = function(opzioni){

    					/*
        				var parametri = $.extend({
											color: '#6f84ff',
											background: null
										 }, opzioni);
        				*/

			            $(this).css({
			            			color: opzioni.color,
			            			backgroundColor: opzioni.background
			                      });
			            };
    

})(jQuery);