import { MigrationInterface, QueryRunner } from "typeorm";

export class EnderecoDiarista1684461142882 implements MigrationInterface {
    name = 'EnderecoDiarista1684461142882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`endereco_diarista\` (\`id\` int NOT NULL AUTO_INCREMENT, \`logradouro\` varchar(60) NOT NULL, \`numero\` varchar(10) NOT NULL, \`bairro\` varchar(30) NOT NULL, \`complemento\` varchar(255) NULL, \`cep\` varchar(8) NOT NULL, \`cidade\` varchar(30) NOT NULL, \`estado\` varchar(2) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` ADD \`update_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` ADD \`endereco_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` ADD UNIQUE INDEX \`IDX_f4879f5b808cfd80e37001312e\` (\`endereco_id\`)`);
        await queryRunner.query(`ALTER TABLE \`diaria\` CHANGE \`complemento\` \`complemento\` varchar(255) NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_f4879f5b808cfd80e37001312e\` ON \`usuario_api\` (\`endereco_id\`)`);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` ADD CONSTRAINT \`FK_f4879f5b808cfd80e37001312ed\` FOREIGN KEY (\`endereco_id\`) REFERENCES \`endereco_diarista\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`diaria\` ADD CONSTRAINT \`FK_5e1094dcfc8b8eff8ed9602bdb2\` FOREIGN KEY (\`servico_id\`) REFERENCES \`servico\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`diaria_candidato\` ADD CONSTRAINT \`FK_fd9247286d049934078c05d91af\` FOREIGN KEY (\`diaria_id\`) REFERENCES \`diaria\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`diaria_candidato\` ADD CONSTRAINT \`FK_40b864ea45b69ec02acd5c152e5\` FOREIGN KEY (\`usuario_api_id\`) REFERENCES \`usuario_api\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`diaria_candidato\` DROP FOREIGN KEY \`FK_40b864ea45b69ec02acd5c152e5\``);
        await queryRunner.query(`ALTER TABLE \`diaria_candidato\` DROP FOREIGN KEY \`FK_fd9247286d049934078c05d91af\``);
        await queryRunner.query(`ALTER TABLE \`diaria\` DROP FOREIGN KEY \`FK_5e1094dcfc8b8eff8ed9602bdb2\``);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` DROP FOREIGN KEY \`FK_f4879f5b808cfd80e37001312ed\``);
        await queryRunner.query(`DROP INDEX \`REL_f4879f5b808cfd80e37001312e\` ON \`usuario_api\``);
        await queryRunner.query(`ALTER TABLE \`diaria\` CHANGE \`complemento\` \`complemento\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` DROP INDEX \`IDX_f4879f5b808cfd80e37001312e\``);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` DROP COLUMN \`endereco_id\``);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` DROP COLUMN \`update_at\``);
        await queryRunner.query(`ALTER TABLE \`usuario_api\` ADD \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`DROP TABLE \`endereco_diarista\``);
    }

}
