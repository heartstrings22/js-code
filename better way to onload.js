/*
 * better use of window.onload
 * to bind one or more function
 * to window.onload
 */

// ordinary way to add onload event
window.onload = foo1;

// smarter way to add one or more onload event
window.onload = function() {
    foo1();
    foo2();
    // ...
}

// best way to add one or more onload event
addLoadEvent = foo1;
addLoadEvent = foo2;
// ...

// core function written by Simon Willison
function addLoadEvent(func) {
    oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
