(function () {
    var app=angular.module("MobileStore",[]);
    var iphone={
        name:"Iphone 7 Plus",
        color:"Apple Red",
        memory:"3 GB RAM,128GB Internal Storage",
        price:75000,
        image:"img/apple_iphone_7_plus_128gb_red_sku_header.png",
        isSoldOut:false,
        activeTab:"Description"
    };
    var google={
        name:"Google Pixel",
        color:"Black",
        memory:"4 GB RAM,32GB Internal Storage",
        price:44000,
        image:"img/Pixel_XL_1475474439205.png",
        isSoldOut:false,
        activeTab:"Description"
    };
    app.controller("StoreController",function () {
        this.mobiles=[iphone,google];

        this.setActiveTab=function (mobile,tab) {
            mobile.activeTab=tab;
        }
    });

})();
