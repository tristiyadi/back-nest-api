export interface IDatabaseConfigAttributes {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number | string;
  dialect?: string;
  urlDatabase?: string;
  models?: any;
}

export interface IDatabaseConfig {
  development: IDatabaseConfigAttributes;
  production: IDatabaseConfigAttributes;
}
