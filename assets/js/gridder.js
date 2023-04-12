$(function(){
    var $grid = $('.gridder').isotope({
        itemSelector: '.grid-item',
        percentPosition: true
      });

      $grid.isotope({   filter: ':nth-child(-n+6)' });

      $('.show-all').on( 'click', 'button', function() {
  
        $grid.isotope({ filter: '*' });
        
        $(this).hide();

      });
});