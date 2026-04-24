/**
 * This is the JavaScript file for DOM elements
 * @author Sarah Fenton and Andrew Bartsch
 * @see {@link https://github.com/AndrewBartsch42/Chapter11-12-13-assignment}
 * @since 2026.04.15
 */

/**
 * function for getting the dom selector
 * @param {*} selector 
 * @returns 
 */
function get(selector) {
    return document.querySelector(selector);
}/**
 *  takes in a html element and text and then sets the element's text content to the given text
 * @param {*} selector 
 * @param {*} text 
 */

function setText(selector, text) {
    get(selector).textContent = text;
}
/**
 * takes in a html element and the value and then sets the element's value to the value given
 * @param {*} selector 
 * @param {*} value 
 */
function setValue(selector, value) {
    get(selector).value = value;
}
/**
 * takes in an element and returns the elements value
 * @param {*} selector 
 * @returns 
 */
function getValue(selector) {
    return get(selector).value;
}
/**
 * clears the given elements value and text content
 * @param {*} selector 
 */
function clear(selector) {
    const elem = get(selector);
    if (elem.value) elem.value = "";
    else elem.textContent = "";
}
/**
 * sets the focus to the given element
 * @param {*} selector 
 */
function focus(selector) {
    get(selector).focus();
}
/**
 * selects a given element
 * @param {*} selector 
 */
function select(selector) {
    get(selector).select();
}
/**
 * loads a given function to an event listener
 * @param {*} func 
 */
function load(func) {
    document.addEventListener("DOMContentLoaded", func);
}
/**
 * adds a click event listener to a given element
 * @param {*} selector 
 * @param {*} func 
 */
function addClick(selector, func) {
    get(selector).addEventListener("click", func);
}
/**
 * exports the above functions for use in other files
 */
export {get, setText, setValue, getValue, clear, 
    focus, select, load, addClick};