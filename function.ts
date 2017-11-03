/// <reference path="interface_function.ts" />

/**
 * @namespace Box [This namespace holds all the parameters and functions related to a box]
 */
namespace Box {

    /**
     * @function calculateArea [This function is used to calculate the area of the box]
     * @param {BoxPropeties} box [The BoxProperties type interface is passed]
     * @return {number} [The area of the box is returned]
     */
    export function calculateArea(box: BoxProperties): number {

        return (box.length * box.width * box.height);

    }

}
