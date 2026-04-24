/**
 * This is the JavaScript file for the localStorage
 * @author Sarah Fenton and Andrew Bartsch
 * @see {@link https://github.com/AndrewBartsch42/Chapter11-12-13-assignment}
 * @since 2026.04.15
 */

/**
 * retrieves a given item from the json file
 * @param {*} key 
 * @returns 
 */
function retrieve(key) { 
    const json = localStorage.getItem(key);
    if(json) {
        return JSON.parse(json);
    } else {
        return null;
    }
}
/**
 * stores a given key and data value into the json
 * @param {*} key 
 * @param {*} data 
 */
function store(key, data) { 
    localStorage.setItem(key, JSON.stringify(data)); 
}
/**
 * removes an item key pair from the local storage
 * @param {*} key 
 */
function remove(key) { 
    localStorage.removeItem(key); 
}
/**
 * exports the above functions for use in other files
 */
export {retrieve, store, remove}