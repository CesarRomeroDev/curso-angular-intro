import { Producto, calculaISV } from './06-desestructuracion-funcion-julio';

//importaciones y exportaciones


const carritoCompras: Producto[] = [
    {
        desc: 'telefono 1',
        precio: 200
    },
    {
        desc: 'telefono 2',
        precio: 150
    }
];

const [total, isv] = calculaISV( carritoCompras );
console.log( 'total: ', total );
console.log( 'ISV; ', isv );