



function asignarActividad(nombre1,edad,planeta,estatura)
{
     
   if(edad>0 && edad<15){return(`La actividad asignada a ${nombre1} del planeta ${planeta} y con ${estatura}cm de estatura es:
    MANEJO DE LA FUERZA`);}
    else{return(`La actividad asignada a ${nombre1} del planeta ${planeta} y con ${estatura}cm de estatura es:
    MANEJO DEL LASER`);}

}
console.log(asignarActividad("carol",(15),"Jakku",(100)));