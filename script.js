"use strict";

const strFunc = function(str){
    if (typeof str != 'string' ) {return 'Не строка';}
    if (str.length >= 30) {return str.substring(0,31) + '...';}
    return str.trim();
};

console.log(strFunc('00000000000000000000000000000000000000'));