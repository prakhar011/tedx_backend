import express from "express";
import config from "config";
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';
import rateLimit from 'express-rate-limit'

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, 
	max: 100,
	standardHeaders: true, 
	legacyHeaders: false,
})


const port = config.get<number>("port");

const app = express();
app.use(express.json());
app.use(limiter);
app.listen(port, async () => {
    logger.info(`Server started on port ${port}`);
    connect();
    routes(app);
});
