import { Postagem } from "./Postagem"
import { Usuario } from "./Usuario"

export class Tema{
    public id: number
    public descricao: string
    public postagem: Postagem[]
}