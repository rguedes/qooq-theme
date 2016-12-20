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
            'Magento_Checkout/template/minicart/item/default.html':'Venture_Qooq/template/minicart/item/default.html',
            'Magento_Checkout/template/registration.html':'Venture_Qooq/template/registration.html',

            'Magento_Ui/template/form/element/input.html':'Venture_Qooq/template/form/element/input.html',
            'Magento_CheckoutAgreements/template/checkout/checkout-agreements.html':'Venture_Qooq/template/checkout/checkout-agreements.html',

            'Magento_Checkout/template/form/element/email.html':'Venture_Qooq/template/form/element/email.html',
            'Magento_Checkout/template/shipping-address/form.html':'Venture_Qooq/template/checkout/shipping-address/form.html'
        }
    }
};