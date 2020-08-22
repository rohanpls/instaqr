'use strict';

var qrcode = new QRCode("qrcode");

function manipulate() {
  var qrgen = $("#qrinput").val();

    if (qrgen) {
        qrcode.makeCode(qrgen);
    } else {
        alert("Please enter the value you wish to encode");
    }
}

$("#generate").click(function(event){
    event.preventDefault();
    manipulate();
});
