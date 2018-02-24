/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/
var pixel;
(function (pixel) {
    var MovingArc = /** @class */ (function () {
        function MovingArc() {
            this.animateProgress = 0.5;
            this.progress = 0.5;
        }
        MovingArc.prototype.calc = function () {
            this.progress = this.progress + 0.01;
        };
        MovingArc.prototype.draw = function (_percent) {
            if (_percent > 95 && _percent < 105) {
                pixel.crc.strokeStyle = "green";
            }
            else {
                pixel.crc.strokeStyle = "red";
            }
            pixel.crc.lineWidth = 30;
            pixel.crc.beginPath();
            pixel.crc.arc(200, 200, 150, 0.5 * Math.PI, this.progress * Math.PI);
            pixel.crc.stroke();
        };
        MovingArc.prototype.animateDraw = function (_percent) {
            if (_percent > 95 && _percent < 105) {
                pixel.crc.strokeStyle = "green";
            }
            else {
                pixel.crc.strokeStyle = "red";
            }
            pixel.crc.lineWidth = 30;
            pixel.crc.beginPath();
            pixel.crc.arc(200, 200, 150, 0.5 * Math.PI, this.animateProgress * Math.PI);
            pixel.crc.stroke();
            if (this.animateProgress <= this.progress) {
                this.animateProgress = this.animateProgress + 0.01;
                setTimeout(this.animateDraw, 10);
            }
        };
        return MovingArc;
    }());
    pixel.MovingArc = MovingArc;
})(pixel || (pixel = {}));
