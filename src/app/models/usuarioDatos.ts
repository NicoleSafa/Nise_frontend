import { loginDTO } from "./loginDTO";

export class UsuarioDatos {

    id: number;
    nombre: string;
    telefono: number;
    direccion: string;
    email: string;
    dni: string;
    activo: boolean;
    preferenciaTipoAnimal: string;
    preferenciaTipoTamanyo: string;
    preferenciaSexo: string;
    loginDTO: loginDTO;
}
