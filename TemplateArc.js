/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/
var pixel;
(function (pixel) {
    class TemplateArc {
        constructor() {
            this.size = this.getRndNumber(0.6, 2.5);
        }
        draw() {
            pixel.crc.fillStyle = "black";
            pixel.crc.fillRect(0, 0, pixel.canvas.width, pixel.canvas.height);
            pixel.crc.strokeStyle = "white";
            pixel.crc.lineWidth = 50;
            pixel.crc.beginPath();
            pixel.crc.arc(document.body.clientWidth / 2, document.body.clientHeight / 2, document.body.clientWidth / 2.5, 0.5 * Math.PI, this.size * Math.PI);
            pixel.crc.stroke();
        }
        getRndNumber(min, max) {
            let x = Math.random() * (max - min) + min;
            return x;
        }
    }
    pixel.TemplateArc = TemplateArc;
})(pixel || (pixel = {}));
//# sourceMappingURL=TemplateArc.js.map