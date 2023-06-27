import { Model, DataTypes, Sequelize } from 'sequelize';
import sequelize from '../../../config/database'
interface ProductAttributes {
    id: string;
    productName: string;
    productDescription: string;
    price: number;
    category: string;
    stockQuantity: number;
    createdAt?: Date;
    updatedAt?: Date;
    recordStatus: number;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
    public id!: string;
    public productName!: string;
    public productDescription!: string;
    public price!: number;
    public category!: string;
    public stockQuantity!: number;
    public createdAt?: Date;
    public updatedAt?: Date;
    public recordStatus!: number;
}

Product.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stockQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        recordStatus: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    }, {
    sequelize,
    tableName: 'product'
}
);

export { Product };
