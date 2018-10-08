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


    window.addEventListener("keydown", function (_event) {
        let space: KeyboardEvent = <KeyboardEvent>_event;
        if(!newGame) {
            if (space.code == "Space" && blockSpace == false) {
                spaceDown = true;
            }
        }
    });

    window.addEventListener("keyup", function (_event) {
        let space: KeyboardEvent = <KeyboardEvent>_event;
        if(!newGame) {
            if (space.code == "Space") {
                spaceDown = false;
                blockSpace = true;
                console.log(mvArc.progress);
                console.log(tmpArc.size);
            }
        }

        else{
            if(newGame && space.code == "Space"){
                tmpArc = new TemplateArc();
                mvArc = new MovingArc();
                spaceDown = false;
                blockSpace = false;
                newGame = false;
            }
        }
    });

    function init(): void {
        canvas = document.createElement("canvas");
        canvas.height = 400;
        canvas.width = 400;
        document.body.prepend(canvas);
        crc = canvas.getContext("2d");

        tmpArc = new TemplateArc();
        mvArc = new MovingArc();

        animate();

    }

    export function animate(): void {
        tmpArc.draw();
        if(spaceDown) {
            mvArc.calc();
        }
        if(blockSpace){

            //let accuracy:number;
            let accPercent: number;

            //accuracy = (tmpArc.size - 0.5) - (mvArc.progress - 0.5);
            //accuracy = Math.sqrt(accuracy*accuracy);
            accPercent = (mvArc.progress - 0.5)/(tmpArc.size - 0.5);
            accPercent = accPercent*100;
            //accPercent = Math.sqrt(accPercent*accPercent);

            mvArc.animateDraw(accPercent);

            let text: string = accPercent.toFixed(2).toString() + " %";
            let textLength: TextMetrics = crc.measureText(text);
            let textPos: number = (canvas.width/2 - (textLength.width/2));
            if(accPercent>95&&accPercent<105){
                crc.fillStyle = "green";
            }
            else{
                crc.fillStyle = "red";
            }
            crc.font = "30px Arial";
            crc.fillText(text, textPos, canvas.height/2);
            newGame = true;
        }

        setTimeout(animate, 10);
    }



}