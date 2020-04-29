const { Model, DataTypes } = require('sequelize');

class Medicamentos extends Model {
  
   static init(sequelize) {
      
      super.init({
         name: DataTypes.STRING,
         codBarras: DataTypes.STRING,
      }, {
         sequelize
      })
   }
}

module.exports = Medicamentos;