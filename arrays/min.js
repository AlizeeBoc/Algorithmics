//Write an algorithm which receives an array of integers and prints its minimum.

let a = [12, 532, 297, 3, -325, 1089, 973];
let min=a[0];

for (i=0; i<a.length; i++){
    if (min>a[i]) {
        min=a[i];
    }
}
console.log(min)