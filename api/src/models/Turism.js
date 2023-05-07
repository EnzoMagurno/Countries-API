const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'turism',
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
          isInt: true,
        },
      },
      duration: {
        type: DataTypes.STRING,
      },
      season: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
