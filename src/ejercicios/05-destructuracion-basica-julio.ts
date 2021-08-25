//destructuracion de objetos

interface Reproductores {
    volumenes: number;
    segundos: number;
    canciones: string;
    detalless: Detalless;
}

interface Detalless {
    autores: string;
    anios: number;
}

const reproductorMusica: Reproductores = {
    volumenes: 90,
    segundos: 35,
    canciones: 'Mess',
    detalless: {
        autores: 'ed sheeran',
        anios: 2021
    }
}

//desestructuracion

const { volumenes, segundos, canciones, detalless} = reproductorMusica;
const { autores } = detalless

// console.log('El volumen actual de: ', volumenes);
// console.log('El segundo actual de: ', segundos);
// console.log('La canción actual de: ', canciones);
// console.log('El autor es: ', autores);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//destructuracion de arreglos

const dbzgt: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p4 ] = dbzgt;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p4);