import express from 'express';
import router from './interfaces/router';
import 'dotenv/config'
import sequelize from './config/database';
import logger from './interfaces/middlewares/logger';

const PORT = process.env.PORT || 5000
const app = express();

app.use(router);

function handleShutdown(): void {
    logger.info('shutting down node');
    process.exit(0);
}
process.on('SIGINT', handleShutdown); // ctrl + c
process.on('SIGTERM', handleShutdown); // kill pid

sequelize.sync()
    .then(() => logger.info('Connected successfully'))
    .catch((error) => logger.error(`Unable to connect due to ${error}`))

app.listen(PORT, () => {
    logger.info(`Server started on ${PORT}`)
})

export default app;