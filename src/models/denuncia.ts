import { Imagem } from "./imagem";

export interface Denuncia{
    email: string;
    motivo_ocorrencia: string;
    imagem: Imagem;
}