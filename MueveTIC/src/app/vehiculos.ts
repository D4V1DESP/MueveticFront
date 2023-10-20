export interface Vehiculo{
    matricula:string;
    tipo:string;
    modelo:string;
    bateria:number;
    estado:string;
    direccion:string;
}

export interface Coche extends Vehiculo{
    n_plazas:string;
}

export interface Moto extends Vehiculo{
    casco:boolean;
}

export interface Patinete extends Vehiculo{
    color:string;
}