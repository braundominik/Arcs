/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/

namespace pixel {


    export function getRndNumber(min: number, max: number): number {
        let x: number = Math.random() * (max - min) + min;
        return x;

    }

    function getPosIn(upperLeftx: number, upperLefty: number, lowerRightx: number, lowerRighty: number): number[] {
        let rndX: number = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
        let rndY: number = Math.random() * (lowerRighty - upperLefty) + upperLefty;
        return new Array(rndX, rndY);

    }

    function getDistance(x1: number, y1: number, x2: number, y2: number): number {
        let dtc: number = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
        return dtc;
    }


}