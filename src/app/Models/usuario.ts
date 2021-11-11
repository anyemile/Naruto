export class Usuario{
    _id?: number;
    tipIdentificacion: string;
    identificacion: number;
    email: string;
    telefono: number;
    

    constructor(tipIdentificacion: string, identificacion: number, email: string, telefono: number){
        this.tipIdentificacion = tipIdentificacion;
        this.identificacion = identificacion;
        this.email = email;
        this.telefono = telefono;
    }
}