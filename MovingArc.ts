/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/

namespace pixel {
    export class MovingArc {
        progress: number;

        constructor(){
            this.progress = 0.5;
        }

        calc(): void {
            this.progress = this.progress + 0.01;
        }

        draw(_percent:number): void {

            if(_percent>95&&_percent<105){
                crc.strokeStyle = "green";
            }
            else{
                crc.strokeStyle = "red";
            }
            crc.lineWidth = 30;
            crc.beginPath();
            crc.arc(200, 200, 150, 0.5 * Math.PI, this.progress * Math.PI);
            crc.stroke();

        }
    }



}