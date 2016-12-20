requirejs(['jquery', 'jquery.bootstrap', 'fancybox','lightslider'], function (jQuery, jQueryBootstrap, fancybox,lightslider) {
    var fancyboxOptions = {
        type: 'iframe',
        openEffect: 'elastic',
        closeEffect: 'elastic',
        autoCenter: true,
        padding: 0
    };
    jQuery(".iframe").fancybox(fancyboxOptions);
    jQuery(".iframe-video").fancybox(fancyboxOptions);
    /*jQuery("#lightSlider").lightSlider({
        item: 4,
        pager: false, addClass: 'carousel-list',
        prevHtml: '<span class="glyphicon glyphicon-chevron-left"></span>',
        nextHtml: '<span class="glyphicon glyphicon-chevron-right"></span>',
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:2
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:1
                }
            }
        ]
    });*/

    jQuery('a[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'bottom',
        html: true
    });

    jQuery('.carousel[data-type="multi"] .item').each(function(){
        var next = jQuery(this).next();
        if (!next.length) {
            next = jQuery(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo(jQuery(this));

        for (var i=0;i<2;i++) {
            next=next.next();
            if (!next.length) {
                next = jQuery(this).siblings(':first');
            }

            next.children(':first-child').clone().appendTo(jQuery(this));
        }
    });

    jQuery('.hamburger-menu').on('click', function(){
        jQuery('.bar').toggleClass('animate');
        jQuery('.navigation').toggle();
    });

    // opens all tabs down to the specified tab
    var hash = location.hash.split('?')[0];
    if(hash) {
        var $link = jQuery('[href=' + hash + ']');
        var parents = $link.parents('.tab-pane').get();
        jQuery(parents.reverse()).each(function() {
            jQuery('[href=#' + this.id + ']').tab('show') ;
        });
        $link.tab('show');
    }
});