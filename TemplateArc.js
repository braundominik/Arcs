/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/
var pixel;
(function (pixel) {
    var TemplateArc = /** @class */ (function () {
        function TemplateArc() {
            this.size = pixel.getRndNumber(0.6, 2.5);
        }
        TemplateArc.prototype.draw = function () {
            pixel.crc.fillStyle = "white";
            pixel.crc.fillRect(0, 0, pixel.canvas.width, pixel.canvas.height);
            pixel.crc.strokeStyle = "black";
            pixel.crc.lineWidth = 50;
            pixel.crc.beginPath();
            pixel.crc.arc(200, 200, 150, 0.5 * Math.PI, this.size * Math.PI);
            pixel.crc.stroke();
        };
        return TemplateArc;
    }());
    pixel.TemplateArc = TemplateArc;
})(pixel || (pixel = {}));
