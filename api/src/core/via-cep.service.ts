import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { EnderecoResponse } from "src/api/consulta-endereco/dto/endereco-response.dto";
import axios from 'axios';

@Injectable()
export class ViaCepService {
    async buscarEnderecoPorCep(cep: string) {
        const URL_CEP = `https://viacep.com.br/ws/${cep}/json/`;
        let endereco = new EnderecoResponse();

        try {
            const body = await axios.get(URL_CEP);
            endereco = body.data;
        } catch (error) {
            if (error.response['status'] === 400) {
                throw new BadRequestException('CEP inválido');
            }
            if (error.response['status'] === 500) {
                throw new BadRequestException('Serviço de CEP Fora do ar, Tente Novamente');
            }
        }
        if (endereco['erro'] === true) {
            throw new NotFoundException('CEP Não encontrado');
        }

        return endereco;
    }
}