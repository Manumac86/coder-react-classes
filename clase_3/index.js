console.log('Hola Coders!');

let i = 0;
console.log("i = " + i);
i = i + 1;
console.log("i = " + i);
i++;
console.log("i = " + i);
/* for(let a = 0; a < 10; a++) {
  console.log(`The value of a is ${a}`);
} */

// i = null;
/* if (i) {
  console.log(`The value of i is ${i}`);
} else {
  console.log("i is not defined");
} */

// Condicional ternario.
i ? console.log(`The value of i is ${i}`) : console.log("i is not defined"); 

let cartData = ['obj1', 'obj2', 'obj3'];

cartData.push('obj4');
cartData.push('obj5');
cartData.push('obj6');


let newCart = [...cartData, 'obj4', 'obj5', 'obj6'];

console.log(cartData);

let newObject = {
  a: 3,
  b: 4,
  c: 'Hola!'
}
newObject.a = 6;
let id = "3jkhdiuahsdjklnajksdnUIB74930HSDAYSHjnq8";
newObject = {
  ['productoDeMiTienda-' + id]: 'Hola2!',
  b: 32,
  c: 6
}
console.log(newObject);