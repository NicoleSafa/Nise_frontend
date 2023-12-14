import { usuarioDTO } from "../solicitud-module/usuarioDTO"
import { protectoraDTO } from "../solicitud-module/protectoraDTO"
import { animalDTO } from "../solicitud-module/mascotasDTO";


export class SolicitudDatos {

    id: number;
    estadoSolicitud: string;
    tituloMotivo: string;
    motivo: string;

    animalDTO: animalDTO;
    usuarioDTO: usuarioDTO;
    protectoraDTO: protectoraDTO;
}
