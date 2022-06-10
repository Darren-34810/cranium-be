'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class UserWestcon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserWestcon.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    ticket: DataTypes.STRING,
    notify: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserWestcon',
  });
  return UserWestcon;
};