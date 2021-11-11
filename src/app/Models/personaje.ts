export class Personaje{
    _id?: number;
    nombre: string;
    genero: string;
    tecnicas: string;
    clan: string;
    chakra: string;

    constructor(nombre: string, genero: string, tecnicas: string, clan: string, chakra: string){
        this.nombre = nombre;
        this.genero = genero;
        this.tecnicas = tecnicas;
        this.clan = clan;
        this.chakra = chakra;
    }
}

