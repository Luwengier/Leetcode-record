/**
 * @param {number} x
 * @return {boolean}
 */
 function reverseString(str) {
    return str.split("").reverse().join("");
}

//

var isPalindrome = function(x) {
    const l = x.toString().length / 2
    return x.toString().slice(0, Math.ceil(l)) === reverseString(x.toString().slice(Math.floor(l)))
};
