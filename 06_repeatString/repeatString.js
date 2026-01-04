const repeatString = function(str,val) {
    if(val < 0)return 'ERROR';
    let resString = '';
    for(let i = 0; i < val; i++)resString+=String(str);

    return resString
};

// Do not edit below this line
module.exports = repeatString;
