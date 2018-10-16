/*
ARCS
Name: Braun Dominik
Datum: 13.10.2018
*/
var pixel;
(function (pixel) {
    window.addEventListener("load", init);
    pixel.spaceDown = false;
    pixel.blockSpace = false;
    pixel.newGame = false;
    let scoreContent;
    let scoreValue = 0;
    let storage = window.localStorage;
    let scoreStore = window.localStorage.key(0);
    function speichern() {
        window.localStorage.setItem(scoreStore, scoreValue.toString());
        console.log("gespeichert");
    }
    let starttouch = window.addEventListener("touchstart", function (_event) {
        let space = _event;
        let touchX = space.touches[0].clientX;
        let touchY = space.touches[0].clientY;
        document.getElementById("circle").style.top = (touchY - 50).toString() + "px";
        document.getElementById("circle").style.left = (touchX - 50).toString() + "px";
        document.getElementById("circle").style.display = "block";
        if (!pixel.newGame) {
            if (pixel.blockSpace == false) {
                pixel.spaceDown = true;
                animate();
            }
        }
    });
    let endtouch = window.addEventListener("touchend", function (_event) {
        document.getElementById("circle").style.display = "none";
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
        scoreContent = document.getElementById("score");
        scoreValue = Number(window.localStorage.getItem(scoreStore));
        document.getElementById("score").textContent = "Score: " + scoreValue.toString();
        document.getElementById("speicher").addEventListener("click", speichern);
        document.getElementById("circle").style.top = (document.body.clientHeight / 2 - 50).toString() + "px";
        document.getElementById("circle").style.left = (document.body.clientWidth / 2 - 50).toString() + "px";
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
            else {
                if (pixel.crc.fillStyle == "#27ae60") {
                    scoreValue++;
                    speichern();
                    scoreContent.innerText = "Score:" + " " + scoreValue.toString();
                }
            }
        }
        console.log("in Process");
    }
    pixel.animate = animate;
})(pixel || (pixel = {}));
//# sourceMappingURL=pixel.js.map