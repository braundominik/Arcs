/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/

namespace pixel {
    export class templateArc {
        size: number;

        constructor(){
            this.size = getRndNumber(0.6, 2.5);
        }

        draw(): void {
            crc.fillStyle = "blue  ";
            crc.fillRect(0, 0, canvas.width, canvas.height);
            crc.strokeStyle = "black";
            crc.lineWidth = 50;
            crc.beginPath();
            crc.arc(200, 200, 150, 0.5 * Math.PI, this.size * Math.PI);
            crc.stroke();

        }
    }



}