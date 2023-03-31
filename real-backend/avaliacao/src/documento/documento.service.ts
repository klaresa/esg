import axios from "axios";
import { Injectable } from "@nestjs/common";
import { Documento } from "./interfaces/documento.interface";

@Injectable()
export class DocumentoService {

  async findAll(): Promise<Documento[]> {
    return  await axios.get('http://localhost:3002/documentos')
        .then(res => res.data)
        .catch(err => err);
  }

  async findById(id): Promise<Documento> {
    console.log(`find document by id: ${id}`)
    return await axios.get(`http://localhost:3002/documentos/${id}`)
        .then(res => res.data)
        .catch(err => err);
  }

  async findByName(name): Promise<Documento> {
    return await axios.get(`http://localhost:3002/documentos/name/${name}`)
        .then(res => res.data)
        .catch(err => err);
  }
}
