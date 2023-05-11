import { Injectable } from "@nestjs/common";
import { IEndereco } from "./IEndereco";
import { ViaCepService } from "src/core/via-cep.service";
import { EnderecoResponse } from "../dto/endereco-response.dto";

@Injectable()
export class EnderecoService implements IEndereco{
    constructor(private viaCep: ViaCepService) {}

   async buscarEnderecoCep(cep: string): Promise<EnderecoResponse> {
        return await this.viaCep.buscarEnderecoPorCep(cep);
    }
}