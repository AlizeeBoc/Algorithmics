//Write a algorithm which receives an array of integers and check if its ordered ascendantly. Print true if the array is ordered, false if it’s not.

let a = [345, 9568, -35, -596, 56, 2, 36,]

function asc(a) {
    for (let i=1; i<a.length; i++) {
        if (a[i]<a[i-1]) {
            return false;
        }
    }
    return true;
}

let ascend=asc(a);
console.log(ascend);


/*
ou :
console.log(asc(a));
*/