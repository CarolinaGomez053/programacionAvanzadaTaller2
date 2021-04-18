function robarPlanos (idplano)
{
    if (idplano>0 && idplano<10)
    {   
        let mensaje="Despegar";
        return (mensaje);

    }else{
        let error="No despegar, el plano es falso";
        return (error);
    }


}
console.log(robarPlanos(11));
