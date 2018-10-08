/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/

namespace pixel {
    export class MovingArc {
        progress: number;
        animateProgress:number;

        constructor(){
            this.animateProgress = 0.5;
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
            crc.arc(document.body.clientWidth/2, document.body.clientHeight/2, document.body.clientWidth/2.5, 0.5 * Math.PI, this.progress * Math.PI);
            crc.stroke();

        }

        
        animateDraw(_percent:number): void {

            // red target value: 232 108 94
            // green target value 32 156 94
            
            let currentPercentage: number = ((this.animateProgress-0.5)/(tmpArc.size-0.5));
            if (currentPercentage <= 0.95) {
               redValue = 255-((currentPercentage*255)/1.5);
                //console.log(greenValue);
                //console.log(currentPercentage);
            }

            if (currentPercentage <= 1 && currentPercentage >=0.95) {
                redValue = 255-((currentPercentage*255));

            }

            if (currentPercentage >= 1 && currentPercentage <=1.05) {
                redValue = (currentPercentage*255)-255;
            }

            if (currentPercentage >= 1.05) {
                redValue = (currentPercentage*255)-150;
            }
            //else{
                //console.log(currentPercentage);
               // greenValue = (currentPercentage*156);
               // if(redValue >= 250) {                                       ;
               //     redValue = 255;
               // }

              //  else{
                    //console.log(greenValue);
                    //greenValue = 156-((currentPercentage*156)-156);
             //       redValue = (currentPercentage*255)%255;
              //      console.log(redValue);
              //  }
          //  }

            crc.strokeStyle = "rgba("+redValue+",73,11,1)";
            crc.lineWidth = 30;
            crc.beginPath();
            crc.arc(document.body.clientWidth/2, document.body.clientHeight/2, document.body.clientWidth/2.5, 0.5 * Math.PI, this.animateProgress * Math.PI);
            crc.stroke();


            if (this.animateProgress <= this.progress) {
                this.animateProgress = this.animateProgress + 0.01;
                setTimeout(this.animateDraw, 10);
            }
        }

    }



}