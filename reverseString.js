module.exports = reverseString;

function reverseString(string) {
    let reverseString = '';
    for (let i = 0; i < string.length; i++) {
        reverseString += string.charAt(string.length - i - 1);
    }
    return reverseString;
}