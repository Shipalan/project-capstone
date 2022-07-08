require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(DATABASE_URL, {
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
