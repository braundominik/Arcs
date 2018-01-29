/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/

namespace pixel {
    export class Player {
        size: number;
        jump: number;

        constructor(size:number){
            this.size = size;
            this.jump = 0;
        }

        draw(): void {
            crc.fillStyle = "white";
            crc.fillRect(0, 0, canvas.width, canvas.height);
            crc.fillStyle = "black";
            crc.fillRect((canvas.width/2)-(this.size/2), canvas.height-(this.size + this.jump), this.size, this.size);

        }
    }



}