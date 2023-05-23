//Write an algorithm which receives an array of integers and prints the position of its minimum.

const a = [365, 95421, -32, 524, 33, -589, 6543]

function Position_Min (a) {
    let min = a[0];
    let index_min = 0;
    for (let i = 1; i<a.length; i++) {
        if (a[i]<min) {
            min = a[i];
            index_min = i;
        }
    }
return (index_min);
}


console.log(Position_Min(a));


/*ou 
>>let index_min = Position_Min(a);    (variable peut avoir tout autre nom : index_min n'est stockée nulle part ailleurs qu'au sein de la fonction)
>>console.log(index_min);
*/