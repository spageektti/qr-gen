document.getElementById('generate-button').addEventListener('click', function () {
    var qrContent = document.getElementById('qr-content').value;
    var qrWidth = parseInt(document.getElementById('qr-width').value);
    var qrHeight = parseInt(document.getElementById('qr-height').value);
    var colorDark = document.getElementById('color-dark').value;
    var colorLight = document.getElementById('color-light').value;

    var wifiSSID = document.getElementById('wifi-ssid').value;
    var wifiPassword = document.getElementById('wifi-password').value;
    var wifiEncryption = document.getElementById('wifi-encryption').value;

    if (wifiSSID) {
        qrContent = `WIFI:S:${wifiSSID};T:${wifiEncryption};P:${wifiPassword};;`;
    }

    var qrCodeElement = document.getElementById('qr-code');
    qrCodeElement.innerHTML = "";

    if (qrContent.trim()) {
        new QRCode(qrCodeElement, {
            text: qrContent,
            width: qrWidth,
            height: qrHeight,
            colorDark: colorDark,
            colorLight: colorLight,
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});
