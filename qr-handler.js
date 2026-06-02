let currentQR = null;

function setQRImage(qrImage) {
    currentQR = qrImage;
}

function getQRImage() {
    return currentQR;
}

module.exports = {
    setQRImage,
    getQRImage
};
