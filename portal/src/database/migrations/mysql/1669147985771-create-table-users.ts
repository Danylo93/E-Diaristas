import { MigrationInterface, QueryRunner } from 'typeorm';

export class createTableUsers1669147985771 implements MigrationInterface {
  name = 'createTableUsers1669147985771';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user_platform\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_cb3a4936c91a8c036d23ad81c5\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_cb3a4936c91a8c036d23ad81c5\` ON \`user_platform\``,
    );
    await queryRunner.query(`DROP TABLE \`user_platform\``);
  }
}
