document.getElementById('generate-button').addEventListener('click', function () {
    var qrContent = document.getElementById('qr-content').value;

    var qrCodeElement = document.getElementById('qr-code');
    qrCodeElement.innerHTML = "";

    if (qrContent.trim()) {
        new QRCode(qrCodeElement, {
            text: qrContent,
            correctLevel: QRCode.CorrectLevel.H
        });
    }
});
