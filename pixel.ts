/*
ARCS
Name: Braun Dominik
Datum: 13.10.2018
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

    let scoreContent;

    let scoreValue: number = 0;
    let storage = window.localStorage;
    let scoreStore = window.localStorage.key(0);

    function speichern():void {
        window.localStorage.setItem(scoreStore,scoreValue.toString());
        console.log("gespeichert");
    }


    let starttouch = window.addEventListener("touchstart", function (_event) {
        let space: TouchEvent = <TouchEvent>_event;
        let touchX = space.touches[0].clientX;
        let touchY = space.touches[0].clientY;
        document.getElementById("circle").style.top = (touchY-50).toString()+"px";
        document.getElementById("circle").style.left = (touchX-50).toString()+"px";
        document.getElementById("circle").style.display = "block";
        if(!newGame) {
            if (blockSpace == false) {
                spaceDown = true;
                animate();
            }
        }
    });

    let endtouch = window.addEventListener("touchend", function (_event) {
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

        scoreContent = document.getElementById("score");
        scoreValue = Number(window.localStorage.getItem(scoreStore));
        document.getElementById("score").textContent = "Score: "+scoreValue.toString();
        document.getElementById("speicher").addEventListener("click", speichern);

        document.getElementById("circle").style.top = (document.body.clientHeight/2-50).toString()+"px";
        document.getElementById("circle").style.left = (document.body.clientWidth/2-50).toString()+"px";
        
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
            else{
                if (crc.fillStyle == "#27ae60"){
                    scoreValue++;
                    speichern();
                    scoreContent.innerText = "Score:"+" "+scoreValue.toString();
                }
            }
        }
        console.log("in Process");
    }



}