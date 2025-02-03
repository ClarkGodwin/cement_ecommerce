import $ from 'jquery';

function newsletter_change(){
        //Calcule des proprietes que vous voyez dans la reference dans header.blade.php et les applique a l'id newsletter
        
        var width = $('#ref').css('width'),
        left = $('#ref').css('margin-left'); 
        
        $('#newsletter').css({
                'width': width,
                'left': left
        });
}
$(window).on('load', newsletter_change);

$(function(){
        if(localStorage.getItem('theme') == 'dark'){
                $('html').addClass('tw-dark');
        }

        $('#dark_mode').on('click', function(){
                $('html').toggleClass('tw-dark');
                if($('html').hasClass('tw-dark')){
                        localStorage.setItem('theme', 'dark');
                }else{
                        localStorage.setItem('theme', 'light');
                }
        });

        $('#light_mode').on('click', function(){
                $('html').toggleClass('tw-dark');
                if($('html').hasClass('tw-dark')){
                        localStorage.setItem('theme', 'dark');
                }else{
                        localStorage.setItem('theme', 'light');
                }
        });

        $(window).on('resize', newsletter_change);

        for(let i=0; i < 1; i++){
                $('#defilement').append($('#defilement').children().clone());
                $('#defilement').parent().append($('#defilement'));
        }
        var itemWidth = $('#defilement li').first().outerWidth(true), count = $('#defilement li').length;
        $('#defilement').css('width', (itemWidth * count * 2) + 'px'); 

        // for(let i=0; i < 10; i++){
        //         $('#defilement').append($('#defilement').children().clone());
        // }
        // $('#defilement').append($('#defilement').children().clone());
        
        // (function infinite(){
        //         for(let i=0; i < 10; i++){
        //                 $('#defilement').append($('#defilement').children().clone());
        //         }
        //         let largeur = $('#defilement').outerWidth(true) * $('#defilement li').length ; 
        //         $('#defilement').animate({'margin-left': -largeur}, 20000, 'linear', function(){
        //                 $('this').css('margin-left', 0); 
        //                 infinite(); 
        //         }); 
        // })(); 

        // var marquee = $('.marquee'), items = marquee.find('.marquee-items'); 

        // function setInitialPosition(){
        //         var totalWidth = 0;

        //         items.each(function(){
        //                 var item = $($this);
        //                 item.css('left', totalWidth + 'px'); 
        //                 totalWidth += item.outerWidth(true); 
        //         }); 
        //         marquee.data('totalWidth', totalWidth); 
        // }

        // function animateMarquee(){
        //         items.each(function(){
        //                 var item = $(this), itemWidth = item.outerWidth(true), newLeft = parseFloat(item.css('left')) - 1;

        //                 if(newLeft <= -itemWidth){
        //                         var totalWidth = marquee.data('totalWidth');
        //                         newLeft += totalWidth; 
        //                 }

        //                 item.css('left', newLeft + 'px');
        //         });

        //         requestAnimationFrame(animateMarquee); 
        // }

        // setInitialPosition();
        // animateMarquee();

        // $(window).on('resize', function(){
        //         setInitialPosition();
        // });

}); 


