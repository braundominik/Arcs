/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/
var pixel;
(function (pixel) {
    window.addEventListener("load", init);
    pixel.spaceDown = false;
    pixel.blockSpace = false;
    pixel.newGame = false;
    window.addEventListener("keydown", function (_event) {
        let space = _event;
        if (!pixel.newGame) {
            if (space.code == "Space" && pixel.blockSpace == false) {
                pixel.spaceDown = true;
            }
        }
    });
    window.addEventListener("keyup", function (_event) {
        let space = _event;
        if (!pixel.newGame) {
            if (space.code == "Space") {
                pixel.spaceDown = false;
                pixel.blockSpace = true;
                console.log(pixel.mvArc.progress);
                console.log(pixel.tmpArc.size);
            }
        }
        else {
            if (pixel.newGame && space.code == "Space") {
                pixel.tmpArc = new pixel.TemplateArc();
                pixel.mvArc = new pixel.MovingArc();
                pixel.spaceDown = false;
                pixel.blockSpace = false;
                pixel.newGame = false;
            }
        }
    });
    function init() {
        pixel.canvas = document.createElement("canvas");
        pixel.canvas.height = 400;
        pixel.canvas.width = 400;
        document.body.appendChild(pixel.canvas);
        pixel.crc = pixel.canvas.getContext("2d");
        pixel.tmpArc = new pixel.TemplateArc();
        pixel.mvArc = new pixel.MovingArc();
        animate();
    }
    function animate() {
        pixel.tmpArc.draw();
        if (pixel.spaceDown) {
            pixel.mvArc.calc();
        }
        if (pixel.blockSpace) {
            //let accuracy:number;
            let accPercent;
            //accuracy = (tmpArc.size - 0.5) - (mvArc.progress - 0.5);
            //accuracy = Math.sqrt(accuracy*accuracy);
            accPercent = (pixel.mvArc.progress - 0.5) / (pixel.tmpArc.size - 0.5);
            accPercent = accPercent * 100;
            //accPercent = Math.sqrt(accPercent*accPercent);
            pixel.mvArc.animateDraw(accPercent);
            let text = accPercent.toFixed(2).toString() + " %";
            let textLength = pixel.crc.measureText(text);
            let textPos = (pixel.canvas.width / 2 - (textLength.width / 2));
            if (accPercent > 95 && accPercent < 105) {
                pixel.crc.fillStyle = "green";
            }
            else {
                pixel.crc.fillStyle = "red";
            }
            pixel.crc.font = "30px Arial";
            pixel.crc.fillText(text, textPos, pixel.canvas.height / 2);
            pixel.newGame = true;
        }
        setTimeout(animate, 10);
    }
    pixel.animate = animate;
})(pixel || (pixel = {}));
//# sourceMappingURL=pixel.js.map