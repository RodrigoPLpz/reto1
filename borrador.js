var x = document.querySelector('#persona');
function mostrar(){
    var y = document.getElementById("opc").value;
    fetch("https://randomuser.me/api")
        .then(res => res.json())
        .then(data => {
            // console.log(data.results)
            persona.innerHTML= `
            <img src="${data.results[0].picture["large"]}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title">${data.results[0].name["first"]}</h4>
                <h5 class="card-title">${data.results[0].gender}</h5>
                <p class="card-text">${data.results[0].dob["age"]}</p>
                <a href="#" class="btn btn-primary" onclick="location.reload()">clic</a>
            </div>
            `
        })
}

// Intento dos
class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }

    imprimir() {
      document.write(`Nombre: ${this.nombre}<br>`);
      document.write(`Edad: ${this.edad}<br>`);
    }    
  }

  class Empleado extends Persona {
    constructor(nombre, edad, sueldo) {
      super(nombre, edad);
      this.sueldo = sueldo;
    }

    imprimir() {
      super.imprimir();
      document.write(`Sueldo: ${this.sueldo}<br>`);      
    }

    pagaImpuestos() {
      if (this.sueldo>5000)
        document.write(`${this.nombre} debe pagar impuestos<br>`);
      else
        document.write(`${this.nombre} no debe pagar impuestos<br>`);      
    }
  }

  const persona1=new Persona('Rodrigo', 44);
  persona1.imprimir();
  document.write('<hr>');

  const empleado1=new Empleado('Juan', 44, 7000);
  empleado1.imprimir();
  empleado1.pagaImpuestos();

  //Intento 3
  