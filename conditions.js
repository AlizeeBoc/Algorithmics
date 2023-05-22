/* In a cinema the full tariff is 10 €, the reduced one is 8 €. 
Write an algorithm which given a boolean indicating if the person can have a reduced tariff prints the price to pay.*/
Algorithme Tarif
variable :
    nbr:integer
constant full, reduced:integer


Début
Ecrire ("Entrer votre age")
Lire (nbr)
if ($age<18) then {
    output ("Reduced tariff") 
} else {
    output ("Full tarif")
}
end


//Write an algorithm which given 3 numbers finds the maximum. Integer et float//
Algorithme Maximum
Variable :
    nbr:integer

Début
    Ecrire ("Entrer trois nombres")
    Lire ($a, $b, $c)

if ($a>$b) && ($a>$c) then {
    output ("The maximum is" +$a)
    end
} else if ($b>$a) && ($b>$c) then {
    output ("The maximum is" +$b)
    end
} else if ($c>$a) && ($c>$b) then {
    output ("The maximum is" +$c)
    end
}
end 


//Write an algorithm which throws 3 dices and finds out the number of identical value, three, two or none//
Algorithme Dés
variables:
    d:integer

Début
    Ecrire ("Entrer les trois valeurs:")
    Lire ($d1,$d2,$d3)

if ($d1=$d2) || ($d1=$d3) || ($d2=$d3) then {
    output ("two")
    end
} else if ($d1=$d2) && ($d2=$d3) then {
    output ("three")
    end
} else {
    output ("none")
    end
}
end

/* Write an algorithm which given the number of a day returns its name.*/
Algorithme Jours
Variables :
    chf:integer

Début
    Write("Entrer un chiffre de 1 a 7: ")
    Lire($chf)
    switch 
        case 1:Ecrire("Lundi")
        case 2:Ecrire("Mardi")
        case 3:Ecrire("Mercredi")
        case 4:Ecrire("Jeudi")
        case 5:Ecrire("Vendredi")
        case 6:Ecrire("Samedi")
        case 7:Ecrire("Dimanche")
        default:Ecrire("Erreur")
    end



/* A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 and 0.10 € from there. Write an algorithm which given a number of copies and calculates the price.*/
Algorithme copy
Variable :
    copy:integer

Début 
Ecrire ('Entrer le nombre de copies: ')
Lire ($copy)

if ($copy<10) then {
    output (10*0.12+"€");
    end
} else if (10<$copy<30) then {
    output (20*0.11+"€")
    end
} else {
    output (0.10*$copy+"€")
    end
}
end