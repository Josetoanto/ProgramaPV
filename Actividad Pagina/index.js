let listaUsuarios = [{user:"jose",pass:"1234"}]
localStorage.setItem("lista",JSON.stringify(listaUsuarios));
const iniciar = ()=> {
    window.location.assign("inicioSesion.html")
}
const registrarseVentana = () => {
    window.location.assign("registro.html")
} 
const paquetesVentana = () => {
    window.location.assign("paquetes.html")
} 
const confirmar = ()=>{
    listaUsuarios = JSON.parse(localStorage.getItem("lista"));
    let user1 = document.getElementById("usuario").value;
    let valorPassword1 = document.getElementById("passwordRegistro").value;
    let cConfirmar = document.getElementById("segundapassword").value;
    let mensaje = "";
   if (valorPassword1 === cConfirmar){
    let usuario = {user: user1 ,pass: valorPassword1 } 
    if (listaUsuarios.push (usuario)){
        mensaje = "Usuario guardado";
        window.location.assign("inicioSesion.html")
    } else {
        mensaje = "Error al guardar usuario";
    }
   } else {
    mensaje = "Contraseñas no iguales";
   }
   localStorage.setItem("lista",JSON.stringify(listaUsuarios));
   alert(mensaje);
}
const iniciarSesion = ()=>{
    listaUsuarios = JSON.parse(localStorage.getItem("lista"));
    let valorUsuario = document.getElementById("email").value;
    let valorPassword = document.getElementById("password").value;
    mensaje = "Usuario o Password incorrectos";

    for (let index = 0; index < listaUsuarios.length; index++) {
        if(listaUsuarios[index].user==valorUsuario && valorPassword){
            mensaje= "Bienvenido"  
            window.location.assign("index.html")
            break    
        }
    }
    alert (mensaje);
}