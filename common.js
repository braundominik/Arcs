/*
PIXEL
Name: Braun Dominik
Datum: 28.01.2018
*/
var pixel;
(function (pixel) {
    function getPosIn(upperLeftx, upperLefty, lowerRightx, lowerRighty) {
        var rndX = Math.random() * (lowerRightx - upperLeftx) + upperLeftx;
        var rndY = Math.random() * (lowerRighty - upperLefty) + upperLefty;
        return new Array(rndX, rndY);
    }
    pixel.getPosIn = getPosIn;
    function getDistance(x1, y1, x2, y2) {
        var dtc = Math.sqrt((Math.pow(x1 - x2, 2)) + (Math.pow(y1 - y2, 2)));
        return dtc;
    }
    pixel.getDistance = getDistance;
})(pixel || (pixel = {}));
