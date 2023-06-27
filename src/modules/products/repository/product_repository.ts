
import { Product } from "../dbmodel/product";

const getProductById = async (id: string) => {
    const query = { where: { recordStatus: 1, id: id } }
    return Product.findOne(query);
}
const getAllProducts = async () => {
    return Product.findAll({
        where: {
            recordStatus: 1
        }
    })
}
const createProduct = async (product: Product) => {
    return Product.create(product)
}
const updateProductById = async (id: string, updateAttributes: Product) => {
    return Product.update(
        updateAttributes, {
        where: { id: id }
    })
}
const getProductByFilters = async (filter: Product) => {
    const filterAttr = { where: filter } as any
    return Product.findAll(filterAttr)
}
export {
    getAllProducts,
    createProduct,
    getProductById,
    updateProductById,
    getProductByFilters
}