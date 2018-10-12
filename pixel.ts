/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/

namespace pixel {
    window.addEventListener("load", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let tmpArc: TemplateArc;
    export let mvArc: MovingArc;

    export let spaceDown: boolean = false;
    export let blockSpace: boolean = false;
    export let newGame: boolean = false;

    export let greenValue: number;
    export let redValue: number;


    window.addEventListener("touchstart", function (_event) {
        let space: TouchEvent = <TouchEvent>_event;
        let touchX = space.touches[0].clientX;
        let touchY = space.touches[0].clientY;
        document.getElementById("circle").style.top = (touchY-25).toString()+"px";
        document.getElementById("circle").style.left = (touchX-25).toString()+"px";
        document.getElementById("circle").style.display = "block";
        if(!newGame) {
            if (blockSpace == false) {
                spaceDown = true;
                animate();
            }
        }
    });

    window.addEventListener("touchend", function (_event) {
        document.getElementById("circle").style.display = "none";
        let space: TouchEvent = <TouchEvent>_event;
        if(!newGame) {
                spaceDown = false;
                blockSpace = true;
                //console.log(mvArc.progress);
                //console.log(tmpArc.size);
        }

        else{
            if(newGame){
                tmpArc = new TemplateArc();
                mvArc = new MovingArc();
                spaceDown = false;
                blockSpace = false;
                newGame = false;
                animate();
            }
        }
    });

    function init(): void {
        canvas = <HTMLCanvasElement>document.getElementById("crc");
        //canvas = document.createElement("canvas");
        canvas.height = document.body.clientHeight;
        canvas.width = document.body.clientWidth;
        //document.body.appendChild(canvas);
        crc = canvas.getContext("2d");

        tmpArc = new TemplateArc();
        mvArc = new MovingArc();

        animate();

    }

    export function animate(): void {
        tmpArc.draw();
        if(spaceDown) {
            mvArc.calc();
            setTimeout(animate, 5);
        }
        if(blockSpace){

            //let accuracy:number;
            let accPercent: number;
            let currentPercentage: number = ((mvArc.animateProgress-0.5)/(tmpArc.size-0.5));
            //console.log(currentPercentage);
            //accuracy = (tmpArc.size - 0.5) - (mvArc.progress - 0.5);
            //accuracy = Math.sqrt(accuracy*accuracy);
            accPercent = (mvArc.progress - 0.5)/(tmpArc.size - 0.5);
            accPercent = accPercent*100;
            //accPercent = Math.sqrt(accPercent*accPercent);

            mvArc.animateDraw(accPercent);

            let text: string = (currentPercentage*100).toFixed(2).toString()+"%";

            crc.font = "10vw Arial";
            let textLength: TextMetrics = crc.measureText(text);
            let textPos: number = ((canvas.width/2) - (textLength.width/2));

            if(currentPercentage>0.95&&currentPercentage<1.05){
                crc.fillStyle = "#27ae60";
            }
            else{
                crc.fillStyle = "#e74c3c";
            }
            crc.font = "10vw Arial";
            crc.fillText(text, textPos, (canvas.height/2)+(canvas.width*0.05));
            newGame = true;

            if (mvArc.animateProgress <= mvArc.progress) {
                setTimeout(animate, 5);
            }
            //setTimeout(animate, 5);
        }
        console.log("in Process");
    }



}