"use strict";

let arr = [];

arr = [21345423, 1234235, 5341245, 452523657, 23452345, 6234523, 1234665];

for (let i = 0; i < arr.length; i++) {
    
     if (String(arr[i])[0] == '2' || String(arr[i])[0] == '4'){
         console.log(arr[i]);
     }
    
}

///Часть два про простые числа///

let flag = 0

for (let i = 1; i < 101; i++) {
    flag = 0
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
       
    }
    if (flag == 0 && i != 1) {
        console.log('+' + i);
    }
    
}

