// entregable


let nombre = prompt(" Ingresa tu nombre")
let apellido = prompt(" Ingresa apellido")


function suTurno(nombre, apellido){

return nombre +" "+ apellido; 
    
}

//ARRAY
const servicio = ["","Manos", "Pies","Rostro"];
let serv= servicio.length;


for( let i=1; i<serv; i+=1){
    Text += "<li>" + servicio[i] + "</li>";
     //const servicio=prompt("Ingresa el servicio");
    if(servicio=="esc"){
        break;
        
    }
     alert(" Su turno es "+ i + " Nombre: " + suTurno(nombre, apellido) + " para el servicio: " + servicio[i]);
} 


let dato= prompt(" Desea agregar algo más?");
while(dato!= "esc"){
    alert(" Usted a ingresado " + dato);
    dato=prompt(" Ingresar otro dato? de lo contrario digite esc");
}
