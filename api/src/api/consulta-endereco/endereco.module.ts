import { Module } from "@nestjs/common";
import { ViaCepService } from "src/core/via-cep.service";
import { EnderecoService } from "./adapters/endereco-service";

@Module({
    providers: [ViaCepService, EnderecoService]
})
export class EnderecoModule{}