import { Login } from "./login";

export interface Sessions {
    id?: number,
    dateDebut?: string,
    dateFin?: string,
    lieu?: string,
    salle?: string,
    formateur?: string,
    support?: string,
    autres?: string,
    id_formation?: number;
    
}