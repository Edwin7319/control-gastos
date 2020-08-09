export const CONFIGURACION = {
  crearDatosDePrueba: false,
  bdd: {
    type: 'mysql',
    host: 'localhost',
    port: 32769,
    name: 'default',
    username: 'edwin',
    password: '123456',
    database: 'gastos',
    charset: 'utf8mb4',
    timezone: 'local',
    synchronize: true,
    dropSchema: false,
  },
  mongoDB: {
    uri: 'mongodb://localhost:32768/testing',
  },
  jwt_secret: '8dYw4g4Bmk9hrK'
};
