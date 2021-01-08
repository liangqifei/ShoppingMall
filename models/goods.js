const Sequelize = require('sequelize');
const db = require('../config/db');

const Goods = db.defineModel('goods', {
  id: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE(4,2),
    allowNull: false
  },
  create_time: { type: Sequelize.DATE, allowNull: true },
  update_time: { type: Sequelize.DATE, allowNull: true },
  description: {
    type: Sequelize.STRING(500),
    allowNull: true
  },
});


const insertData = async (obj) => {
  let callback = await Goods.create(obj);
  console.log('created: success');
  return JSON.parse(JSON.stringify(callback));
};

const selectData = async (obj, order) => {
  let callback = await Goods.findAll({
    where: obj,
    order: order ? order : []
  });
  console.log(`find ${callback.length} books: success`);
  return JSON.parse(JSON.stringify(callback));
};

const updateData = async (values, options) => {
  let callback = await Goods.update(values, {
    where: options
  }).then(result => {
    console.log(`update ${result} books: success`);
    return result;
  });
  return callback[0];
};

// const deleteData = async (obj) => {
//   let callback = await Book.destroy({
//     where: obj
//   }).then(result => {
//     console.log(`delete ${result} books: success`);
//     return result;
//   });
//   return callback;
// };

module.exports={
  Goods,
  insertData,
  selectData,
  updateData,
  // deleteData
};
