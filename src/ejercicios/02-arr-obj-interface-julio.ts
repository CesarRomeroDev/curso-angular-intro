let talento: string[] = ['Bash', 'Counter', 'healing'];  //arreglo[] 

//objetos
//para trabajar con objetos podes utilizar las interface
//las interface son una serie de llaves para asegurarnos que un objeto luzca como nosotros queremos

interface persona{
    nombre: string;
    hp: number;
    habilidades: string[];
    pueblonatal?: string  // el signo de interrogacion nos indica que puede ser opcional ,ya que no se encuentra en nuestros ojetos
}

const persona: persona = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'healing']
} 
persona.pueblonatal = 'pueblopaleta';

console.table(persona);  //table nos imprime una tabla con los objetos de persona