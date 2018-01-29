/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/

namespace pixel {
    export class movingArc {
        progress: number;

        constructor(){
            this.progress = 0.5;
        }

        move(): void {
            this.progress = this.progress + 0.01;
        }

        draw(): void {
            crc.strokeStyle = "white";
            crc.lineWidth = 30;
            crc.beginPath();
            crc.arc(200, 200, 150, 0.5 * Math.PI, this.progress * Math.PI);
            crc.stroke();

        }
    }



}