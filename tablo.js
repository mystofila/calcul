// function calculvente()
// {
// alert("Prix d'achat " + document.getElementById("formulaire").elements["prix"].value);
// let prix_achat=parseFloat(document.getElementById("formulaire").elements["prix"].value);
// if (!isNaN (prix_achat))
// {
// let vente= document.getElementById("formulaire").elements["prix"].value * document.getElementById("formulaire").elements["marge"].value;
// alert(vente);
// document.getElementById("formulaire").elements["vente"].value=vente;
// }else
// {
// alert("Vous devez entrer un chiffre, en utilisant le . comme séparateur");
// }
// }

function somme(){
    let nbr1, nbr2, sum1;
    nbr1 = Number(document.getElementById("nbr1").value);
    nbr2 = Number(document.getElementById("nbr2").value);
    nbr3 = Number(document.getElementById("nbr3").value);
    nbr4 = Number(document.getElementById("nbr4").value);
    nbr5 = Number(document.getElementById("nbr5").value);
    nbr6 = Number(document.getElementById("nbr6").value);
    nbr7 = Number(document.getElementById("nbr7").value);
    nbr8 = Number(document.getElementById("nbr8").value);
    sum1 = nbr1 * nbr2;
    sum2 = nbr3 * nbr4;
    sum3 = nbr5 * nbr6;
    sum4 = nbr7 * nbr8;
    sum = sum1 + sum2 + sum3 + sum4;
    document.getElementById("sum1").value = sum1;
    document.getElementById("sum2").value = sum2;
    document.getElementById("sum3").value = sum3;
    document.getElementById("sum4").value = sum4;
    document.getElementById("sum").value = sum;
}
