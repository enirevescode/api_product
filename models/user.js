//brochure seque models
const { DataTypes } = require('sequelize')
const DB = require('../db.config')

const UserModel = DB.define ('UserModel', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        unique: {
          msg: 'Le nom est déjà pris.'
        }
      },
      password: {
        type: DataTypes.STRING,
        validate:{
          isEmail: true  //validation de données
        }
      },
      password:{
        type: DataTypes.STRING,
        is: /^[0-9a-f]{64}$/i  //1 contrainte
      }
    }, { paranoid: true})  // pr faire du softDelete
    
    module.exports = UserModel