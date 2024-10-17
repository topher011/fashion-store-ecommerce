module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      status: {
        type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
        defaultValue: 'pending'
      }
    });
  
    // Define associations here if needed
    Order.associate = (models) => {
      Order.belongsTo(models.User, { foreignKey: 'userId' });
      Order.belongsTo(models.Product, { foreignKey: 'productId' });
    };
  
    return Order;
  };
  