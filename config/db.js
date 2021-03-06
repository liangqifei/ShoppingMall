const Sequelize = require("sequelize");
const config = require("./index");

var sequelize = new Sequelize(
  config.database.DATABASE,
  config.database.USERNAME,
  config.database.PASSWORD,
  {
    host: config.database.HOST,
    dialect: "mysql",
    timezone: "+08:00",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
const ID_TYPE = Sequelize.INTEGER(11);

function defineModel(name, attributes) {
  let attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === "object" && value["type"]) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false,
      };
    }
  }
  attrs.id = {
    type: ID_TYPE,
    primaryKey: true,
  };
  attrs.create_time = {
    type: Sequelize.DATE,
  };
  attrs.update_time = {
    type: Sequelize.DATE,
  };
  return sequelize.define(name, attrs, {
    tableName: name,
    timestamps: false,
    hooks: {
      beforeSave: (obj) => {
        let now = Date.now();
        if (obj.isNewRecord) {
          obj.create_time = now;
          obj.update_time = now;
        } else {
          obj.update_time = Date.now();
        }
      },
    },
  });
}

module.exports = {
  defineModel,
  sequelize,
};
