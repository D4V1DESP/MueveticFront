export interface Vehiculo{
    matricula : string;
    direccion : string;
    modelo : string;
    bateria : string;
    estado : string;
}


export interface Coche extends Vehiculo{
    nPlazas:string;
}

export interface Moto extends Vehiculo{
    casco:boolean;
}

export interface Patinete extends Vehiculo{
    color:string;
}