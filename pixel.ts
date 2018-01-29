/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/

namespace pixel {
    export let spaceDown: boolean = false;
    export let blockSpace: boolean = false;
    window.addEventListener("keydown", function (_event) {
        let space: KeyboardEvent= <KeyboardEvent>_event;
        if(space.code == "Space" && blockSpace == false){
            spaceDown = true;

            console.log(_event);
        }

    });

    window.addEventListener("keyup", function (_event) {
        let space: KeyboardEvent= <KeyboardEvent>_event;
        if(space.code == "Space"){
            spaceDown = false;
            blockSpace = true;
            console.log(_event);
        }
    });

    window.addEventListener("load", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    export let tmpArc: templateArc = new templateArc();
    export let mvArc: movingArc = new movingArc();



    function init(): void {
        canvas = document.createElement("canvas");
        canvas.height = 400;
        canvas.width = 400;
        document.body.prepend(canvas);
        crc = canvas.getContext("2d");
        animate();

    }

    function animate(): void {
        tmpArc.draw();
        if(spaceDown) {
            mvArc.move();
        }
        mvArc.draw();
        if(blockSpace){
            let accuracy:number;
            let accPercent: number;

            accuracy = tmpArc.size - mvArc.progress;
            accuracy = Math.sqrt(accuracy*accuracy);

            accPercent = mvArc.progress/tmpArc.size;
            accPercent = 100-(accPercent*100);
            accPercent = Math.sqrt(accPercent*accPercent);

            crc.fillStyle = "white"
            crc.font = "30px Arial"
            crc.fillText(accPercent.toFixed(2).toString() + " %", 200,200);
        }
        setTimeout(animate, 20);
    }


}