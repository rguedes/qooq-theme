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
    jQuery("#lightSlider").lightSlider({
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
    });
});