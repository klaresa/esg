import axios from "axios";
import { Injectable } from "@nestjs/common";
import { Empresa } from "./interfaces/empresa.interface";

@Injectable()
export class EmpresaService {

  async findAll(): Promise<Empresa[]> {
    return  await axios.get('http://localhost:3333/empresas')
        .then(res => res.data)
        .catch(err => err);
  }

  async findById(id): Promise<Empresa> {
    return await axios.get(`http://localhost:3333/empresas/${id}`)
        .then(res => res.data)
        .catch(err => err);
  }

  async findByName(name): Promise<Empresa> {
    return await axios.get(`http://localhost:3333/empresas/name/${name}`)
        .then(res => res.data)
        .catch(err => err);
  }
}
