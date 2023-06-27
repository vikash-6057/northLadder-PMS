import express, { Request, Response, NextFunction } from 'express';
import * as productService from '../service/product_service'
import { Product } from '../dbmodel/product';
import Logger from '../../../interfaces/middlewares/logger';

const router = express.Router();

router.get('/filter', async (req: Request, res: Response) => {
    try {
        const queryParams = req.query as unknown;
        const filters = queryParams as Product
        const category: string = filters?.category
        const updateAttributes: Product = { recordStatus: 1, category: category } as any
        const products = await productService.getProductByFilters(updateAttributes);
        return res.status(200).send(products);
    } catch (err) {
        Logger.error(`error due to ${err}`)
        res.status(500).json({ error: 'An internal server error occurred' });
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await productService.getProductById(req.params.id)
        return res.status(200).send(product);
    } catch (err) {
        Logger.error(`Unable to fetch products due to error ${err}`)
        res.status(500).json({ error: 'An internal server error occurred' });
    }
})

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productService.getAllProducts()
        return res.status(200).send(products)
    } catch (err) {
        Logger.error(`Unable to fetch products due to error ${err}`)
        res.status(500).json({ error: 'An internal server error occurred' });
    }
})

router.put('/:id', async (req: Request, res: Response) => {
    try {
        const product = await productService.updateProductById(req.params.id, { ...req.body })
        return res.status(200).send(product)
    } catch (err) {
        Logger.error(`Unable to update products due to error ${err}`)
        res.status(500).json({ error: 'An internal server error occurred' });
    }
    const product = await productService.updateProductById(req.params.id, { ...req.body })
    return res.status(200).send(product)
})

router.post('/', async (req: Request, res: Response) => {
    try {
        const product: any = await productService.createProduct({ ...req.body })
        if (product) {
            res.status(200).json({ success: 'success' });
        }
    } catch (err) {
        Logger.error('Error adding a new product:', err);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const updateAttributes: Product = { recordStatus: 0 } as any
        await productService.updateProductById(req.params.id, updateAttributes)
        return res.status(200).json({ success: 'success' });
    } catch (err) {
        Logger.error('Error deleting the product:', err);
        res.status(500).json({ error: 'An internal server error occurred' });
    }
})

export default router;