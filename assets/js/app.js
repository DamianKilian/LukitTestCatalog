"use strict";

window.lukittest = {
    init: function () {
        lukittest.sortProductsBy();
    },
    sortProductsBy: function () {
        var sortProductsBy = $('#sortProductsBy');
        var products = $('#products');
        if (sortProductsBy.length) {
            sortProductsBy.on('change', function () {
                var that = $(this);
                $.ajax({
                    method: 'post',
                    url: window.location.pathname + '/' + that.val(),
                }).done(function (html) {
                    products.html(html);
                });

            });
        }
    },

};


$(document).ready(function () {
    lukittest.init();
});

