//Write an algorithm which receives an array of integers and prints its maximum.

const a = [12, 165, 354, 25, 1032, 5, 188, 40]

function max(a) { 
    let max = a[0];
    for (let i = 1; i<a.length; i++){
        if(a[i]>max){
         max=a[i];
        }
    }
return max;
}
console.log(max(a))



/* Mémo : 
- recherche du max : fonction
- initialisation de la variable "max" au premier élément du tableau cad [0]
- Action : comparer le nombre suivant et ainsi de suite jusqu'a a.lenght non inclus, de un en un.
- Si ce nombre est supérieur à la valeur de "max" ...
- la valeur max initiale est écrasée par la nouvelle valeur
- l'indice de let max=[] s'actualise
- Affiche le résultat en fin de boucle*/