import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmConfigService } from './typeorm-config';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();
const configService = new ConfigService();
const database = new TypeOrmConfigService(configService);
export const dataConfigMigrations = new DataSource(
  database.createTypeOrmOptions() as DataSourceOptions,
);
