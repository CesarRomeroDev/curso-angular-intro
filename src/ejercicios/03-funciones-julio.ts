function suma(a: number, b:number):number {
    return a + b;   //().toString para hacer el cambio de tipo number a string 
}

const sumarFlechas = (a: number, b: number) => {
    return a + b;
}


// el argumento requerido no puede seguir de un elemento opcional
function multiplicador(numero: number, otronumero?: number, base: number = 2): number {  //obligatorios y siempre es bueno ponerle el tipo
    return numero * base;
}

const resultado = multiplicador(5, 0, 10);
console.log(resultado);

///////////////////////////////////////////////////////////////////////////////////

// funciones con objetos como argumentos

// se utiliza void para no retornar nada.

interface PersonajeLor {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curacion( personaje: PersonajeLor, curarY: number): void {  //todos los argumentos deben de tener un tipo 

    personaje.pv = personaje.pv + curarY;

}

const otroPersonaje: PersonajeLor = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('puntos de vida: ', this.pv);
    }
}
curacion(otroPersonaje, 20);

otroPersonaje.mostrarHp();