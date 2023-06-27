import { Product } from "../dbmodel/product";
import * as productRepo from "../repository/product_repository";

const createProduct = async (product: Product): Promise<Product> => {
    return productRepo.createProduct(product)
}
const getAllProducts = async (): Promise<Product[]> => {
    return productRepo.getAllProducts()
}
const getProductById = async (id: string): Promise<Product> => {
    return productRepo.getProductById(id) as any
}
const updateProductById = async (id: string, updateAttributes: Product): Promise<Product> => {
    return productRepo.updateProductById(id, updateAttributes) as any
}
const getProductByFilters = async (filter: Product): Promise<Product[]> => {
    return productRepo.getProductByFilters(filter)
}
export {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    getProductByFilters
}