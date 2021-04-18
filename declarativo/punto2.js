
let robarPlanos=idplano=>{
    if (idplano>0 && idplano<=10)
    {   
        
        return ("Despegar");

    }else{
       return ("No despegar, el plano es falso");
       
    }


}
console.log(robarPlanos(10));