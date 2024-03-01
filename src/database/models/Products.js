const ProductModel = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    underscored: true,
    timestamps: false,
    tableName: 'products'
  });

  return Product;
};

module.exports = ProductModel;