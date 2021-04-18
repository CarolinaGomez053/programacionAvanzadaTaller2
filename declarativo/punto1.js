
function asignarActividad(nombre1,edad,planeta,estatura,asignarActividad)
{
     
   if(edad>0 && edad<15)
   {
    let actividad1=(`La actividad asignada a ${nombre1} del planeta ${planeta} y con ${estatura}cm de estatura es:
    MANEJO DE LA FUERZA`);
    asignarActividad(mensaje);}

    else {let actividad2=(`La actividad asignada a ${nombre1} del planeta ${planeta} y con ${estatura}cm de estatura es:
    MANEJO DEL LASER`);

    asignarActividad(mensaje2);}

}
console.log(asignarActividad("carol",(15),"Jakku",(100), function(actividad){

    console.log(actividad);
}));
