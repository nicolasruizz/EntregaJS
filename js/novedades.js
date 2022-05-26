// MENU DE PRINCIPAL

document.querySelector("#crearNovedad").addEventListener("click", ()=> abrirMenu("crearArticulo"));
document.querySelector("#buscarNovedad").addEventListener("click", ()=> abrirMenu("buscarArticulo"));
document.querySelector("#borrarNovedad").addEventListener("click", ()=> abrirMenu("borrarArticulo"));
document.querySelector("#flechaBuscar").addEventListener("click", ()=> abrirMenu("abrirmenu"));
document.querySelector("#flechaBorrar").addEventListener("click", ()=> abrirMenu("abrirmenu"));
document.querySelector("#flechaCrear").addEventListener("click", ()=> abrirMenu("abrirmenu"));

 abrirMenu =(menu) =>{
    if(menu == "crearArticulo"){
        document.querySelector("#menuUsuario").classList.replace("aparece", "hidden")
        document.querySelector("#crearArticulo").classList.replace("hidden", "aparece")
    }else if(menu == "buscarArticulo"){
        document.querySelector("#menuUsuario").classList.replace("aparece","hidden")
        document.querySelector("#buscarArticulo").classList.replace("hidden", "aparece")
    }else if(menu == "borrarArticulo"){
        document.querySelector("#menuUsuario").classList.replace("aparece","hidden")
        document.querySelector("#borrarArticulo").classList.replace("hidden", "aparece")
    }else{
        document.querySelector("#borrarArticulo").classList.replace("aparece","hidden")
        document.querySelector("#buscarArticulo").classList.replace("aparece","hidden")
        document.querySelector("#crearArticulo").classList.replace("aparece","hidden")
        document.querySelector("#menuUsuario").classList.replace("hidden","aparece")
    }
}




class Novedades{
    constructor (chofer,cliente, direccion ,nropaquete,observacion){
        this.chofer         = chofer;
        this.cliente        = cliente;
        this.direccion      = direccion
        this.nropaquete     = nropaquete;
        this.observación    = observacion;
            
    } 



}

const NOVEDAD = [];




// CREAR NOVEDAD
document.querySelector("#formCrear").addEventListener("submit",crearN)
function crearN(e){
    e.preventDefault();
    let novLS = JSON.parse(localStorage.getItem('NovedadesLS'))
    let choferF      = document.querySelector("#chofer").value;
    let clienteF     = document.querySelector("#cliente").value;
    let direccF      = document.querySelector("#direccion").value;
    let nroP         = document.querySelector("#paquete").value;
    let observacionF = document.querySelector("#observacionN").value;
    let comparar = novLS.find(novedad => novedad.nropaquete == nroP)
    if(comparar != undefined){
        Swal.fire({
            text: 'Ya hay un paquete con ese nro che',
            timer: 5000,
          })
          document.querySelector("#formBuscar").reset();

    }else{

    let newNovedad = new Novedades(choferF,clienteF,direccF,nroP,observacionF);
    
    
    
    NOVEDAD.push(newNovedad);
    console.log(NOVEDAD)
    console.log(NOVEDAD)
    localStorage.setItem('NovedadesLS', JSON.stringify(NOVEDAD));
    document.querySelector("#formCrear").reset()
    abrirMenu("abrirmenu")
    }}
  

document.querySelector("#formBuscar").addEventListener("submit",buscarN)
function buscarN(e){
    e.preventDefault();
    let bnrpq = document.querySelector("#paqueteB").value;
    console.log(bnrpq)
    let novLS = JSON.parse(localStorage.getItem('NovedadesLS'));
    console.log(novLS)
    let comparar = novLS.find(novedad => novedad.nropaquete == bnrpq)
    if (comparar != undefined){   
        bMostrar =`  <p>Chofer: ${comparar.chofer}</p><br>
                    <p>Cliente: ${comparar.cliente}</p><br>
                    <p>Dirección: ${comparar.direccion}</p><br>
                    <p>Observación: ${comparar.observacion}</p><br>
                    <p>Nropaquete: ${comparar.nropaquete}</p><br> 
                       `    
                }
        else{
      bMostrar= `<p> NO ENCONTRAMOS NADA</p>
             `}
    
    document.querySelector("#buscarResult").innerHTML= bMostrar;
    document.querySelector("#formBuscar").reset();

}

document.querySelector("#formBorrar").addEventListener("submit",borrarN)
function borrarN(e){
    e.preventDefault();
    let bnrpq = document.querySelector("#paqueteBorrar").value;
    console.log(bnrpq)
    let novLS = JSON.parse(localStorage.getItem('NovedadesLS'));
    console.log(novLS)
    let comparar = novLS.find(novedad => novedad.nropaquete == bnrpq)
    if (comparar != undefined){   
        bMostrar =`  <p>Chofer: ${comparar.chofer}</p><br>
                    <p>Cliente: ${comparar.cliente}</p><br>
                    <p>Dirección: ${comparar.direccion}</p><br>
                    <p>Observación: ${comparar.observacion}</p><br>
                    <p>Nropaquete: ${comparar.nropaquete}</p><br><p class="text-white-50 mb-5">Usted esta seguro que quiere borrarlo?</p>
                    <a id="afirmacion" class="btn btn-outline-light btn-lg px-5">Si</a>
                    <a id="negacion" class="btn btn-outline-light btn-lg px-5">No</a>  
                       `
                    document.querySelector("#borrarResult").innerHTML= bMostrar
                    document.querySelector("#afirmacion").addEventListener("click", eliminarN)
                       function eliminarN(){
                           novLS.splice(comparar)
                           console.log(novLS)
                           localStorage.setItem('NovedadesLS', JSON.stringify(novLS))
                           console.log(novLS)
                           Swal.fire({
                            text: 'BORRASTE UNA NOVEDAD ',
                            timer: 5000,
                          })
                          setInterval(abrirMenu("abrirmenu"), 6000)

                       }
                       document.querySelector("#negacion").addEventListener("click", eliminarNN)
                       function eliminarNN(){
                           Swal.fire({
                            text: 'Volvemos al inicio entonces ',
                            timer: 5000,
                          })
                        setInterval(abrirMenu("abrirmenu"), 6000)

                       }    

            
    }else{
        
        bMostrar= `<p> NO ENCONTRAMOS NADA</p>`
        document.querySelector("#borrarResult").innerHTML= bMostrar
                     
    }
    document.querySelector("#formBorrar").reset()
    
} 


