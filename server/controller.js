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
    // console.log('module exports', req.body)
    const { date, miles } = req.body

    // console.log(date)
    // console.log(miles)
    
    sequelize.query(`
    INSERT INTO user_log (date, miles)
    VALUES ('${date}', '${miles}')
    `);
  },
  recentLogs: (req,res) => {
    sequelize.query(
      `SELECT * FROM user_log
      ORDER BY user_log_id DESC LIMIT 5;`
    ).then((dbRes) => {
      console.log(dbRes)
      res.status(200).send(dbRes)
    })
  }
};
