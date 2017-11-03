/**
 * @namespace Box [This namespace holds all the parameters and functions related to a box]
 */
var Box;
(function (Box) {
    /**
     * @function calculateSurfaceArea [This function is used to calculate the surface area of the box]
     * @param {BoxProperties} box [The BoxProperties type interface is passed]
     * @return {number} [The surface area of the box is returned]
     */
    function calculateSurfaceArea(box) {
        var area1 = 2 * box.length * box.width;
        var area2 = 2 * box.width * box.height;
        var area3 = 2 * box.length * box.height;
        return (area1 + area2 + area3);
    }
    Box.calculateSurfaceArea = calculateSurfaceArea;
})(Box || (Box = {}));
/// <reference path="interface_function.ts" />
/**
 * @namespace Box [This namespace holds all the parameters and functions related to a box]
 */
var Box;
(function (Box) {
    /**
     * @function calculateArea [This function is used to calculate the area of the box]
     * @param {BoxPropeties} box [The BoxProperties type interface is passed]
     * @return {number} [The area of the box is returned]
     */
    function calculateArea(box) {
        return (box.length * box.width * box.height);
    }
    Box.calculateArea = calculateArea;
})(Box || (Box = {}));
/// <reference path="interface_function.ts" />
/// <reference path="function.ts" />
// A variable of type BoxProperties is created and is populated with values
var box = { length: 12, width: 10, height: 10 };
// Calculating the Surface Area of the box
console.log("\nSurface Area of the box = " + Box.calculateSurfaceArea(box));
// Calculating the Area of the box
console.log("\nArea of the box = " + Box.calculateArea(box));
