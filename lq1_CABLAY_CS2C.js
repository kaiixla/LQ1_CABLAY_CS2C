//persona 1 informations
let p1fullName = "Maria Delos Santos Las Marias";
let p1age = 25;
let p1address = "Upper Session Road, Baguio City, Benguet";

//persona 2 informations
let p2fullName = "Juan Gamoso Dela Cruz";
let p2age = 28;
let p2address = "San Nicolas, Candon City, Ilocos Sur";

//arrangement of LAST NAME, first name and middle name
let p1infoarr = p1fullName.split(" ").slice(3).concat(",").concat(p1fullName.split(" ").slice(0, 3)).join(" "); //arranging it using split,slice and join
let p2infoarr = p2fullName.split(" ").slice(2).concat(",").concat(p2fullName.split(" ").slice(0, 4)).join(" ");//arranging it using split,slice and join

//labels for the name, age and address
let namelabel = "Name: ";
let agelabel = " Age: ";
let addlabel = " Address: ";
let p1full = namelabel.concat(p1infoarr).concat(",").concat(agelabel).concat(p1age).concat(",").concat(addlabel).concat(p1address);//giving labels for persona 1
let p2full = namelabel.concat(p2infoarr).concat(",").concat(agelabel).concat(p2age).concat(",").concat(addlabel).concat(p2address);//giving labels for persona 2

//variable for sum of all the value
let sum4all = p1fullName.length + p2fullName.length + p1address.length + p2address.length + p1age + p2age; //sum of all numeric values
let ages = p1age + p2age; //sum of the ages of persona 1 and persona 2
let sub1 = ages - p1fullName.length; //subtrahend of their ages
let mult = sub1 * p2fullName.length; //product of the subtrahend of their ages and persona 2 name length
let p1raise = p1fullName.length ** p2address.length;

//console for the final ouputs
console.log(p1full);
console.log(p2full);
console.log(sum4all);
console.log(ages);
console.log(sub1);
console.log(mult);
console.log(p1raise);