/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/
var pixel;
(function (pixel) {
    class Player {
        constructor(size) {
            this.size = size;
            this.jump = 0;
        }
        draw() {
            pixel.crc.fillStyle = "white";
            pixel.crc.fillRect(0, 0, pixel.canvas.width, pixel.canvas.height);
            pixel.crc.fillStyle = "black";
            pixel.crc.fillRect((pixel.canvas.width / 2) - (this.size / 2), pixel.canvas.height - (this.size + this.jump), this.size, this.size);
        }
    }
    pixel.Player = Player;
})(pixel || (pixel = {}));
//# sourceMappingURL=player.js.map