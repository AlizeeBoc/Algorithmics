//Write an algorithm which receives an array of integers and prints its minimum.

let a = [12, 532, 297, 3, -325, 1089, 973]

function min(a) {
    let min = a[0];
    for (let i=1; i<a.length; i++) {
        if (a[i]<min){
            min=a[i]
        }
    }
    return min;
}

console.log(min(a));