/**
 * @namespace Box [This namespace holds all the parameters and functions related to a box]
 */
namespace Box {

    /**
     * @interface BoxProperties [This interface holds the parameters related to the sides of a box]
     * @param {number} length [This is the length of the box]
     * @param {number} width [This is the width of the box]
     * @param {number} height [This is the height of the box]
     */
    export interface BoxProperties {

        length: number;
        width: number;
        height: number;

    }

    /**
     * @function calculateSurfaceArea [This function is used to calculate the surface area of the box]
     * @param {BoxProperties} box [The BoxProperties type interface is passed]
     * @return {number} [The surface area of the box is returned]
     */
    export function calculateSurfaceArea (box: BoxProperties): number {

        let area1 = 2 * box.length * box.width;
        let area2 = 2 * box.width * box.height;
        let area3 = 2 * box.length * box.height;

        return (area1 + area2 + area3);

    }

}
