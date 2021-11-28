let num = 266219;
let str = num.toString();

let p = 1;

for (let i = 0; i < str.length; i++) {
    p *= str[i];
    
}

console.log(p);

p = p ** 3;

console.log(p);
p = p.toString();
console.log(p[0]+p[1]);
