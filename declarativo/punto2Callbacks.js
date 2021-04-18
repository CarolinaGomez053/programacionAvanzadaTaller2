
function robarPlanos(idPlano,despegar){
    
    if(idPlano>0 && idPlano<=10){

        let mensaje="El plano que se consiguio fue el "+idPlano;
        despegar(mensaje);
    }else{
        let error="pilas no es el plano"
        despegar(error);
    }

}

    robarPlanos(3,function(roboPlanos){

        console.log(roboPlanos);
        console.log("estamos despegando");
    });


