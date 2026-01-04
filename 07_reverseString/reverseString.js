const reverseString = function(str) {
    if(typeof str !== 'string')return "ERROR"

    resString = '';
    let index = str.length - 1
    for(let i = index; i >=0; i--)resString+=str.charAt(i)
    return resString


};

// Do not edit below this line
module.exports = reverseString;
