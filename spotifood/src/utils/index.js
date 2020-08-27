/**
 * Function to define a string in a pattern to be used in all search inputs.
 * @param {String} str term to search.
 */
export function toSearchableString(str) {
    return str ? str.trim().toLowerCase() : '';
}

/**
 * define if array is empty
 * @param {Array} array 
 */
export function isEmpty(array) {
    return !array || array.length === 0;
}