/// <reference path="interface_function.ts" />
/// <reference path="function.ts" />

// A variable of type BoxProperties is created and is populated with values
let box: Box.BoxProperties = { length: 12, width: 10, height: 10 };

// Calculating the Surface Area of the box
console.log ( `\nSurface Area of the box = ${Box.calculateSurfaceArea(box)}` );

// Calculating the Area of the box
console.log ( `\nArea of the box = ${Box.calculateArea(box)}` );
