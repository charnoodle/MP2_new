var qrcode = new QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Why did you scan me?")
function generateQr(){  qrcode.makeCode(document.querySelector("input").value)
}