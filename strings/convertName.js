//Write a function which receives a name in this format "Doe, John" an returns it in this format "John Doe"
let wholename="Doe, John" ;

function name (wholename) {
    let indexVir=wholename.indexOf(",");
    let nom=wholename.substring(0,indexVir);
    let prénom=wholename.substring(indexVir + 2);
    let convert=prénom + " " + nom;
    return convert;
 }

let convert=name (wholename);
console.log(convert);



/*
brouillon :
let name = "Doe"
let surname = "John"
let whole = [name+", "+surname]
console.log(whole)

function convert (whole){
    for (let i>", "; i<whole.length, i++)
    return sub_string(whole)
    console.log
}*/

