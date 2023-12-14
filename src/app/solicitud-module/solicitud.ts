import { usuarioDTO } from "./usuarioDTO"
import { protectoraDTO } from "./protectoraDTO"
import { animalDTO } from "./mascotasDTO";


export class Solicitud {

    id: number;
    estadoSolicitud: string;
    tituloMotivo: string;
    motivo: string;

    animalDTO: animalDTO;
    usuarioDTO: usuarioDTO;
    protectoraDTO: protectoraDTO;
}
