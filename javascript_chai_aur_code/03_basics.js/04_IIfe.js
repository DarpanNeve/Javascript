/**
 * Immediately Invoked Function Expressions (IIFE) are functions that are executed as soon as they are defined.
 * This file contains two examples of IIFEs.
 */
(function new1() {
  console.log("This is an IIFE!");
})();
(() => {
  console.log("This is an IIFE! 2");
})();
