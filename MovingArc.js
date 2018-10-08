/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/
var pixel;
(function (pixel) {
    class MovingArc {
        constructor() {
            this.animateProgress = 0.5;
            this.progress = 0.5;
        }
        calc() {
            this.progress = this.progress + 0.01;
        }
        draw(_percent) {
            if (_percent > 95 && _percent < 105) {
                pixel.crc.strokeStyle = "green";
            }
            else {
                pixel.crc.strokeStyle = "red";
            }
            pixel.crc.lineWidth = 30;
            pixel.crc.beginPath();
            pixel.crc.arc(document.body.clientWidth / 2, document.body.clientHeight / 2, document.body.clientWidth / 2.5, 0.5 * Math.PI, this.progress * Math.PI);
            pixel.crc.stroke();
        }
        animateDraw(_percent) {
            if (_percent > 95 && _percent < 105) {
                pixel.crc.strokeStyle = "green";
            }
            else {
                pixel.crc.strokeStyle = "red";
            }
            pixel.crc.lineWidth = 30;
            pixel.crc.beginPath();
            pixel.crc.arc(document.body.clientWidth / 2, document.body.clientHeight / 2, document.body.clientWidth / 2.5, 0.5 * Math.PI, this.animateProgress * Math.PI);
            pixel.crc.stroke();
            if (this.animateProgress <= this.progress) {
                this.animateProgress = this.animateProgress + 0.01;
                setTimeout(this.animateDraw, 10);
            }
        }
    }
    pixel.MovingArc = MovingArc;
})(pixel || (pixel = {}));
//# sourceMappingURL=MovingArc.js.map