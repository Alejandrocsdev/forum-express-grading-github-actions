'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate (models) {
      Category.hasMany(models.Restaurant, { foreignKey: 'categoryId' })
    }
  }
  Category.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Category',
      underscored: true
    }
  )
  return Category
}
