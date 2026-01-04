const sumAll = function(a,b) {
    if(typeof a !== 'number' || typeof b !== 'number')return 'ERROR'
    else if(a < 0 || b < 0)return 'ERROR'
    else if(!Number.isInteger(a) || !Number.isInteger(b))return 'ERROR'
    else{
        let mx = Math.max(a,b)
        let mn = Math.min(a,b)
        return mx*(mx + 1) / 2 - (mn)*(mn - 1) / 2
    }
};

// Do not edit below this line
module.exports = sumAll;
