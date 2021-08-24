
//¿ como tipear un objeto anidado ?
interface SuperH {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDirec: () => string;
}
interface Direccion {
    calle: string; 
    pais: string; 
    ciudad: string;
}

const SuperH: SuperH = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDirec(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais; 
    }
}
const direcciones = SuperH.mostrarDirec();
console.log(direcciones);