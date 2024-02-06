// Starting the file up
module.exports = capitalize;

function capitalize(string) {
    string.charAt(0).toUpperCase();
    return string.charAt(0).toUpperCase() + string.substring(1);
};

console.log(capitalize('capitalize'))