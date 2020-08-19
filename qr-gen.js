'use strict';

var qrcode = new QRCode("qrcode");

function manipulate() {
    var qrgen = $("#qrinput").val();
    var origstr = qrgen;
        qrcode.makeCode(origstr);
    
}

$("#generate").click(function(event){
    event.preventDefault();
    manipulate();
});
