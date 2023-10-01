document.addEventListener("DOMContentLoaded", () => {
    const Btnsub = document.getElementById("botons");
    const endpoint = "https://jsonplaceholder.typicode.com/users";
  
    Btnsub.addEventListener("click", (fun) => {
      fun.preventDefault();
  
      const nombre = document.getElementById("nombre").value;
      const apellido = document.getElementById("apellido").value;
      const FechadeN = document.getElementById("fechaden").value;
  
      const DatosdelFormulario = {
        nombre: nombre,
        apellido: apellido,
        fechadenas: FechadeN,
      };
      const datosJSON = JSON.stringify(DatosdelFormulario);
      console.log(datosJSON);
  
      
      fetch(endpoint, {
        method: 'POST',
        body: datosJSON,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error al enviar la solicitud:', error);
      });
    });
  });