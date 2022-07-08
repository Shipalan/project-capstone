require("dotenv").config();

const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  createLog: (req, res) => {
    const { date, miles } = body;

    console.log(date)
    console.log(miles)
    
    // sequelize.query(`
    // INSERT INTO user_log (date, miles)
    // VALUES ('${date}', '${miles}')
    // `);
  },
};
