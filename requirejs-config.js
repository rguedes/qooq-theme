var config = {
    paths: {
        "jquery.bootstrap": "js/bootstrap/bootstrap.min",
        "lightslider": "js/lightslider.min",
        "fancybox": "js/jquery.fancybox.pack"
    },
    shim: {
        'jquery.bootstrap': {
            'deps': ['jquery']
        },
        'fancybox': {
            'deps': ['jquery']
        },
        'lightslider': {
            'deps': ['jquery']
        }
    },
    map: {
        '*': {
            'Magento_Checkout/template/minicart/content.html':'Venture_Qooq/template/minicart/content.html',
            'Magento_Checkout/template/minicart/item/default.html':'Venture_Qooq/template/minicart/item/default.html'
        }
    }
};