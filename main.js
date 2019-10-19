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
// Herencia

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    imprimir(){
        document.write(`Nombre: ${this.nombre}<br>`);
        document.write(`Edad: ${this.edad}<br>`);
    }
}

class Amigo extends Persona{
    constructor(nombre,edad,cumple){
        super(nombre,edad);
        this.cumple = cumple;
    }
    imprimir(){
        super.imprimir();
        document.write(`Cumpleaños: ${this.cumple}<br>`);
    }    
}

const persona1 = new Persona("Rodrigo", 29);
persona1.imprimir();
document.write(`<hr>`);

const amigo1 = new Amigo("Juan", 23,"08/nov");
amigo1.imprimir();
