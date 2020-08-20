'use strict';

var qrcode = new QRCode("qrcode");

function manipulate() {
  var qrgen = $("#qrinput").val();

    if (qrgen) {
        var origstr = qrgen;

        qrcode.makeCode(origstr);
    } else {
        alert("Please fill all blanks.");
    }
}

$("#generate").click(function(event){
    event.preventDefault();
    manipulate();
});
