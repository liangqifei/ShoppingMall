const Sequelize = require("sequelize");
const db = require("../config/db");

const Users = db.defineModel("users", {
  id: { type: Sequelize.BIGINT(11), primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: true },
  email: { type: Sequelize.STRING, allowNull: true },
  phone: { type: Sequelize.STRING, allowNull: true },
  url: { type: Sequelize.STRING, allowNull: true },
  signature: { type: Sequelize.STRING, allowNull: true },
  password: { type: Sequelize.STRING, allowNull: true },
  company_id: { type: Sequelize.INTEGER, allowNull: true },
  token: { type: Sequelize.STRING, allowNull: true },
  status: { type: Sequelize.INTEGER, allowNull: true },
  create_time: { type: Sequelize.DATE, allowNull: true },
  update_time: { type: Sequelize.DATE, allowNull: true },
  position: { type: Sequelize.STRING, allowNull: true },
  reg_status: { type: Sequelize.INTEGER, allowNull: true },
});

const insertData = async (obj) => {
  let callback = await Users.create(obj);
  console.log("created: success");
  return JSON.parse(JSON.stringify(callback));
};

const selectData = async (obj) => {
  let callback = await Users.findAll({
    where: obj,
  });
  console.log(`find ${callback.length} books: success`);
  console.log(JSON.parse(JSON.stringify(callback)));
  return JSON.parse(JSON.stringify(callback));
};

const updateData = async (values, options) => {
  let callback = await Users.update(values, {
    where: options,
  }).then((result) => {
    console.log(`update ${result} books: success`);
    return result;
  });
  return callback[0];
};

module.exports = {
  Users,
  insertData,
  selectData,
  updateData,
};
