module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burger", {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      burger_status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
  
     
    });
    return burger;
  };