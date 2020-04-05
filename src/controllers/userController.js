const {UserModel, UserRoleModel} = require('../db/models/index');
async function save(data) {
  try {
    const userIns = new UserModel(data);
    const user = await userIns.save();
    const userRole = {
      role: 'user',
      userId: user.id
    }
    const userDoc = UserModel.find();
    const users = await userDoc.exec();
    if((users || {}).length === 1) {
      userRole.role = 'admin';
    }
    new UserRoleModel(userRole).save();
  } catch (ex) {
    console.error('error--->', ex);
    throw ex;
  }
}

module.exports = { save }