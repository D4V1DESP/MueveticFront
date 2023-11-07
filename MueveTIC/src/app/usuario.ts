export class Usuario {
    dni: string;
    email: string;
    nombre: string;
    apellidos: string;

}
export class Administrador extends Usuario{
    ciudad: string;
}
export class Mantenimiento extends Usuario{
    experiencia: number;
    ciudad: string
}
export class Cliente extends Usuario{
    carnet: string;
    fecha: string;
    telefono: string;
}
