//inicializamos las cuentas
let cuentas= [{nombre: "Pedro", saldo: 340, nip:1234},
{nombre: "Juan", saldo: 94, nip:1111}, {nombre: "Maria", saldo: 840, nip:4321}
];
//solicitar NIP
do {
  var pin=parseInt(prompt("NIP?")); //pide el nip de la cuenta
var indiceCuenta= cuentas.findIndex((cuenta) => cuenta.nip === pin);
 if (indiceCuenta===-1) {
  alert("NIP no-válido")
  
 } else {
  let r = document.getElementById("alerta");
    r.textContent = "NIP correcto!. Bienvenido "+cuentas[indiceCuenta].nombre;
 } 
} while (indiceCuenta===-1);

function consultarSaldo(pin) {
  
   
     indiceCuenta= cuentas.findIndex((cuenta) => cuenta.nip === pin);
    
    let r = document.getElementById("saldo");
    r.textContent = "TU SALDO ACTUAL ES:  $"+cuentas[indiceCuenta].saldo;
     
        
   }

   // Función para depositar dinero
 function depositar() {

    let deposito = document.getElementById("deposito").value;
    indiceCuenta= cuentas.findIndex((cuenta) => cuenta.nip === pin);
    if (deposito> 0 ) {
      saldo=cuentas[indiceCuenta].saldo+ parseFloat(deposito);
      if (saldo<=900) {
        cuentas[indiceCuenta].saldo=saldo
        let r = document.getElementById("saldo");
        r.textContent = "TU SALDO ACTUAL ES:  $"+cuentas[indiceCuenta].saldo;
      } else {
        let r = document.getElementById("saldo");
        r.textContent = "TU SALDO NO DEBERA EXCEDER : $900";
      }
    } else {
      alert('La cantidad a depositar debe ser mayor que 0.');
    }
  }
  
    
// Función para retirar dinero
function retirar() {
    let retiro = document.getElementById("retiro").value;
    indiceCuenta= cuentas.findIndex((cuenta) => cuenta.nip === pin);
    if (retiro <= cuentas[indiceCuenta].saldo) {
      saldo=cuentas[indiceCuenta].saldo- retiro;
      if (saldo>=10) {
        cuentas[indiceCuenta].saldo=saldo
        let r = document.getElementById("saldo");
        r.textContent = "TU SALDO ACTUAL ES:  $"+cuentas[indiceCuenta].saldo;
      } else {
        let r = document.getElementById("saldo");
        r.textContent = "TU SALDO debe ser MAYOR o IGUAL a : $10";
      }
      
    } else {
      
      let r = document.getElementById("saldo");
        r.textContent = "TU SALDO NO ES SUFICIENTE Y DEBE ser MAYOR o IGUAL a : $10";
    }
  }
  
 function fin() {
  alert("!SESIÓN FINALIZADA¡")
    window.close();
  } 