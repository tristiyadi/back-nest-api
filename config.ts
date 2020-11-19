import { databaseConfig } from './src/core/database/database.config';

export default process.env.NODE_ENV === 'production' ? databaseConfig.production : databaseConfig.development;
