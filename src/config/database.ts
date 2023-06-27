import { Dialect, Sequelize } from 'sequelize';
import 'dotenv/config'

const dbName = process.env.dbName
const dbUser = process.env.dbUser
const dbHost = process.env.dbHost
const dbDriver = process.env.dbDriver as Dialect
const dbPassword = process.env.dbPassword
const sequelize = new Sequelize(dbName!, dbUser!, dbPassword!, {
  host: dbHost,
  dialect: dbDriver,
  logging: false
});

export default sequelize ;
