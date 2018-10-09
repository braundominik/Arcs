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
    window.addEventListener("touchstart", function (_event) {
        let space = _event;
        if (!pixel.newGame) {
            if (pixel.blockSpace == false) {
                pixel.spaceDown = true;
                animate();
            }
        }
    });
    window.addEventListener("touchend", function (_event) {
        let space = _event;
        if (!pixel.newGame) {
            pixel.spaceDown = false;
            pixel.blockSpace = true;
            //console.log(mvArc.progress);
            //console.log(tmpArc.size);
        }
        else {
            if (pixel.newGame) {
                pixel.tmpArc = new pixel.TemplateArc();
                pixel.mvArc = new pixel.MovingArc();
                pixel.spaceDown = false;
                pixel.blockSpace = false;
                pixel.newGame = false;
                animate();
            }
        }
    });
    function init() {
        pixel.canvas = document.getElementById("crc");
        //canvas = document.createElement("canvas");
        pixel.canvas.height = document.body.clientHeight;
        pixel.canvas.width = document.body.clientWidth;
        //document.body.appendChild(canvas);
        pixel.crc = pixel.canvas.getContext("2d");
        pixel.tmpArc = new pixel.TemplateArc();
        pixel.mvArc = new pixel.MovingArc();
        animate();
    }
    function animate() {
        pixel.tmpArc.draw();
        if (pixel.spaceDown) {
            pixel.mvArc.calc();
            setTimeout(animate, 5);
        }
        if (pixel.blockSpace) {
            //let accuracy:number;
            let accPercent;
            let currentPercentage = ((pixel.mvArc.animateProgress - 0.5) / (pixel.tmpArc.size - 0.5));
            //console.log(currentPercentage);
            //accuracy = (tmpArc.size - 0.5) - (mvArc.progress - 0.5);
            //accuracy = Math.sqrt(accuracy*accuracy);
            accPercent = (pixel.mvArc.progress - 0.5) / (pixel.tmpArc.size - 0.5);
            accPercent = accPercent * 100;
            //accPercent = Math.sqrt(accPercent*accPercent);
            pixel.mvArc.animateDraw(accPercent);
            let text = (currentPercentage * 100).toFixed(2).toString() + "%";
            pixel.crc.font = "10vw Arial";
            let textLength = pixel.crc.measureText(text);
            let textPos = ((pixel.canvas.width / 2) - (textLength.width / 2));
            if (currentPercentage > 0.95 && currentPercentage < 1.05) {
                pixel.crc.fillStyle = "#27ae60";
            }
            else {
                pixel.crc.fillStyle = "#e74c3c";
            }
            pixel.crc.font = "10vw Arial";
            pixel.crc.fillText(text, textPos, (pixel.canvas.height / 2) + (pixel.canvas.width * 0.05));
            pixel.newGame = true;
            if (pixel.mvArc.animateProgress <= pixel.mvArc.progress) {
                setTimeout(animate, 5);
            }
            //setTimeout(animate, 5);
        }
        console.log("in Process");
    }
    pixel.animate = animate;
})(pixel || (pixel = {}));
//# sourceMappingURL=pixel.js.map