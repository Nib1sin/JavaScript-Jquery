(function($){


    $.fn.dettagli = function(){
        
            //return this.attr('id');
            //alert('ID di questo elemento è: ' + this.attr('id'));

            this.append('<p class="info">ID di questo elemento è: ' + $(this).attr("id") + '</p>');
            $('.info').slideUp(6000);
            return this;
        
        };
       

      
        
    $.fn.elemento = function(){
    
         alert('L\' elemento cliccato è un tag HTML di tipo: ' + this.prop('tagName').toLowerCase());
         return this;
    };


})(jQuery);