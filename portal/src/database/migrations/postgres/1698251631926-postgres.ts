import { MigrationInterface, QueryRunner } from 'typeorm';

export class Postgres1698251631926 implements MigrationInterface {
  name = 'Postgres1698251631926';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user_platform" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "UQ_cb3a4936c91a8c036d23ad81c56" UNIQUE ("email"), CONSTRAINT "PK_c04f5e66bc945d68be2c702cbb2" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "servico" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "valor_minimo" integer NOT NULL, "quantidade_horas" integer NOT NULL, "porcentagem" integer NOT NULL, "valor_quarto" integer NOT NULL, "horas_quarto" integer NOT NULL, "valor_sala" integer NOT NULL, "horas_sala" integer NOT NULL, "valor_banheiro" integer NOT NULL, "horas_banheiro" integer NOT NULL, "valor_cozinha" integer NOT NULL, "horas_cozinha" integer NOT NULL, "valor_quintal" integer NOT NULL, "horas_quintal" integer NOT NULL, "valor_outros" integer NOT NULL, "horas_outros" integer NOT NULL, "icone" character varying NOT NULL, "posicao" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_289d0aa6d49f9d0fd65aefc6677" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "servico"`);
    await queryRunner.query(`DROP TABLE "user_platform"`);
  }
}
