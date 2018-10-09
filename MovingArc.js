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
            this.progress = this.progress + 0.005;
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
            // red target value: 232 108 94
            // green target value 32 156 94
            let currentPercentage = ((this.animateProgress - 0.5) / (pixel.tmpArc.size - 0.5));
            if (currentPercentage <= 0.95) {
                //redValue = 255-((currentPercentage*255)/5);
                pixel.crc.strokeStyle = "#e74c3c";
            }
            if (currentPercentage <= 1 && currentPercentage >= 0.95) {
                pixel.crc.strokeStyle = "#27ae60";
                //redValue = 255-((currentPercentage*255));
            }
            if (currentPercentage >= 1 && currentPercentage <= 1.05) {
                pixel.crc.strokeStyle = "#27ae60";
                //redValue = (currentPercentage*255)-255;
            }
            if (currentPercentage >= 1.05) {
                pixel.crc.strokeStyle = "#e74c3c";
                //redValue = (currentPercentage*255)-255;
            }
            pixel.crc.strokeStyle = "rgba(" + pixel.redValue + ",175,72,1)";
            pixel.crc.lineWidth = 30;
            pixel.crc.beginPath();
            pixel.crc.arc(document.body.clientWidth / 2, document.body.clientHeight / 2, document.body.clientWidth / 2.5, 0.5 * Math.PI, this.animateProgress * Math.PI);
            pixel.crc.stroke();
            if (this.animateProgress <= this.progress) {
                this.animateProgress = this.animateProgress + 0.005;
                //setTimeout(this.animateDraw, 5);
            }
        }
    }
    pixel.MovingArc = MovingArc;
})(pixel || (pixel = {}));
//# sourceMappingURL=MovingArc.js.map