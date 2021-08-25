// CLASES BASICAS

// class heroe {
//     alterEgo: string;
//     edad: number;
//     nombreReal: string;

//     imprimirNombre() {
//         return this.alterEgo + ', ' + this.nombreReal;
//     }
// }

// const hulk = new heroe();
// console.log(hulk);
///////////////////////////////////////////////////////////////////
//CONSTRUCTOR DE UNA CLASE:

// class heroeS {

//     constructor( 
//         public alterEgo: string,
//         public edad: number,
//         public nombreReal: string
//         ){
//     }
// }

// const capi = new heroeS( 'capiAmerica', 35, 'Steven');
// console.log(capi);

///////////////////////////////////////////////////////////////////
//EXTENDER UNA CLASE:
class PersonaMortal{

    constructor( 
        public nombre: string, 
        public direccion: string
        ){}
}

class heroeS extends PersonaMortal {

    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
        ){
            super( nombreReal, 'New York, USA' );
    }
}

const capi = new heroeS( 'capiAmerica', 35, 'Steven');
console.log(capi);