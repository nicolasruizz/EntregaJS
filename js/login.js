const error = () => Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Ingreso un dato incorrecto',
    footer: 'Vuelve a intertarlo',
    timer: 5000,
  })
// LOGIN
let login = document.querySelector("#login")
login.addEventListener("submit", ingresar)
function ingresar(e){
    e.preventDefault();
    let resultadoUs = document.querySelector("#usuario").value;
    let resultadoPw = document.querySelector("#pw").value;

    if(resultadoUs === "hernansartorio" && resultadoPw === "logisticas3"){console.log("Usted puede ingresar")
    location.href="./novedades.html"}else{
      error()
      setInterval("location.reload()",2000)}
}

