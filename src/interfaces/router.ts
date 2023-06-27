import { Router } from 'express';
import { urlencoded, json } from 'express';
import cors from 'cors';
import httpLogger from './middlewares/http_logger';
import productRouter from '../modules/products/controller/product_controller';

const apiRouter = Router();
const router = Router();
router.use(httpLogger);
// max limit of request body
apiRouter.use(json({ limit: '2mb' }));
// we can define limit and parameterLimit in urlencoded for safety purpose
apiRouter.use(urlencoded({ 
    extended: true,
    limit:'2mb',
    parameterLimit:200
}));
apiRouter.use(
    cors({
        origin: [],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
          'Content-Type',
          'Authorization',
          'x-app-name',
        ]
      })
)
router.use('/api/v1', apiRouter);

// We can define more routers here
apiRouter.use('/products', productRouter)

export default router;