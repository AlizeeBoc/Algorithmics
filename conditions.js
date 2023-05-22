/* In a cinema the full tariff is 10 €, the reduced one is 8 €. 
Write an algorithm which given a boolean indicating if the person can have a reduced tariff prints the price to pay.*/
variable AGE=26;
constante FULL=10;
constante REDUCED=8;

if ($age<18) then {
    output ("Reduced tariff") 
} else {
    output ("Full tarif")
}

//Write an algorithm which given 3 numbers finds the maximum. Integer et float//

variable a=542;
variable b=492;
variable c=207;

if ($a>$b) && ($a>$c) then {
    output ("The maximum is" +$a)
} else if ($b>$a) && ($b>$c) then {
    output ("The maximum is" +$b)
} else if ($c>$a) && ($c>$b) then {
    output ("The maximum is" +$c)
}

//Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none//
integer d1=5
integer d2=3
integer d3=5

if ($d1=$d2) || ($d1=$d3) || ($d2=$d3) then {
    output ("two")
} else if ($d1=$d2) && ($d2=$d3) then {
    output ("three")
} else {
    output ("none")
}

/* Write an algorithm which given the number of a day returns its name.*/
constant lundi=1;
constant mardi=2;
constant mercredi=3;
constant jeudi=4;
constant vendredi=5;
constant samedi=6;
constant dimanche=7;

if ($lundi) then {
    output(1);
}else if ($mardi) then {
    output(2;)
}else if ($mercredi) then {
    output (3);
}else if ($jeudi) then {
    output (4);
}else if ($vendredi) then {
    output (5);
}else if ($samedi) then {
    output (6);
}else if ($dimanche) then {
    output (7);
}

/* A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.*/
integer copy=100;

if ($copy<10) then {
    output (10*0.12+"€");
} else if (10<$copy<30) then {
    output (20*0.11+"€")
} else {
    output (0.10*$copy+"€")
}