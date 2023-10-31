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
    exp: string;
    ciudad: string
}
export class Cliente extends Usuario{
    carnet: string;
    fecha_nacimiento: string;
    telefono: string;
}
