export class Usuario {
    dni: string;
    email: string;
    nombre: string;
    apellidos: string;
    ciudad: string;

}
export class Mantenimiento extends Usuario{
    exp: string;
}
export class Cliente extends Usuario{
    contrasena: string;
}
